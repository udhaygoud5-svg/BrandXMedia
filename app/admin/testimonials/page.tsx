"use client";
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase/client';

export default function AdminTestimonials() {
  const [testimonials, setTestimonials] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    fetchTestimonials();
  }, []);

  async function fetchTestimonials() {
    setLoading(true);
    const { data } = await supabase.from('testimonials').select('*').order('created_at', { ascending: false });
    if (data) setTestimonials(data);
    setLoading(false);
  }

  async function handleAdd(e: React.FormEvent) {
    e.preventDefault();
    const { error } = await supabase.from('testimonials').insert([{ name, role, content }]);
    if (error) {
      alert(error.message);
    } else {
      setName(''); setRole(''); setContent('');
      fetchTestimonials();
    }
  }

  async function handleDelete(id: string) {
    if (!confirm('Are you sure?')) return;
    await supabase.from('testimonials').delete().eq('id', id);
    fetchTestimonials();
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-on-surface mb-8">Manage Testimonials</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/20 h-fit">
          <h2 className="text-xl font-bold text-on-surface mb-4">Add Testimonial</h2>
          <form onSubmit={handleAdd} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-on-surface-variant mb-1">Name</label>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-full bg-surface border border-outline-variant rounded-md px-4 py-2 text-on-surface" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-on-surface-variant mb-1">Role / Company</label>
              <input type="text" value={role} onChange={(e) => setRole(e.target.value)} className="w-full bg-surface border border-outline-variant rounded-md px-4 py-2 text-on-surface" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-on-surface-variant mb-1">Testimonial Content</label>
              <textarea value={content} onChange={(e) => setContent(e.target.value)} className="w-full bg-surface border border-outline-variant rounded-md px-4 py-2 text-on-surface h-24" required />
            </div>
            <button type="submit" className="w-full bg-primary-container text-on-primary-container py-2 rounded-md font-bold hover:brightness-110 transition-all">Add Testimonial</button>
          </form>
        </div>

        <div className="lg:col-span-2 space-y-4">
          {loading ? (
            <p className="text-on-surface">Loading testimonials...</p>
          ) : testimonials.length === 0 ? (
            <p className="text-on-surface-variant">No testimonials found.</p>
          ) : (
            testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/20 flex justify-between items-start gap-4">
                <div>
                  <p className="text-lg italic text-on-surface-variant mb-4">"{testimonial.content}"</p>
                  <div>
                    <p className="font-bold text-on-surface">{testimonial.name}</p>
                    <p className="text-sm text-primary uppercase tracking-widest">{testimonial.role}</p>
                  </div>
                </div>
                <button onClick={() => handleDelete(testimonial.id)} className="text-error hover:text-error-container hover:bg-error/10 p-2 rounded-md transition-colors"><span className="material-symbols-outlined">delete</span></button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
