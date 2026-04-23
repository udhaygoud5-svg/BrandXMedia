"use client";
import React, { useState } from 'react';
import Spline from '@splinetool/react-spline';

interface SplinePlayerProps {
  scene: string;
  className?: string;
  onLoad?: (app: any) => void;
}

/**
 * A production-grade Spline player using the official @splinetool/react-spline component.
 * This handles the loading lifecycle and is optimized for React/Next.js.
 */
export default function SplinePlayer({ scene, className, onLoad }: SplinePlayerProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const handleLoad = (splineApp: any) => {
    setIsLoading(false);
    if (onLoad) {
      onLoad(splineApp);
    }
  };

  const handleError = (err: any) => {
    console.error('Spline Runtime Error:', err);
    setError(err);
    setIsLoading(false);
  };

  if (error) {
    return (
      <div className={`flex items-center justify-center bg-surface-container ${className}`}>
        <p className="text-on-surface-variant text-sm opacity-50">Unable to load 3D scene</p>
      </div>
    );
  }

  return (
    <div className={`relative ${className}`} style={{ width: '100%', height: '100%' }}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/5 backdrop-blur-sm z-10 pointer-events-none">
          <div className="w-10 h-10 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
        </div>
      )}
      
      <div className="w-full h-full">
        <Spline 
          scene={scene} 
          onLoad={handleLoad}
          onError={handleError}
        />
      </div>
    </div>
  );
}




