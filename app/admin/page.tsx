"use client";
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase/client';
import Link from 'next/link';

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    services: 0,
    projects: 0,
    testimonials: 0,
    inquiries: 0,
  });
  const [recentInquiries, setRecentInquiries] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchDashboardData() {
      // Fetch counts
      const [servicesRes, projectsRes, testimonialsRes, inquiriesRes] = await Promise.all([
        supabase.from('services').select('*', { count: 'exact', head: true }),
        supabase.from('projects').select('*', { count: 'exact', head: true }),
        supabase.from('testimonials').select('*', { count: 'exact', head: true }),
        supabase.from('inquiries').select('*', { count: 'exact', head: true }),
      ]);

      setStats({
        services: servicesRes.count || 0,
        projects: projectsRes.count || 0,
        testimonials: testimonialsRes.count || 0,
        inquiries: inquiriesRes.count || 0,
      });

      // Fetch recent inquiries
      const { data } = await supabase
        .from('inquiries')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(5);
        
      if (data) setRecentInquiries(data);
      setLoading(false);
    }

    fetchDashboardData();
  }, []);

  if (loading) return <div className="p-8 text-on-surface">Loading dashboard...</div>;

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-on-surface mb-8">Dashboard Overview</h1>
      
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <StatCard title="Services" count={stats.services} link="/admin/services" />
        <StatCard title="Projects" count={stats.projects} link="/admin/projects" />
        <StatCard title="Testimonials" count={stats.testimonials} link="/admin/testimonials" />
        <StatCard title="Total Inquiries" count={stats.inquiries} link="/admin/inquiries" />
      </div>

      {/* Recent Activity */}
      <div className="bg-surface-container-low rounded-xl p-6 border border-outline-variant/20">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-on-surface">Recent Inquiries</h2>
          <Link href="/admin/inquiries" className="text-primary text-sm hover:underline">
            View All
          </Link>
        </div>
        
        {recentInquiries.length === 0 ? (
          <p className="text-on-surface-variant text-sm">No recent inquiries.</p>
        ) : (
          <div className="space-y-4">
            {recentInquiries.map((inquiry) => (
              <div key={inquiry.id} className="flex justify-between items-center p-4 bg-surface rounded-lg border border-outline-variant/10">
                <div>
                  <p className="font-bold text-on-surface">{inquiry.name}</p>
                  <p className="text-sm text-on-surface-variant">{inquiry.email}</p>
                </div>
                <div className="text-right">
                  <span className={`inline-block px-2 py-1 text-xs rounded-full uppercase tracking-wider ${
                    inquiry.status === 'new' ? 'bg-primary-container/20 text-primary' : 'bg-surface-container-highest text-on-surface-variant'
                  }`}>
                    {inquiry.status}
                  </span>
                  <p className="text-xs text-on-surface-variant mt-2">
                    {new Date(inquiry.created_at).toLocaleDateString()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function StatCard({ title, count, link }: { title: string; count: number; link: string }) {
  return (
    <Link href={link} className="block group">
      <div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/20 hover:border-primary/50 transition-colors">
        <h3 className="text-on-surface-variant text-sm font-medium uppercase tracking-wider mb-2">{title}</h3>
        <p className="text-4xl font-black text-on-surface group-hover:text-primary transition-colors">{count}</p>
      </div>
    </Link>
  );
}
