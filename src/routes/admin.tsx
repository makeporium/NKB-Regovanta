import { createFileRoute, Outlet, Link, useRouter, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  LayoutDashboard,
  Activity,
  FileText,
  KeyRound,
  Image as ImageIcon,
  Link2,
  ArrowRightLeft,
  BookmarkCheck,
  Code2,
  AlertOctagon,
  ShieldAlert,
  BookOpen,
  PenTool,
  FolderTree,
  Tag,
  Settings,
  Bot,
  Network,
  BarChart3,
  Search,
  Tags,
  Users,
  LogOut,
  Key,
  ExternalLink,
  ChevronDown,
  Clock,
  ShieldCheck,
  Menu,
  X,
  Globe,
} from "lucide-react";
import { authService, type AdminUser } from "@/lib/auth/authService";
import { toast } from "sonner";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "NKB Regovanta Admin Panel" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: AdminRootLayout,
});

function AdminRootLayout() {
  const router = useRouter();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isLoginPage = pathname === "/admin/login" || pathname === "/admin/login/";
  const [currentUser, setCurrentUser] = useState<AdminUser | null>(null);
  const [isAuthChecking, setIsAuthChecking] = useState(true);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isChangePassOpen, setIsChangePassOpen] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  // Change password form state
  const [currentPass, setCurrentPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [passSubmitting, setPassSubmitting] = useState(false);

  useEffect(() => {
    const session = authService.getCurrentSession();
    if (!session) {
      if (!isLoginPage) {
        router.navigate({ to: "/admin/login" });
      }
      setIsAuthChecking(false);
      return;
    }

    setCurrentUser(session.user);
    setIsAuthChecking(false);

    // Inactivity listener: logs out after 30 minutes without activity
    let timeoutId: NodeJS.Timeout;
    const resetTimer = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        authService.logout();
        toast.info("Session expired due to 30 minutes of inactivity.");
        router.navigate({ to: "/admin/login" });
      }, 30 * 60 * 1000);
    };

    window.addEventListener("mousemove", resetTimer);
    window.addEventListener("keydown", resetTimer);
    window.addEventListener("click", resetTimer);
    resetTimer();

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("mousemove", resetTimer);
      window.removeEventListener("keydown", resetTimer);
      window.removeEventListener("click", resetTimer);
    };
  }, [pathname, isLoginPage, router]);

  if (isAuthChecking) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-950 text-slate-400">
        <div className="flex flex-col items-center gap-3">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-blue-500 border-t-transparent" />
          <span className="text-sm">Verifying administrative credentials...</span>
        </div>
      </div>
    );
  }

  // If on login screen, render without sidebar shell
  if (isLoginPage) {
    return <Outlet />;
  }

  const handleLogout = () => {
    authService.logout();
    toast.success("Logged out successfully.");
    router.navigate({ to: "/admin/login" });
  };

  const handleChangePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentUser) return;
    if (newPass !== confirmPass) {
      toast.error("New passwords do not match.");
      return;
    }
    if (newPass.length < 8) {
      toast.error("Password must be at least 8 characters.");
      return;
    }

    setPassSubmitting(true);
    const res = await authService.changePassword(currentUser.id, currentPass, newPass);
    setPassSubmitting(false);

    if (!res.success) {
      toast.error(res.error || "Failed to update password.");
      return;
    }

    toast.success("Password updated successfully!");
    setIsChangePassOpen(false);
    setCurrentPass("");
    setNewPass("");
    setConfirmPass("");
  };

  const navGroups = [
    {
      group: null,
      items: [
        { name: "Admin Panel", path: "/admin/dashboard", icon: LayoutDashboard },
      ],
    },
    {
      group: "SEO",
      items: [
        { name: "SEO Dashboard", path: "/admin/seo/dashboard", icon: Activity },
        { name: "Pages", path: "/admin/seo/pages", icon: FileText },
        { name: "Keywords", path: "/admin/seo/keywords", icon: KeyRound },
        { name: "Images", path: "/admin/seo/images", icon: ImageIcon },
        { name: "Internal Links", path: "/admin/seo/internal-links", icon: Link2 },
        { name: "Redirects", path: "/admin/seo/redirects", icon: ArrowRightLeft },
        { name: "Canonicals", path: "/admin/seo/canonicals", icon: BookmarkCheck },
        { name: "Schema", path: "/admin/seo/schema", icon: Code2 },
        { name: "Broken Links", path: "/admin/seo/broken-links", icon: AlertOctagon },
        { name: "Technical SEO", path: "/admin/seo/technical", icon: ShieldAlert },
      ],
    },
    {
      group: "BLOG",
      items: [
        { name: "All Posts", path: "/admin/blog/posts", icon: BookOpen },
        { name: "Add New Post", path: "/admin/blog/new", icon: PenTool },
        { name: "Categories", path: "/admin/blog/categories", icon: FolderTree },
        { name: "Tags", path: "/admin/blog/tags", icon: Tag },
      ],
    },
    {
      group: "SETTINGS",
      items: [
        { name: "General", path: "/admin/settings/general", icon: Settings },
        { name: "Robots.txt", path: "/admin/settings/robots", icon: Bot },
        { name: "Sitemap", path: "/admin/settings/sitemap", icon: Network },
        { name: "Analytics", path: "/admin/settings/analytics", icon: BarChart3 },
        { name: "Search Console", path: "/admin/settings/search-console", icon: Search },
        { name: "Google Tag Manager", path: "/admin/settings/gtm", icon: Tags },
        { name: "Admin Users", path: "/admin/settings/users", icon: Users },
      ],
    },
  ];

  return (
    <div className="flex min-h-screen bg-[#f8fafc] font-sans text-slate-800">
      {/* ── Sidebar (Desktop & Mobile) ─────────────────────────────────── */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-64 flex-col border-r border-slate-200 bg-white transition-transform duration-200 lg:static lg:translate-x-0 ${
          isMobileSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Brand Header */}
        <div className="flex h-20 flex-col justify-center border-b border-slate-200/80 px-6">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-[17px] font-extrabold tracking-tight text-[#0b3a96]">
                NKB Regovanta<sup className="text-[10px] ml-0.5 font-bold">®</sup>
              </div>
              <div className="text-[9.5px] uppercase tracking-wider text-slate-400 font-medium mt-0.5">
                Regulatory. Quality. Manufacturing. Market Access.
              </div>
            </div>
            <button
              onClick={() => setIsMobileSidebarOpen(false)}
              className="rounded p-1 text-slate-400 hover:bg-slate-100 lg:hidden"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Menu Navigation */}
        <div className="flex-1 overflow-y-auto px-3 py-4 space-y-5">
          {navGroups.map((group, idx) => (
            <div key={idx}>
              {group.group && (
                <div className="px-3 pb-2 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  {group.group}
                </div>
              )}
              <nav className="space-y-1">
                {group.items.map((item) => {
                  const Icon = item.icon;
                  const isActive =
                    pathname === item.path ||
                    (item.path !== "/admin/dashboard" && pathname.startsWith(item.path));
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setIsMobileSidebarOpen(false)}
                      className={`flex items-center gap-3 rounded-lg px-3 py-2 text-xs font-semibold transition-all ${
                        isActive
                          ? "bg-blue-50 text-[#0b3a96] shadow-xs"
                          : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                      }`}
                    >
                      <Icon className={`h-4 w-4 shrink-0 ${isActive ? "text-[#0b3a96]" : "text-slate-400"}`} />
                      <span>{item.name}</span>
                    </Link>
                  );
                })}
              </nav>
            </div>
          ))}
        </div>

        {/* Building a Safer, Healthier Tomorrow Card */}
        <div className="p-3 border-t border-slate-100">
          <div className="rounded-xl bg-gradient-to-br from-blue-50/80 to-slate-50 p-3 border border-blue-100/60">
            <div className="text-xs font-bold text-slate-800">
              Building a Safer, Healthier Tomorrow
            </div>
            <div className="text-[11px] text-slate-500 mt-1 leading-relaxed">
              Global Regulatory Solutions for a Better Tomorrow.
            </div>
          </div>
        </div>
      </aside>

      {/* ── Main Panel Content ────────────────────────────────────────── */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Top Header */}
        <header className="sticky top-0 z-40 flex h-16 items-center justify-between border-b border-slate-200 bg-white px-6">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsMobileSidebarOpen(true)}
              className="rounded p-1 text-slate-500 hover:bg-slate-100 lg:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>

            {/* Search Bar */}
            <div className="relative w-64 sm:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-400" />
              <input
                type="text"
                placeholder="Search pages, keywords, issues..."
                className="w-full pl-9 pr-4 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition"
              />
            </div>
          </div>

          <div className="flex items-center gap-5">
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-[#0b3a96] transition"
            >
              <Globe className="h-3.5 w-3.5 text-slate-400" />
              <span>Go to Website ↗</span>
            </a>

            {/* User Profile */}
            <div className="relative">
              <button
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                className="flex items-center gap-2.5 rounded-lg p-1.5 text-left hover:bg-slate-50 transition"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-900 font-bold text-xs text-white">
                  AS
                </div>
                <div className="hidden sm:block text-left">
                  <div className="text-xs font-bold text-slate-800">
                    {currentUser?.full_name || "Ayush Shrivastava"}
                  </div>
                  <div className="text-[10px] text-slate-400">
                    Admin
                  </div>
                </div>
                <ChevronDown className="h-3.5 w-3.5 text-slate-400 ml-0.5" />
              </button>

              {isUserMenuOpen && (
                <div className="absolute right-0 top-full mt-1.5 w-48 rounded-lg border border-slate-200 bg-white p-1.5 shadow-xl z-50">
                  <div className="px-2.5 py-1.5 border-b border-slate-100 text-[11px] text-slate-500">
                    Signed in as <strong className="text-slate-800">{currentUser?.email || "admin@nkbregovanta.com"}</strong>
                  </div>
                  <button
                    onClick={() => {
                      setIsUserMenuOpen(false);
                      setIsChangePassOpen(true);
                    }}
                    className="flex w-full items-center gap-2 rounded-md px-2.5 py-1.5 text-xs text-slate-700 hover:bg-slate-50"
                  >
                    <Key className="h-3.5 w-3.5 text-slate-400" />
                    <span>Change Password</span>
                  </button>
                  <button
                    onClick={handleLogout}
                    className="flex w-full items-center gap-2 rounded-md px-2.5 py-1.5 text-xs text-rose-600 hover:bg-rose-50"
                  >
                    <LogOut className="h-3.5 w-3.5 text-rose-500" />
                    <span>Logout</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Main Body */}
        <main className="flex-1 overflow-y-auto p-6 md:p-8 bg-[#f8fafc]">
          <div className="mx-auto max-w-7xl">
            <Outlet />
          </div>
        </main>
      </div>

      {/* ── Change Password Modal ────────────────────────────────────────── */}
      {isChangePassOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 backdrop-blur-xs">
          <div className="w-full max-w-md rounded-xl border border-slate-200 bg-white p-6 shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="text-base font-bold text-slate-900">Change Account Password</h3>
              <button
                onClick={() => setIsChangePassOpen(false)}
                className="rounded p-1 text-slate-400 hover:bg-slate-100"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <form onSubmit={handleChangePassword} className="mt-4 space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700">Current Password</label>
                <input
                  type="password"
                  required
                  value={currentPass}
                  onChange={(e) => setCurrentPass(e.target.value)}
                  className="mt-1.5 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-800 placeholder-slate-400 focus:border-blue-500 focus:bg-white focus:outline-none"
                  placeholder="Enter current password"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700">New Password (min 8 chars)</label>
                <input
                  type="password"
                  required
                  minLength={8}
                  value={newPass}
                  onChange={(e) => setNewPass(e.target.value)}
                  className="mt-1.5 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-800 placeholder-slate-400 focus:border-blue-500 focus:bg-white focus:outline-none"
                  placeholder="Enter new strong password"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700">Confirm New Password</label>
                <input
                  type="password"
                  required
                  minLength={8}
                  value={confirmPass}
                  onChange={(e) => setConfirmPass(e.target.value)}
                  className="mt-1.5 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-800 placeholder-slate-400 focus:border-blue-500 focus:bg-white focus:outline-none"
                  placeholder="Re-type new password"
                />
              </div>
              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setIsChangePassOpen(false)}
                  className="rounded-lg border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={passSubmitting}
                  className="rounded-lg bg-blue-600 px-4 py-2 text-xs font-semibold text-white hover:bg-blue-700 disabled:opacity-50"
                >
                  {passSubmitting ? "Updating..." : "Update Password"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
