import SplinePlayer from './SplinePlayer';

interface SplineSceneProps {
    /** URL to the Spline scene (.splinecode file) */
    scene: string;
    /** CSS class to apply to the Spline canvas */
    className?: string;
    /** Callback fired when the scene finishes loading */
    onLoad?: (app: any) => void;
}

/**
 * A lazy-loaded Spline scene component.
 *
 * IMPORTANT: The parent container MUST have explicit width and height.
 * The Spline canvas expands to fill its parent — if the parent has
 * 0 height, you'll see nothing.
 *
 * Example parent styling:
 *   className="w-full h-[600px]"
 */
export function SplineScene({ scene, className, onLoad }: SplineSceneProps) {
    return (
        <SplinePlayer scene={scene} className={className} onLoad={onLoad} />
    );
}

/** Simple CSS spinner — no dependencies */
function LoadingSpinner() {
    return (
        <span
            style={{
                width: 40,
                height: 40,
                border: '3px solid rgba(255, 255, 255, 0.2)',
                borderTopColor: '#fff',
                borderRadius: '50%',
                animation: 'spline-spin 0.8s linear infinite',
            }}
        />
    );
}

/**
 * Inject the spinner keyframes into the document.
 * This runs once on module load — no side effects on re-render.
 */
if (typeof document !== 'undefined') {
    const styleId = 'spline-scene-styles';
    if (!document.getElementById(styleId)) {
        const style = document.createElement('style');
        style.id = styleId;
        style.textContent = `
      @keyframes spline-spin {
        to { transform: rotate(360deg); }
      }
    `;
        document.head.appendChild(style);
    }
}
