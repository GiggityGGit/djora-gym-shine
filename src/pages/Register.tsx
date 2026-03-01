import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Dumbbell, Eye, EyeOff } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import gymBg from "@/assets/gym-bg.png";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="flex min-h-screen">
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        <img src={gymBg} alt="Gym interior" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-background/20" />
        <div className="relative z-10 flex flex-col justify-end p-12">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
            <h2 className="text-4xl font-display font-bold mb-3">
              Start Your <span className="gym-gradient-text">Journey</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-md">
              Join the platform trusted by fitness professionals to manage and grow their gyms.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center p-8">
        <motion.div className="w-full max-w-md" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <div className="flex items-center gap-3 mb-10">
            <div className="gym-gradient p-2.5 rounded-xl">
              <Dumbbell className="h-6 w-6 text-primary-foreground" />
            </div>
            <h1 className="text-2xl font-display font-bold">GymWeb</h1>
          </div>

          <h2 className="text-3xl font-display font-bold mb-2">Create your account</h2>
          <p className="text-muted-foreground mb-8">Get started with your gym management platform</p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input id="username" placeholder="your_username" value={username} onChange={(e) => setUsername(e.target.value)} className="h-12 bg-secondary border-border focus:border-primary" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input id="password" type={showPassword ? "text" : "password"} placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} className="h-12 bg-secondary border-border focus:border-primary pr-12" />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors">
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>
            <Button type="submit" className="w-full h-12 gym-gradient text-primary-foreground font-semibold text-base gym-glow hover:opacity-90 transition-opacity">
              Create Account
            </Button>
          </form>

          <p className="text-center text-muted-foreground mt-6">
            Already have an account?{" "}
            <Link to="/login" className="text-primary hover:underline font-medium">Sign in</Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Register;
