"use client";
import React, { useEffect, useState, useRef } from 'react';
import { Application } from '@splinetool/runtime';

interface SplinePlayerProps {
  scene: string;
  className?: string;
  onLoad?: (app: any) => void;
}

/**
 * A production-grade Spline player using the official @splinetool/runtime.
 * This is the most reliable way to render Spline scenes in Next.js/Vercel
 * as it avoids custom element hydration and script loading issues.
 */
export default function SplinePlayer({ scene, className, onLoad }: SplinePlayerProps) {
  const [isLoading, setIsLoading] = useState(true);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const splineApp = useRef<Application | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    // Initialize Spline Application
    const app = new Application(canvasRef.current);
    splineApp.current = app;

    app.load(scene)
      .then(() => {
        setIsLoading(false);
        if (onLoad) {
          onLoad(app);
        }
      })
      .catch((err) => {
        console.error('Failed to load Spline scene:', err);
        setIsLoading(false);
      });

    return () => {
      // Clean up Spline application if possible (the runtime doesn't have a direct dispose yet, 
      // but we can at least null it out)
      splineApp.current = null;
    };
  }, [scene, onLoad]);

  return (
    <div className={`relative ${className}`} style={{ width: '100%', height: '100%' }}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/5 backdrop-blur-sm z-10 pointer-events-none">
          <div className="w-10 h-10 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
        </div>
      )}
      
      <canvas 
        ref={canvasRef}
        className={`w-full h-full transition-opacity duration-1000 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
        style={{ width: '100%', height: '100%', outline: 'none' }}
      />
    </div>
  );
}




