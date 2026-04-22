"use client";
import React, { useEffect, useState } from 'react';

interface SplinePlayerProps {
  scene: string;
  className?: string;
  onLoad?: (app: any) => void;
}

/**
 * A production-grade Spline player using the official <spline-viewer> web component.
 * This is the most stable way to render Spline scenes in Next.js/Vercel.
 */
export default function SplinePlayer({ scene, className, onLoad }: SplinePlayerProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    // Load the Spline viewer script only once
    if (typeof window !== 'undefined' && !document.querySelector('script[src*="spline-viewer"]')) {
      const script = document.createElement('script');
      script.type = 'module';
      script.src = 'https://unpkg.com/@splinetool/viewer@1.9.0/build/spline-viewer.js';
      script.onload = () => setScriptLoaded(true);
      document.head.appendChild(script);
    } else if (typeof window !== 'undefined') {
      setScriptLoaded(true);
    }
  }, []);

  const handleLoad = (e: any) => {
    setIsLoading(false);
    if (onLoad) {
      // The web component's load event target is the viewer itself
      onLoad(e.target);
    }
  };

  return (
    <div className={`relative ${className}`} style={{ width: '100%', height: '100%' }}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm z-10 pointer-events-none">
          <div className="w-10 h-10 border-4 border-blue-500/20 border-t-blue-500 rounded-full animate-spin" />
        </div>
      )}
      
      {scriptLoaded && (
        <div className={`w-full h-full transition-opacity duration-1000 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
          {/* @ts-ignore */}
          <spline-viewer 
            url={scene}
            onLoad={handleLoad}
            style={{ width: '100%', height: '100%' }}
          />
        </div>
      )}
    </div>
  );
}




