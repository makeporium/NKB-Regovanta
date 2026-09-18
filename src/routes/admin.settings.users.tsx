import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { authService, type AdminUser } from "@/lib/auth/authService";
import { hashPassword } from "@/lib/auth/crypto";
import { toast } from "sonner";
import { Users, UserPlus, Edit2, Trash2, ShieldCheck, ShieldAlert, X, Check, Lock } from "lucide-react";

export const Route = createFileRoute("/admin/settings/users")({
  component: AdminUsersSettingsPage,
});

function AdminUsersSettingsPage() {
  const [users, setUsers] = useState<AdminUser[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState<AdminUser | null>(null);

  // Add / Edit Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<"add" | "edit">("add");
  const [editId, setEditId] = useState<string | null>(null);
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isActive, setIsActive] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const session = authService.getCurrentSession();
    if (session) setCurrentUser(session.user);
    loadUsers();
  }, []);

  const loadUsers = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("admin_users")
      .select("id, email, username, full_name, is_active, failed_attempts, created_at")
      .order("created_at", { ascending: true });

    if (error) {
      toast.error("Failed to load admin accounts: " + error.message);
    } else {
      setUsers(data || []);
    }
    setLoading(false);
  };

  const handleOpenAdd = () => {
    setModalMode("add");
    setEditId(null);
    setFullName("");
    setUsername("");
    setEmail("");
    setPassword("");
    setIsActive(true);
    setIsModalOpen(true);
  };

  const handleOpenEdit = (user: AdminUser) => {
    setModalMode("edit");
    setEditId(user.id);
    setFullName(user.full_name);
    setUsername(user.username);
    setEmail(user.email);
    setPassword(""); // Leave empty to keep existing
    setIsActive(user.is_active);
    setIsModalOpen(true);
  };

  const handleDelete = async (user: AdminUser) => {
    if (user.id === currentUser?.id) {
      toast.error("Security Rule: You cannot delete your own active administrator account.");
      return;
    }

    const activeCount = users.filter((u) => u.is_active).length;
    if (user.is_active && activeCount <= 1) {
      toast.error("Security Rule: The system must keep at least one active administrator.");
      return;
    }

    if (!confirm(`Are you sure you want to permanently delete admin account "${user.username}"?`)) {
      return;
    }

    const { error } = await supabase.from("admin_users").delete().eq("id", user.id);
    if (error) {
      toast.error(error.message);
    } else {
      toast.success(`Admin account "${user.username}" deleted.`);
      loadUsers();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    const cleanEmail = email.trim().toLowerCase();
    const cleanUsername = username.trim().toLowerCase();

    if (modalMode === "add") {
      if (password.length < 8) {
        toast.error("Password must be at least 8 characters.");
        setSubmitting(false);
        return;
      }

      const { hash, salt } = await hashPassword(password);
      const { error } = await supabase.from("admin_users").insert({
        full_name: fullName.trim(),
        username: cleanUsername,
        email: cleanEmail,
        password_hash: hash,
        salt,
        is_active: isActive,
      });

      if (error) {
        toast.error("Failed to create admin: " + error.message);
      } else {
        toast.success(`Admin account "${cleanUsername}" created successfully!`);
        setIsModalOpen(false);
        loadUsers();
      }
    } else if (modalMode === "edit" && editId) {
      const activeCount = users.filter((u) => u.is_active && u.id !== editId).length;
      if (!isActive && activeCount === 0) {
        toast.error("Security Rule: You cannot disable the only remaining active administrator.");
        setSubmitting(false);
        return;
      }

      const updates: any = {
        full_name: fullName.trim(),
        username: cleanUsername,
        email: cleanEmail,
        is_active: isActive,
        updated_at: new Date().toISOString(),
      };

      if (password.trim()) {
        if (password.length < 8) {
          toast.error("New password must be at least 8 characters.");
          setSubmitting(false);
          return;
        }
        const { hash, salt } = await hashPassword(password);
        updates.password_hash = hash;
        updates.salt = salt;
      }

      const { error } = await supabase.from("admin_users").update(updates).eq("id", editId);
      if (error) {
        toast.error("Failed to update admin: " + error.message);
      } else {
        toast.success("Administrator account updated!");
        setIsModalOpen(false);
        loadUsers();
      }
    }

    setSubmitting(false);
  };

  return (
    <div className="space-y-6 pb-16">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">Admin Users</h1>
          <p className="mt-1 text-xs text-slate-500">
            Manage administrative team members with full SEO and blog publishing access.
          </p>
        </div>
        <button
          onClick={handleOpenAdd}
          className="inline-flex items-center gap-2 rounded-lg bg-[#0b3a96] px-4 py-2 text-xs font-semibold text-white shadow-xs hover:bg-blue-800 transition"
        >
          <UserPlus className="h-4 w-4" />
          <span>Add Admin User</span>
        </button>
      </div>

      {/* Security Rule Card */}
      <div className="rounded-xl border border-blue-200 bg-blue-50/70 p-4 text-xs text-blue-900 flex items-start gap-3">
        <ShieldCheck className="h-5 w-5 shrink-0 text-[#0b3a96] mt-0.5" />
        <div className="space-y-1">
          <p className="font-semibold text-blue-950">Security Safeguards Active</p>
          <p className="leading-relaxed text-blue-800">
            All admin passwords are encrypted with salted PBKDF2 (100,000 iterations). You cannot delete your own account, and the system always prevents deleting or disabling the last active admin.
          </p>
        </div>
      </div>

      {/* Users Table */}
      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xs">
        <div className="w-full overflow-x-auto">
          <table className="w-full text-left text-xs min-w-[650px]">
            <thead className="border-b border-slate-200 bg-slate-50 font-semibold uppercase tracking-wider text-slate-600">
              <tr>
                <th className="px-6 py-3.5">User</th>
                <th className="px-6 py-3.5">Username</th>
                <th className="px-6 py-3.5">Email</th>
                <th className="px-6 py-3.5">Status</th>
                <th className="px-6 py-3.5">Created</th>
                <th className="px-6 py-3.5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {loading ? (
                <tr>
                  <td colSpan={6} className="px-6 py-8 text-center text-slate-500">
                    Loading administrator accounts...
                  </td>
                </tr>
              ) : users.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-6 py-8 text-center text-slate-500">
                    No admin users found.
                  </td>
                </tr>
              ) : (
                users.map((u) => {
                  const isSelf = u.id === currentUser?.id;
                  return (
                    <tr key={u.id} className="hover:bg-slate-50 transition">
                      <td className="px-6 py-3.5">
                        <div className="flex items-center gap-3">
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 font-bold text-xs text-[#0b3a96] border border-slate-200">
                            {u.full_name?.charAt(0) || "A"}
                          </div>
                          <div>
                            <div className="font-semibold text-slate-900 flex items-center gap-2">
                              <span>{u.full_name}</span>
                              {isSelf && (
                                <span className="rounded bg-blue-50 px-1.5 py-0.5 text-[10px] font-semibold text-[#0b3a96] border border-blue-200">
                                  You
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-3.5 font-mono text-slate-700">{u.username}</td>
                      <td className="px-6 py-3.5 text-slate-600">{u.email}</td>
                      <td className="px-6 py-3.5">
                        {u.is_active ? (
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-700 border border-emerald-200">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                            Active
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-rose-50 px-2.5 py-0.5 text-[11px] font-semibold text-rose-700 border border-rose-200">
                            <span className="h-1.5 w-1.5 rounded-full bg-rose-500" />
                            Disabled
                          </span>
                        )}
                      </td>
                      <td className="px-6 py-3.5 text-slate-500">
                        {new Date(u.created_at).toLocaleDateString("en-IN", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        })}
                      </td>
                      <td className="px-6 py-3.5 text-right">
                        <div className="flex items-center justify-end gap-1.5">
                          <button
                            onClick={() => handleOpenEdit(u)}
                            className="rounded p-1.5 text-slate-500 hover:bg-slate-100 hover:text-slate-800 transition"
                            title="Edit User"
                          >
                            <Edit2 className="h-3.5 w-3.5" />
                          </button>
                          {!isSelf && (
                            <button
                              onClick={() => handleDelete(u)}
                              className="rounded p-1.5 text-rose-600 hover:bg-rose-50 transition"
                              title="Delete User"
                            >
                              <Trash2 className="h-3.5 w-3.5" />
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* ── Add / Edit Modal ────────────────────────────────────────────── */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4 backdrop-blur-xs">
          <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <h3 className="text-base font-bold text-slate-900">
                {modalMode === "add" ? "Add New Administrator" : "Edit Administrator Account"}
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="rounded p-1 text-slate-400 hover:text-slate-700"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="mt-4 space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700">Full Name</label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. John Doe"
                  className="mt-1.5 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-medium text-slate-900 focus:bg-white focus:border-[#0b3a96] focus:outline-none transition"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700">Username</label>
                <input
                  type="text"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="e.g. jdoe"
                  className="mt-1.5 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-mono text-slate-900 focus:bg-white focus:border-[#0b3a96] focus:outline-none transition"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700">Email Address</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="jdoe@nkbregovanta.com"
                  className="mt-1.5 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-medium text-slate-900 focus:bg-white focus:border-[#0b3a96] focus:outline-none transition"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700">
                  {modalMode === "add" ? "Password (min 8 chars)" : "Password (leave blank to keep current)"}
                </label>
                <input
                  type="password"
                  required={modalMode === "add"}
                  minLength={8}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder={modalMode === "add" ? "••••••••••••" : "Unchanged"}
                  className="mt-1.5 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-medium text-slate-900 focus:bg-white focus:border-[#0b3a96] focus:outline-none transition"
                />
              </div>

              <div className="pt-2">
                <label className="flex items-center gap-2.5 cursor-pointer text-xs text-slate-700 font-medium">
                  <input
                    type="checkbox"
                    checked={isActive}
                    onChange={(e) => setIsActive(e.target.checked)}
                    className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span>Account is Active (can log in)</span>
                </label>
              </div>

              <div className="flex justify-end gap-2 pt-4 border-t border-slate-200">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="rounded-lg border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={submitting}
                  className="rounded-lg bg-[#0b3a96] px-5 py-2 text-xs font-semibold text-white hover:bg-blue-800 disabled:opacity-50 transition shadow-xs"
                >
                  {submitting ? "Saving..." : modalMode === "add" ? "Create Account" : "Update Account"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
