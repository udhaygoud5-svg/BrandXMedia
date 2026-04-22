"use client";
import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { supabase } from '@/lib/supabase/client';
import Link from 'next/link';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    checkUser();
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setIsAuthenticated(!!session);
      }
    );
    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  async function checkUser() {
    const { data: { session } } = await supabase.auth.getSession();
    setIsAuthenticated(!!session);
    setLoading(false);
  }


  async function handleLogout() {
    await supabase.auth.signOut();
    router.push('/admin');
  }

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center bg-surface-dim text-on-surface font-black tracking-tighter text-2xl uppercase italic animate-pulse">Loading System...</div>;
  }

  if (!isAuthenticated) {
    if (typeof window !== 'undefined') {
      router.push('/login');
    }
    return null;
  }

  const navItems = [
    { name: 'Dashboard', path: '/admin' },
    { name: 'Services', path: '/admin/services' },
    { name: 'Projects', path: '/admin/projects' },
    { name: 'Testimonials', path: '/admin/testimonials' },
    { name: 'Inquiries', path: '/admin/inquiries' },
  ];

  return (
    <div className="min-h-screen flex bg-surface-dim">
      {/* Sidebar */}
      <aside className="w-64 bg-surface-container-low border-r border-outline-variant/20 flex flex-col">
        <div className="p-6 border-b border-outline-variant/20">
          <h1 className="text-xl font-bold text-on-surface tracking-tighter">BrandXMedia <span className="text-primary">Admin</span></h1>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link
                key={item.path}
                href={item.path}
                className={`block px-4 py-3 rounded-md transition-colors ${
                  isActive
                    ? 'bg-primary-container/10 text-primary font-medium'
                    : 'text-on-surface-variant hover:bg-surface hover:text-on-surface'
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>
        <div className="p-4 border-t border-outline-variant/20">
          <button
            onClick={handleLogout}
            className="w-full px-4 py-2 text-left text-error hover:bg-error-container/10 rounded-md transition-colors"
          >
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        {children}
      </main>
    </div>
  );
}
