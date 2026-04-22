import { Application } from 'https://esm.sh/@splinetool/runtime';

// --- CONFIGURATION ---
// Replace these with your actual Supabase credentials
const SUPABASE_URL = 'YOUR_SUPABASE_URL';
const SUPABASE_ANON_KEY = 'YOUR_SUPABASE_ANON_KEY';

// Initialize Supabase Client
const supabase = window.supabase ? window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY) : null;

document.addEventListener('DOMContentLoaded', () => {
    initSpline();
    initContactForm();
});

/**
 * Initialize Spline 3D Scene
 */
function initSpline() {
    const canvas = document.getElementById('canvas3d');
    if (!canvas) return;

    const spline = new Application(canvas);
    
    // A beautiful abstract 3D scene (Replace with your own exported scene)
    const SCENE_URL = 'https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode'; 

    spline.load(SCENE_URL)
        .then(() => {
            console.log('✅ Spline scene loaded');
        })
        .catch(err => {
            console.error('❌ Spline load failed:', err);
            // Fallback: subtle background pulse or hide container
            canvas.parentElement.style.background = 'radial-gradient(circle at center, #1b1b1b 0%, #131313 100%)';
        });
}

/**
 * Initialize Contact Form & Supabase Logic
 */
function initContactForm() {
    const form = document.getElementById('contact-form');
    const statusEl = document.getElementById('form-status');
    const submitBtn = document.getElementById('submit-btn');

    if (!form) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        // 1. Validate Supabase Config
        if (!supabase || SUPABASE_URL === 'YOUR_SUPABASE_URL') {
            showStatus('⚠️ Backend not configured. Please add your Supabase credentials to app.js', 'error');
            return;
        }

        // 2. Get Form Data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            website: document.getElementById('website').value,
            service: document.getElementById('service').value,
            created_at: new Date().toISOString()
        };

        // 3. UI Feedback
        setLoading(true);

        try {
            // 4. Insert into Supabase
            // Table name expected: 'leads'
            const { error } = await supabase
                .from('leads')
                .insert([formData]);

            if (error) throw error;

            // 5. Success
            showStatus('🚀 Audit request received! We will be in touch within 48 hours.', 'success');
            form.reset();
        } catch (err) {
            console.error('Submission error:', err);
            showStatus(`❌ Error: ${err.message || 'Something went wrong.'}`, 'error');
        } finally {
            setLoading(false);
        }
    });

    function setLoading(isLoading) {
        submitBtn.disabled = isLoading;
        submitBtn.innerText = isLoading ? 'Processing...' : 'Submit Audit Request';
        submitBtn.style.opacity = isLoading ? '0.7' : '1';
    }

    function showStatus(msg, type) {
        statusEl.innerText = msg;
        statusEl.classList.remove('hidden', 'text-green-400', 'text-red-400', 'text-amber-400');
        
        if (type === 'success') statusEl.classList.add('text-green-400');
        else if (type === 'error') statusEl.classList.add('text-red-400');
        else statusEl.classList.add('text-amber-400');
        
        statusEl.classList.remove('hidden');
    }
}
