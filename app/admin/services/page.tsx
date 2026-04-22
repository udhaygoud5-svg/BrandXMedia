"use client";
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase/client';

export default function AdminServices() {
  const [services, setServices] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [icon, setIcon] = useState('');

  useEffect(() => {
    fetchServices();
  }, []);

  async function fetchServices() {
    setLoading(true);
    const { data } = await supabase.from('services').select('*').order('created_at', { ascending: false });
    if (data) setServices(data);
    setLoading(false);
  }

  async function handleAdd(e: React.FormEvent) {
    e.preventDefault();
    const { error } = await supabase.from('services').insert([{ title, description, icon }]);
    if (error) {
      alert(error.message);
    } else {
      setTitle('');
      setDescription('');
      setIcon('');
      fetchServices();
    }
  }

  async function handleDelete(id: string) {
    if (!confirm('Are you sure?')) return;
    await supabase.from('services').delete().eq('id', id);
    fetchServices();
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-on-surface mb-8">Manage Services</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Add Form */}
        <div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/20 h-fit">
          <h2 className="text-xl font-bold text-on-surface mb-4">Add New Service</h2>
          <form onSubmit={handleAdd} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-on-surface-variant mb-1">Title</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full bg-surface border border-outline-variant rounded-md px-4 py-2 text-on-surface"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-on-surface-variant mb-1">Description</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full bg-surface border border-outline-variant rounded-md px-4 py-2 text-on-surface h-24"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-on-surface-variant mb-1">Icon (Material Symbol)</label>
              <input
                type="text"
                value={icon}
                onChange={(e) => setIcon(e.target.value)}
                placeholder="e.g., language, bolt, hub"
                className="w-full bg-surface border border-outline-variant rounded-md px-4 py-2 text-on-surface"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary-container text-on-primary-container py-2 rounded-md font-bold hover:brightness-110 transition-all"
            >
              Add Service
            </button>
          </form>
        </div>

        {/* List */}
        <div className="lg:col-span-2 space-y-4">
          {loading ? (
            <p className="text-on-surface">Loading services...</p>
          ) : services.length === 0 ? (
            <p className="text-on-surface-variant">No services found.</p>
          ) : (
            services.map((service) => (
              <div key={service.id} className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/20 flex justify-between items-start gap-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="material-symbols-outlined text-primary">{service.icon}</span>
                    <h3 className="text-xl font-bold text-on-surface">{service.title}</h3>
                  </div>
                  <p className="text-on-surface-variant">{service.description}</p>
                </div>
                <button
                  onClick={() => handleDelete(service.id)}
                  className="text-error hover:text-error-container hover:bg-error/10 p-2 rounded-md transition-colors"
                  title="Delete"
                >
                  <span className="material-symbols-outlined">delete</span>
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
