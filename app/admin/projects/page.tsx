"use client";
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase/client';

export default function AdminProjects() {
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  
  // Form state
  const [title, setTitle] = useState('');
  const [problem, setProblem] = useState('');
  const [solution, setSolution] = useState('');
  const [result, setResult] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    fetchProjects();
  }, []);

  async function fetchProjects() {
    setLoading(true);
    const { data } = await supabase.from('projects').select('*').order('created_at', { ascending: false });
    if (data) setProjects(data);
    setLoading(false);
  }

  async function handleAdd(e: React.FormEvent) {
    e.preventDefault();
    const { error } = await supabase.from('projects').insert([{ title, problem, solution, result, image_url: imageUrl }]);
    if (error) {
      alert(error.message);
    } else {
      setTitle(''); setProblem(''); setSolution(''); setResult(''); setImageUrl('');
      fetchProjects();
    }
  }

  async function handleDelete(id: string) {
    if (!confirm('Are you sure?')) return;
    await supabase.from('projects').delete().eq('id', id);
    fetchProjects();
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-on-surface mb-8">Manage Projects</h1>
      
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        <div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/20 h-fit">
          <h2 className="text-xl font-bold text-on-surface mb-4">Add New Project</h2>
          <form onSubmit={handleAdd} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-on-surface-variant mb-1">Title</label>
              <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full bg-surface border border-outline-variant rounded-md px-4 py-2 text-on-surface" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-on-surface-variant mb-1">Image URL</label>
              <input type="url" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} className="w-full bg-surface border border-outline-variant rounded-md px-4 py-2 text-on-surface" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-on-surface-variant mb-1">Problem</label>
              <input type="text" value={problem} onChange={(e) => setProblem(e.target.value)} className="w-full bg-surface border border-outline-variant rounded-md px-4 py-2 text-on-surface" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-on-surface-variant mb-1">Solution</label>
              <input type="text" value={solution} onChange={(e) => setSolution(e.target.value)} className="w-full bg-surface border border-outline-variant rounded-md px-4 py-2 text-on-surface" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-on-surface-variant mb-1">Result</label>
              <input type="text" value={result} onChange={(e) => setResult(e.target.value)} className="w-full bg-surface border border-outline-variant rounded-md px-4 py-2 text-on-surface" required />
            </div>
            <button type="submit" className="w-full bg-primary-container text-on-primary-container py-2 rounded-md font-bold hover:brightness-110 transition-all">Add Project</button>
          </form>
        </div>

        <div className="xl:col-span-2 space-y-4">
          {loading ? (
            <p className="text-on-surface">Loading projects...</p>
          ) : projects.length === 0 ? (
            <p className="text-on-surface-variant">No projects found.</p>
          ) : (
            projects.map((project) => (
              <div key={project.id} className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/20 flex flex-col sm:flex-row gap-6">
                <img src={project.image_url} alt={project.title} className="w-full sm:w-48 h-32 object-cover rounded-lg bg-surface" />
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start">
                      <h3 className="text-xl font-bold text-on-surface mb-2">{project.title}</h3>
                      <button onClick={() => handleDelete(project.id)} className="text-error hover:text-error-container hover:bg-error/10 p-2 rounded-md transition-colors"><span className="material-symbols-outlined">delete</span></button>
                    </div>
                    <div className="grid grid-cols-3 gap-4 mt-2">
                      <div>
                        <p className="text-xs uppercase tracking-widest text-on-surface-variant">Problem</p>
                        <p className="text-sm font-semibold">{project.problem}</p>
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-widest text-on-surface-variant">Solution</p>
                        <p className="text-sm font-semibold">{project.solution}</p>
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-widest text-primary">Result</p>
                        <p className="text-sm font-bold text-primary">{project.result}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
