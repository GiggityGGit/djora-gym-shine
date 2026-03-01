import { Link, useLocation } from "react-router-dom";
import { Dumbbell, LayoutDashboard, Users, CalendarDays, BarChart3, Settings, LogOut } from "lucide-react";

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/dashboard" },
  { icon: Users, label: "Members", path: "/dashboard/members" },
  { icon: CalendarDays, label: "Schedule", path: "/dashboard/schedule" },
  { icon: BarChart3, label: "Analytics", path: "/dashboard/analytics" },
  { icon: Settings, label: "Settings", path: "/dashboard/settings" },
];

const DashboardSidebar = () => {
  const location = useLocation();

  return (
    <aside className="hidden md:flex flex-col w-64 border-r border-border bg-sidebar min-h-screen p-6">
      <div className="flex items-center gap-3 mb-10">
        <div className="gym-gradient p-2 rounded-lg">
          <Dumbbell className="h-5 w-5 text-primary-foreground" />
        </div>
        <span className="text-xl font-display font-bold">GymWeb</span>
      </div>

      <nav className="flex-1 space-y-1">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                isActive
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary"
              }`}
            >
              <item.icon className="h-4.5 w-4.5" />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <Link
        to="/login"
        className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-muted-foreground hover:text-destructive hover:bg-secondary transition-all duration-200"
      >
        <LogOut className="h-4.5 w-4.5" />
        Sign Out
      </Link>
    </aside>
  );
};

export default DashboardSidebar;
