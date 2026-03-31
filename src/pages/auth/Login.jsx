import { Flame, Mail, Lock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <div className="w-full max-w-md bg-streak-card rounded-2xl p-8 shadow-2xl border border-white/5 relative overflow-hidden">
        {/* Subtle top glow effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-streak-primary/40 blur-sm"></div>
        
        <div className="flex flex-col items-center mb-8 relative z-10">
          <div className="flex items-center justify-center w-12 h-12 bg-streak-primary/10 rounded-xl mb-4 shadow-[0_0_15px_rgba(0,230,118,0.2)]">
            <Flame className="w-7 h-7 text-streak-primary" fill="currentColor" />
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-streak-text">Welcome back</h2>
          <p className="text-streak-muted text-sm mt-2">Log in to keep your streak alive</p>
        </div>

        <form className="space-y-5 relative z-10" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-1.5">
            <label className="text-sm font-medium text-streak-text/90">Email</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-streak-muted" />
              <input
                type="email"
                placeholder="name@example.com"
                className="w-full bg-streak-surface border border-white/5 rounded-xl py-2.5 pl-10 pr-4 text-streak-text placeholder:text-streak-muted focus:outline-none focus:ring-2 focus:ring-streak-primary/50 focus:border-streak-primary transition-all"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-streak-text/90">Password</label>
              <a href="#" className="text-xs text-streak-primary hover:text-streak-primary-hover font-medium transition-colors">
                Forgot password?
              </a>
            </div>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-streak-muted" />
              <input
                type="password"
                placeholder="••••••••"
                className="w-full bg-streak-surface border border-white/5 rounded-xl py-2.5 pl-10 pr-4 text-streak-text placeholder:text-streak-muted focus:outline-none focus:ring-2 focus:ring-streak-primary/50 focus:border-streak-primary transition-all"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-streak-primary hover:bg-streak-primary-hover text-streak-bg font-bold rounded-xl py-3 mt-4 transition-all hover:shadow-[0_0_20px_rgba(0,230,118,0.4)] active:scale-[0.98]"
          >
            Log In
            <ArrowRight className="w-5 h-5" />
          </button>
        </form>

        <p className="text-center text-sm text-streak-muted mt-8 relative z-10">
          Don't have an account?{" "}
          <Link to="/signup" className="text-streak-primary hover:text-streak-primary-hover font-medium transition-colors">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
