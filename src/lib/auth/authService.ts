import { supabase } from "@/lib/supabase";
import { hashPassword, verifyPassword } from "./crypto";

export interface AdminUser {
  id: string;
  email: string;
  username: string;
  full_name: string;
  is_active: boolean;
  failed_attempts: number;
  locked_until?: string | null;
  created_at: string;
}

export interface SessionData {
  user: AdminUser;
  expiresAt: number;
}

const SESSION_STORAGE_KEY = "nkb_admin_session";

export const authService = {
  async login(
    identifier: string,
    password: string,
    rememberMe = false,
    ip = "127.0.0.1",
    userAgent = "Browser"
  ): Promise<{ success: boolean; error?: string; user?: AdminUser }> {
    const cleanId = identifier.trim().toLowerCase();

    // 1. Fetch user by email or username
    const { data: users, error: fetchErr } = await supabase
      .from("admin_users")
      .select("*")
      .or(`email.eq.${cleanId},username.eq.${cleanId}`)
      .limit(1);

    if (fetchErr) {
      console.error("Supabase user fetch error:", fetchErr);
      return { success: false, error: "Database connection error. Ensure Supabase schema is deployed." };
    }

    const user = users?.[0];
    if (!user) {
      // Log attempt
      await supabase.from("login_activity").insert({
        ip,
        user_agent: userAgent,
        success: false,
      });
      return { success: false, error: "Invalid credentials." };
    }

    // 2. Check active status
    if (!user.is_active) {
      return { success: false, error: "This administrative account has been deactivated." };
    }

    // 3. Check lockout
    if (user.locked_until && new Date(user.locked_until).getTime() > Date.now()) {
      const remainingMinutes = Math.ceil(
        (new Date(user.locked_until).getTime() - Date.now()) / (60 * 1000)
      );
      return {
        success: false,
        error: `Account locked due to 5 failed attempts. Please retry in ${remainingMinutes} minute(s).`,
      };
    }

    // 4. Verify password
    const isMatch = await verifyPassword(password, user.password_hash, user.salt);

    if (!isMatch) {
      const newFailedAttempts = (user.failed_attempts || 0) + 1;
      let lockUpdate: { failed_attempts: number; locked_until?: string } = {
        failed_attempts: newFailedAttempts,
      };

      if (newFailedAttempts >= 5) {
        const lockTime = new Date(Date.now() + 15 * 60 * 1000).toISOString();
        lockUpdate.locked_until = lockTime;
      }

      await supabase.from("admin_users").update(lockUpdate).eq("id", user.id);
      await supabase.from("login_activity").insert({
        user_id: user.id,
        ip,
        user_agent: userAgent,
        success: false,
      });

      if (newFailedAttempts >= 5) {
        return {
          success: false,
          error: "Too many failed attempts. This account is locked for 15 minutes.",
        };
      }

      return {
        success: false,
        error: `Invalid credentials. (${5 - newFailedAttempts} attempt(s) remaining before 15m lockout)`,
      };
    }

    // 5. Successful login: reset lock and failed attempts
    await supabase
      .from("admin_users")
      .update({ failed_attempts: 0, locked_until: null })
      .eq("id", user.id);

    await supabase.from("login_activity").insert({
      user_id: user.id,
      ip,
      user_agent: userAgent,
      success: true,
    });

    // Session duration: 30 days if rememberMe, otherwise 30 minutes
    const sessionDurationMs = rememberMe
      ? 30 * 24 * 60 * 60 * 1000
      : 30 * 60 * 1000;
    const session: SessionData = {
      user: {
        id: user.id,
        email: user.email,
        username: user.username,
        full_name: user.full_name,
        is_active: user.is_active,
        failed_attempts: 0,
        created_at: user.created_at,
      },
      expiresAt: Date.now() + sessionDurationMs,
    };

    if (typeof window !== "undefined") {
      const storage = rememberMe ? localStorage : sessionStorage;
      storage.setItem(SESSION_STORAGE_KEY, JSON.stringify(session));
    }

    return { success: true, user: session.user };
  },

  getCurrentSession(): SessionData | null {
    if (typeof window === "undefined") return null;
    try {
      const raw =
        localStorage.getItem(SESSION_STORAGE_KEY) ||
        sessionStorage.getItem(SESSION_STORAGE_KEY);
      if (!raw) return null;
      const session = JSON.parse(raw) as SessionData;
      if (Date.now() > session.expiresAt) {
        this.logout();
        return null;
      }
      return session;
    } catch {
      return null;
    }
  },

  logout(): void {
    if (typeof window !== "undefined") {
      localStorage.removeItem(SESSION_STORAGE_KEY);
      sessionStorage.removeItem(SESSION_STORAGE_KEY);
    }
  },

  async changePassword(
    userId: string,
    currentPass: string,
    newPass: string
  ): Promise<{ success: boolean; error?: string }> {
    const { data: user } = await supabase
      .from("admin_users")
      .select("*")
      .eq("id", userId)
      .single();

    if (!user) return { success: false, error: "User not found." };

    const isMatch = await verifyPassword(currentPass, user.password_hash, user.salt);
    if (!isMatch) return { success: false, error: "Incorrect current password." };

    if (newPass.length < 8) {
      return { success: false, error: "Password must be at least 8 characters." };
    }

    const { hash, salt } = await hashPassword(newPass);
    const { error: updateErr } = await supabase
      .from("admin_users")
      .update({ password_hash: hash, salt, updated_at: new Date().toISOString() })
      .eq("id", userId);

    if (updateErr) return { success: false, error: updateErr.message };
    return { success: true };
  },

  async forgotPassword(email: string): Promise<{ success: boolean; message: string }> {
    const cleanEmail = email.trim().toLowerCase();
    const { data: user } = await supabase
      .from("admin_users")
      .select("id")
      .eq("email", cleanEmail)
      .single();

    if (user) {
      const resetToken = Math.random().toString(36).substring(2) + Date.now().toString(36);
      const { hash } = await hashPassword(resetToken);
      const expiresAt = new Date(Date.now() + 60 * 60 * 1000).toISOString(); // 60 mins

      await supabase.from("password_resets").insert({
        user_id: user.id,
        token_hash: hash,
        expires_at: expiresAt,
        used: false,
      });
      console.log(`[Admin Password Reset Token generated for ${cleanEmail}]: ${resetToken}`);
    }

    return {
      success: true,
      message:
        "If an account exists with that email, a password reset link has been dispatched. It will expire in 60 minutes.",
    };
  },
};
