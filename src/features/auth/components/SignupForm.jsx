import { Flame, Mail, Lock, User, ArrowRight } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { signupUser } from "../api/signup";

function SignupForm() {
    const [formData, setFormData] = useState({ name: "", email: "", password: "" });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            const data = await signupUser(formData);
            console.log("Success: ", data);
            localStorage.setItem('token', data.token);
        }
        catch (err) {
            setError(err.message);
        }
        finally {
            setLoading(false);
        }
    }
    return (
        <div className="flex min-h-screen items-center justify-center p-4">
            <div className="w-full max-w-md bg-streak-card rounded-2xl p-8 shadow-2xl border border-white/5 relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-streak-primary/40 blur-sm"></div>

                <div className="flex flex-col items-center mb-8 relative z-10">
                    <div className="flex items-center justify-center w-12 h-12 bg-streak-primary/10 rounded-xl mb-4 shadow-[0_0_15px_rgba(0,230,118,0.2)]">
                        <Flame className="w-7 h-7 text-streak-primary" fill="currentColor" />
                    </div>
                    <h2 className="text-2xl font-bold tracking-tight text-streak-text">Create an account</h2>
                    <p className="text-streak-muted text-sm mt-2">Start building your streaks today</p>
                </div>

                <form className="space-y-5 relative z-10" onSubmit={handleSubmit}>
                    {error && (
                        <div className="bg-red-500/10 border border-red-500/50 text-red-500 text-sm font-medium p-3 rounded-xl mb-4">
                            {error}
                        </div>
                    )}
                    <div className="space-y-1.5">
                        <label className="text-sm font-medium text-streak-text/90">Full Name</label>
                        <div className="relative">
                            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-streak-muted" />
                            <input
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                type="text"
                                placeholder="John Doe"
                                className="w-full bg-streak-surface border border-white/5 rounded-xl py-2.5 pl-10 pr-4 text-streak-text placeholder:text-streak-muted focus:outline-none focus:ring-2 focus:ring-streak-primary/50 focus:border-streak-primary transition-all"
                            />
                        </div>
                    </div>

                    <div className="space-y-1.5">
                        <label className="text-sm font-medium text-streak-text/90">Email</label>
                        <div className="relative">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-streak-muted" />
                            <input
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                type="email"
                                placeholder="name@example.com"
                                className="w-full bg-streak-surface border border-white/5 rounded-xl py-2.5 pl-10 pr-4 text-streak-text placeholder:text-streak-muted focus:outline-none focus:ring-2 focus:ring-streak-primary/50 focus:border-streak-primary transition-all"
                            />
                        </div>
                    </div>

                    <div className="space-y-1.5">
                        <label className="text-sm font-medium text-streak-text/90">Password</label>
                        <div className="relative">
                            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-streak-muted" />
                            <input
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                type="password"
                                placeholder="••••••••"
                                className="w-full bg-streak-surface border border-white/5 rounded-xl py-2.5 pl-10 pr-4 text-streak-text placeholder:text-streak-muted focus:outline-none focus:ring-2 focus:ring-streak-primary/50 focus:border-streak-primary transition-all"
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full flex items-center justify-center gap-2 bg-streak-primary hover:bg-streak-primary-hover text-streak-bg font-bold rounded-xl py-3 mt-6 transition-all hover:shadow-[0_0_20px_rgba(0,230,118,0.4)] active:scale-[0.98]"
                    >
                        {loading ? "Registering..." : "Create Account"}
                        <ArrowRight className="w-5 h-5" />
                    </button>
                </form>

                <p className="text-center text-sm text-streak-muted mt-8 relative z-10">
                    Already have an account?{" "}
                    <Link to="/login" className="text-streak-primary hover:text-streak-primary-hover font-medium transition-colors">
                        Log in
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default SignupForm;