"use client";
import React, { useEffect, useRef, ReactNode } from 'react';

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  hue?: number; // Base hue (0-360)
  spread?: number; // Hue spread
  size?: number; // Spotlight size
}

/**
 * GlowCard Component
 * A premium card with a mouse-tracking spotlight effect.
 */
export const GlowCard = ({
  children,
  className = '',
  hue = 210,
  spread = 40,
  size = 400,
}: GlowCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handlePointerMove = (e: PointerEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      card.style.setProperty('--x', x.toFixed(2));
      card.style.setProperty('--y', y.toFixed(2));

      const xp = (x / rect.width).toFixed(2);
      const yp = (y / rect.height).toFixed(2);
      card.style.setProperty('--xp', xp);
      card.style.setProperty('--yp', yp);
    };

    card.addEventListener('pointermove', handlePointerMove);
    return () => {
      card.removeEventListener('pointermove', handlePointerMove);
    };
  }, []);

  return (
    <>
      <style>{`
        [data-glow] {
          --border-size: 1;
          --spotlight-size: ${size};
          --radius: 24;
          --hue: ${hue};
          --spread: ${spread};
        }

        [data-glow] > [data-glow] {
          position: absolute;
          inset: 0;
          will-change: filter;
          opacity: 0;
          transition: opacity 0.5s;
          pointer-events: none;
        }

        [data-glow]:hover > [data-glow] {
          opacity: 1;
        }

        [data-glow] > [data-glow] {
          border-radius: calc(var(--radius) * 1px);
          border: calc(var(--border-size) * 1px) solid transparent;
          mask: linear-gradient(transparent, transparent), linear-gradient(white, white);
          mask-clip: padding-box, border-box;
          mask-composite: intersect;
          background-attachment: fixed;
          background-image: radial-gradient(
            calc(var(--spotlight-size) * 1px) calc(var(--spotlight-size) * 1px) at 
            calc(var(--x, 0) * 1px) calc(var(--y, 0) * 1px),
            hsl(calc(var(--hue) + (var(--xp, 0) * var(--spread))) 100% 50% / 0.5),
            transparent
          );
        }
      `}</style>
      <div
        ref={cardRef}
        data-glow
        className={`group relative rounded-[24px] overflow-hidden bg-surface-container border border-on-surface/10 ${className}`}
        style={{
          backgroundImage: `radial-gradient(
            ${size}px ${size}px at 
            calc(var(--x, 0) * 1px) 
            calc(var(--y, 0) * 1px),
            hsl(calc(${hue} + (var(--xp, 0) * ${spread})) 100% 70% / 0.05), transparent
          )`,
          backgroundAttachment: 'fixed',
        } as any}
      >
        <div data-glow aria-hidden="true" />
        <div className="relative z-10 h-full w-full">
          {children}
        </div>
      </div>
    </>
  );
};
