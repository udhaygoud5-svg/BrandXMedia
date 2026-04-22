"use client";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase/client';
import { motion } from 'framer-motion';
import { Lock, Mail, ArrowRight, Loader2 } from 'lucide-react';

export default function LoginPage() {
  const [email, setEmail] = useState('brandxmedia.co@gmail.com');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  // Check if already authenticated
  useEffect(() => {
    async function checkUser() {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        router.push('/admin');
      }
    }
    checkUser();
  }, [router]);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const { data, error: authError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (authError) throw authError;

      if (data.session) {
        router.push('/admin');
      }
    } catch (err: any) {
      console.error('Login Error:', err);
      setError(err.message || 'Invalid login credentials');
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-surface flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary-container/20 blur-[120px] rounded-full" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md relative z-10"
      >
        <div className="text-center mb-12">
          <h1 className="text-4xl font-black tracking-tighter uppercase mb-2">
            BrandX<span className="text-primary">Media</span>
          </h1>
          <p className="text-on-surface-variant uppercase tracking-[0.2em] text-xs font-bold">Admin Portal</p>
        </div>

        <div className="bg-surface-container-low p-8 lg:p-10 rounded-2xl border border-outline-variant/20 shadow-2xl backdrop-blur-xl">
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-[10px] uppercase tracking-widest text-on-surface-variant mb-2 font-bold">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant/40" size={18} />
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-surface border border-outline-variant/10 focus:border-primary focus:ring-0 text-on-surface pl-12 pr-4 py-4 rounded-lg transition-all" 
                  placeholder="admin@brandxmedia.co"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-[10px] uppercase tracking-widest text-on-surface-variant mb-2 font-bold">Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant/40" size={18} />
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-surface border border-outline-variant/10 focus:border-primary focus:ring-0 text-on-surface pl-12 pr-4 py-4 rounded-lg transition-all" 
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            {error && (
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-red-400 text-sm font-medium bg-red-400/10 p-3 rounded-md text-center border border-red-400/20"
              >
                {error}
              </motion.p>
            )}

            <button 
              type="submit" 
              disabled={loading}
              className="w-full bg-primary-container text-on-primary-container py-4 rounded-lg font-bold text-lg hover:scale-[0.98] active:scale-95 transition-all flex items-center justify-center gap-3 shadow-[0_0_40px_-10px_rgba(46,91,255,0.4)] disabled:opacity-50 disabled:hover:scale-100"
            >
              {loading ? (
                <>
                  <Loader2 className="animate-spin" size={20} />
                  Authenticating...
                </>
              ) : (
                <>
                  Sign In to Dashboard
                  <ArrowRight size={20} />
                </>
              )}
            </button>
          </form>
        </div>

        <div className="mt-8 text-center">
          <a href="/" className="text-on-surface-variant hover:text-primary transition-colors text-sm font-medium">
            ← Return to Website
          </a>
        </div>
      </motion.div>
    </main>
  );
}
