import { Application } from 'https://esm.sh/@splinetool/runtime';

document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('spline-canvas');
  const loader = document.getElementById('loader');

  // Initialize Spline 3D Scene
  // Note: Replace this URL with a custom exported Spline scene for production
  const spline = new Application(canvas);
  
  // A public Spline demo scene (abstract shapes)
  const SCENE_URL = 'https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode'; 

  spline.load(SCENE_URL)
    .then(() => {
      console.log('✅ Spline scene loaded');
      // Hide loader
      setTimeout(() => {
        loader.classList.add('hidden');
        canvas.classList.add('loaded');
      }, 500); // Small delay for smooth transition
    })
    .catch(err => {
      console.error('❌ Spline load failed or invalid URL:', err);
      // Hide loader anyway so user isn't stuck
      loader.classList.add('hidden');
      canvas.style.background = 'radial-gradient(circle at center, #1a1a2e 0%, #0a0a0a 100%)';
      canvas.classList.add('loaded');
    });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Animated Number Counters for Results Section
  const counters = document.querySelectorAll('.counter');
  
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = entry.target;
        const targetValue = parseInt(target.getAttribute('data-target'));
        const originalText = target.innerText;
        
        let startValue = 0;
        const duration = 2000;
        // Ensure minimum step time
        const stepTime = Math.max(Math.abs(Math.floor(duration / targetValue)), 10);
        const increment = Math.max(Math.ceil(targetValue / (duration / stepTime)), 1);
        
        const timer = setInterval(() => {
          startValue += increment;
          if (startValue >= targetValue) {
            startValue = targetValue;
            clearInterval(timer);
            target.innerText = originalText; // restore original text with symbols (+, %)
          } else {
            // Reconstruct text with current number
            if(originalText.includes('+') && originalText.includes('%')) {
               target.innerText = `+${startValue}%`;
            } else if (originalText.includes('+')) {
               target.innerText = `${startValue}+`;
            } else {
               target.innerText = startValue;
            }
          }
        }, stepTime);
        
        observer.unobserve(target);
      }
    });
  }, observerOptions);

  counters.forEach(counter => {
    observer.observe(counter);
  });
});
