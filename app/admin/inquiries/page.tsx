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
    const { data } = await supabase.from('inquiries').select('*').order('created_at', { ascending: false });
    if (data) setInquiries(data);
    setLoading(false);
  }

  async function handleStatusChange(id: string, currentStatus: string) {
    const newStatus = currentStatus === 'new' ? 'read' : currentStatus === 'read' ? 'archived' : 'new';
    await supabase.from('inquiries').update({ status: newStatus }).eq('id', id);
    fetchInquiries();
  }

  async function handleDelete(id: string) {
    if (!confirm('Are you sure you want to delete this inquiry?')) return;
    await supabase.from('inquiries').delete().eq('id', id);
    fetchInquiries();
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-on-surface mb-8">Manage Inquiries</h1>
      
      <div className="space-y-4">
        {loading ? (
          <p className="text-on-surface">Loading inquiries...</p>
        ) : inquiries.length === 0 ? (
          <p className="text-on-surface-variant">No inquiries found.</p>
        ) : (
          inquiries.map((inquiry) => (
            <div key={inquiry.id} className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/20 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-2">
                  <h3 className="text-xl font-bold text-on-surface">{inquiry.name}</h3>
                  <span className={`px-2 py-1 text-xs rounded-full uppercase tracking-wider font-bold ${
                    inquiry.status === 'new' ? 'bg-primary-container text-on-primary-container' :
                    inquiry.status === 'read' ? 'bg-surface-container-highest text-on-surface' :
                    'bg-error-container text-on-error-container'
                  }`}>
                    {inquiry.status}
                  </span>
                </div>
                <p className="text-sm text-primary mb-4">{inquiry.email}</p>
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
                  className="w-full bg-surface-container-highest text-on-surface px-4 py-2 rounded-md hover:bg-surface-bright transition-colors text-sm font-semibold"
                >
                  Mark as {inquiry.status === 'new' ? 'Read' : inquiry.status === 'read' ? 'Archived' : 'New'}
                </button>
                <button 
                  onClick={() => handleDelete(inquiry.id)}
                  className="w-full bg-error-container/20 text-error px-4 py-2 rounded-md hover:bg-error-container hover:text-on-error-container transition-colors text-sm font-semibold flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined text-sm">delete</span> Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
