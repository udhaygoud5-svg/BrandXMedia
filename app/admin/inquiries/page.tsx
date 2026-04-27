"use client";
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase/client';

export default function AdminInquiries() {
  const [inquiries, setInquiries] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchInquiries();
  }, []);

  async function fetchInquiries() {
    setLoading(true);
    const { data, error } = await supabase
      .from('inquiries')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) {
      console.error('Error fetching inquiries:', error);
    }
    if (data) setInquiries(data);
    setLoading(false);
  }

  async function handleStatusChange(id: string, currentStatus: string) {
    const newStatus = currentStatus === 'new' ? 'read' : currentStatus === 'read' ? 'archived' : 'new';
    const { error } = await supabase.from('inquiries').update({ status: newStatus }).eq('id', id);
    if (error) console.error('Status update error:', error);
    fetchInquiries();
  }

  async function handleDelete(id: string) {
    if (!confirm('Are you sure you want to delete this inquiry?')) return;
    const { error } = await supabase.from('inquiries').delete().eq('id', id);
    if (error) console.error('Delete error:', error);
    fetchInquiries();
  }

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-on-surface">Manage Inquiries</h1>
        <span className="text-sm text-on-surface-variant">
          {inquiries.length} total {inquiries.length === 1 ? 'inquiry' : 'inquiries'}
        </span>
      </div>
      
      <div className="space-y-4">
        {loading ? (
          <div className="flex items-center gap-3 py-12 justify-center">
            <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin" />
            <p className="text-on-surface">Loading inquiries...</p>
          </div>
        ) : inquiries.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-on-surface-variant text-lg">No inquiries found.</p>
            <p className="text-on-surface-variant text-sm mt-2">New inquiries from your contact form will appear here.</p>
          </div>
        ) : (
          inquiries.map((inquiry) => (
            <div key={inquiry.id} className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/20 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-2">
                  <h3 className="text-xl font-bold text-on-surface">{inquiry.name}</h3>
                  <span className={`px-2 py-1 text-xs rounded-full uppercase tracking-wider font-bold ${
                    inquiry.status === 'new' ? 'bg-primary/20 text-primary' :
                    inquiry.status === 'read' ? 'bg-surface-container-highest text-on-surface' :
                    'bg-red-500/20 text-red-400'
                  }`}>
                    {inquiry.status}
                  </span>
                </div>
                <div className="flex flex-wrap gap-4 text-sm mb-4">
                  <span className="text-primary">{inquiry.email}</span>
                  {inquiry.phone && (
                    <span className="text-on-surface-variant">📞 {inquiry.phone}</span>
                  )}
                  {inquiry.business && (
                    <span className="text-on-surface-variant">🏢 {inquiry.business}</span>
                  )}
                </div>
                <div className="bg-surface p-4 rounded-lg border border-outline-variant/10 text-on-surface-variant">
                  {inquiry.message}
                </div>
                <p className="text-xs text-on-surface-variant mt-4">
                  Received: {new Date(inquiry.created_at).toLocaleString()}
                </p>
              </div>
              
              <div className="flex flex-col gap-2 min-w-[140px]">
                <button 
                  onClick={() => handleStatusChange(inquiry.id, inquiry.status)}
                  className="w-full bg-surface-container-highest text-on-surface px-4 py-2 rounded-md hover:bg-white/20 transition-colors text-sm font-semibold"
                >
                  Mark as {inquiry.status === 'new' ? 'Read' : inquiry.status === 'read' ? 'Archived' : 'New'}
                </button>
                <button 
                  onClick={() => handleDelete(inquiry.id)}
                  className="w-full bg-red-500/10 text-red-400 px-4 py-2 rounded-md hover:bg-red-500/20 transition-colors text-sm font-semibold"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
