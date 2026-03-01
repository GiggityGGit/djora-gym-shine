import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface StatCardProps {
  icon: LucideIcon;
  label: string;
  value: string;
  change: string;
  positive?: boolean;
  delay?: number;
}

const StatCard = ({ icon: Icon, label, value, change, positive = true, delay = 0 }: StatCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.4 }}
      className="bg-card border border-border rounded-xl p-6 gym-card-hover"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="bg-secondary p-2.5 rounded-lg">
          <Icon className="h-5 w-5 text-primary" />
        </div>
        <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
          positive ? "bg-gym-success/10 text-gym-success" : "bg-destructive/10 text-destructive"
        }`}>
          {change}
        </span>
      </div>
      <p className="text-2xl font-display font-bold">{value}</p>
      <p className="text-sm text-muted-foreground mt-1">{label}</p>
    </motion.div>
  );
};

export default StatCard;
