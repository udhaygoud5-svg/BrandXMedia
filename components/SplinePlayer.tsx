"use client";
import React, { useEffect, useRef, useState } from 'react';

interface SplinePlayerProps {
  scene: string;
  className?: string;
  onLoad?: (app: any) => void;
}

/**
 * A robust Spline player using @splinetool/runtime.
 * Optimized to handle Next.js client-side rendering.
 */
export default function SplinePlayer({ scene, className, onLoad }: SplinePlayerProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let app: any = null;
    let isMounted = true;

    async function init() {
      if (!canvasRef.current) return;

      try {
        const { Application } = await import('@splinetool/runtime');
        
        if (!isMounted || !canvasRef.current) return;

        app = new Application(canvasRef.current, { renderMode: 'continuous' });
        
        await app.load(scene);
        
        if (!isMounted) {
          app.dispose();
          return;
        }

        setIsLoading(false);
        if (onLoad) onLoad(app);
      } catch (err: any) {
        console.error('Spline initialization error:', err);
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    const timer = setTimeout(init, 100);

    return () => {
      isMounted = false;
      clearTimeout(timer);
      if (app) {
        try {
          app.dispose();
        } catch (e) {}
      }
    };
  }, [scene]);

  return (
    <div className={`relative ${className}`} style={{ width: '100%', height: '100%' }}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-surface/20 backdrop-blur-sm z-10">
          <div className="w-10 h-10 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
        </div>
      )}
      
      <canvas 
        ref={canvasRef} 
        className={`w-full h-full block transition-opacity duration-1000 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
      />
    </div>
  );
}




