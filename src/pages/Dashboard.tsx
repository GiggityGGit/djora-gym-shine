import { motion } from "framer-motion";
import { Users, TrendingUp, Dumbbell, DollarSign, ArrowRight, Clock, MoreHorizontal } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import DashboardSidebar from "@/components/DashboardSidebar";
import StatCard from "@/components/StatCard";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const chartData = [
  { name: "Mon", members: 32 },
  { name: "Tue", members: 45 },
  { name: "Wed", members: 52 },
  { name: "Thu", members: 38 },
  { name: "Fri", members: 61 },
  { name: "Sat", members: 74 },
  { name: "Sun", members: 55 },
];

const recentMembers = [
  { name: "Alex Johnson", plan: "Premium", joined: "2 hours ago", initials: "AJ" },
  { name: "Sarah Williams", plan: "Basic", joined: "5 hours ago", initials: "SW" },
  { name: "Mike Chen", plan: "Premium", joined: "1 day ago", initials: "MC" },
  { name: "Emma Davis", plan: "Standard", joined: "2 days ago", initials: "ED" },
  { name: "James Lee", plan: "Basic", joined: "3 days ago", initials: "JL" },
];

const upcomingClasses = [
  { name: "HIIT Blast", time: "09:00 AM", trainer: "Coach Mike", spots: "4/20" },
  { name: "Yoga Flow", time: "10:30 AM", trainer: "Lisa Park", spots: "8/15" },
  { name: "Strength Training", time: "02:00 PM", trainer: "Coach Jake", spots: "2/12" },
  { name: "Spin Class", time: "05:00 PM", trainer: "Amy Rose", spots: "10/25" },
];

const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-background">
      <DashboardSidebar />

      <main className="flex-1 overflow-y-auto">
        {/* Header */}
        <header className="sticky top-0 z-10 backdrop-blur-xl bg-background/80 border-b border-border px-8 py-5">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-display font-bold">Dashboard</h1>
              <p className="text-sm text-muted-foreground">Welcome back, Admin</p>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm" className="border-border text-foreground">
                <Clock className="h-4 w-4 mr-2" />
                Today
              </Button>
              <Avatar className="h-9 w-9 border-2 border-primary/30">
                <AvatarFallback className="bg-primary/10 text-primary text-sm font-semibold">AD</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </header>

        <div className="p-8 space-y-8">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <StatCard icon={Users} label="Total Members" value="2,847" change="+12.5%" positive delay={0} />
            <StatCard icon={TrendingUp} label="Active Today" value="342" change="+8.2%" positive delay={0.1} />
            <StatCard icon={Dumbbell} label="Classes Today" value="18" change="+3" positive delay={0.2} />
            <StatCard icon={DollarSign} label="Monthly Revenue" value="$48,290" change="+15.3%" positive delay={0.3} />
          </div>

          {/* Chart + Members */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {/* Chart */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="lg:col-span-2 bg-card border border-border rounded-xl p-6 gym-card-hover"
            >
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="font-display font-semibold text-lg">Weekly Attendance</h3>
                  <p className="text-sm text-muted-foreground">Member check-ins this week</p>
                </div>
                <Button variant="ghost" size="icon" className="text-muted-foreground">
                  <MoreHorizontal className="h-5 w-5" />
                </Button>
              </div>
              <ResponsiveContainer width="100%" height={260}>
                <AreaChart data={chartData}>
                  <defs>
                    <linearGradient id="colorMembers" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(4, 85%, 55%)" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="hsl(4, 85%, 55%)" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(0, 0%, 16%)" />
                  <XAxis dataKey="name" stroke="hsl(0, 0%, 45%)" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis stroke="hsl(0, 0%, 45%)" fontSize={12} tickLine={false} axisLine={false} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(0, 0%, 12%)",
                      border: "1px solid hsl(0, 0%, 16%)",
                      borderRadius: "8px",
                      color: "hsl(0, 0%, 95%)",
                    }}
                  />
                  <Area type="monotone" dataKey="members" stroke="hsl(4, 85%, 55%)" strokeWidth={2} fillOpacity={1} fill="url(#colorMembers)" />
                </AreaChart>
              </ResponsiveContainer>
            </motion.div>

            {/* Recent Members */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-card border border-border rounded-xl p-6 gym-card-hover"
            >
              <div className="flex items-center justify-between mb-5">
                <h3 className="font-display font-semibold text-lg">New Members</h3>
                <Button variant="ghost" size="sm" className="text-primary text-xs hover:text-primary">
                  View All <ArrowRight className="h-3 w-3 ml-1" />
                </Button>
              </div>
              <div className="space-y-4">
                {recentMembers.map((member) => (
                  <div key={member.name} className="flex items-center gap-3">
                    <Avatar className="h-9 w-9">
                      <AvatarFallback className="bg-secondary text-xs font-semibold text-foreground">{member.initials}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">{member.name}</p>
                      <p className="text-xs text-muted-foreground">{member.joined}</p>
                    </div>
                    <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                      member.plan === "Premium"
                        ? "bg-primary/10 text-primary"
                        : member.plan === "Standard"
                        ? "bg-gym-warning/10 text-gym-warning"
                        : "bg-secondary text-muted-foreground"
                    }`}>
                      {member.plan}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Upcoming Classes */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-card border border-border rounded-xl p-6 gym-card-hover"
          >
            <div className="flex items-center justify-between mb-5">
              <div>
                <h3 className="font-display font-semibold text-lg">Today's Classes</h3>
                <p className="text-sm text-muted-foreground">Upcoming scheduled sessions</p>
              </div>
              <Button variant="outline" size="sm" className="border-border text-foreground">
                View Schedule
              </Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {upcomingClasses.map((cls) => (
                <div key={cls.name} className="bg-secondary/50 border border-border rounded-lg p-4 hover:border-primary/20 transition-colors">
                  <p className="font-semibold text-sm">{cls.name}</p>
                  <p className="text-xs text-muted-foreground mt-1">{cls.trainer}</p>
                  <div className="flex items-center justify-between mt-3">
                    <span className="text-xs text-primary font-medium">{cls.time}</span>
                    <span className="text-xs text-muted-foreground">{cls.spots} spots</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
