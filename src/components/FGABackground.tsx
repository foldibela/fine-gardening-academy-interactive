import type { HTMLAttributes, ReactNode } from 'react';

interface FGABackgroundProps extends HTMLAttributes<HTMLElement> {
  children?: ReactNode;
}

export default function FGABackground({ children, className = '', ...props }: FGABackgroundProps) {
  return (
    <div
      className={['relative isolate min-h-screen overflow-hidden bg-[linear-gradient(120deg,_#07130f_0%,_#10261e_30%,_#17412f_58%,_#0b1712_100%)]', className]
        .filter(Boolean)
        .join(' ')}
      {...props}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(16,185,129,0.24),_transparent_34%),radial-gradient(circle_at_80%_20%,_rgba(255,255,255,0.11),_transparent_24%),radial-gradient(circle_at_15%_88%,_rgba(16,185,129,0.16),_transparent_22%)]" />
        <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:18px_18px]" />
        <div className="absolute left-[-10%] top-[-12%] h-72 w-72 rounded-full bg-emerald-500/20 blur-3xl" />
        <div className="absolute bottom-[-12%] right-[-8%] h-80 w-80 rounded-full bg-emerald-400/15 blur-3xl" />
        <div className="absolute left-[18%] top-[28%] h-56 w-56 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent_0%,rgba(255,255,255,0.04)_35%,transparent_60%)] animate-[shimmer_12s_ease-in-out_infinite]" />
      </div>

      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <span className="absolute left-[8%] top-[14%] h-2 w-2 rounded-full bg-white/35" style={{ animation: 'floatParticle 8s ease-in-out infinite' }} />
        <span className="absolute left-[24%] top-[28%] h-1.5 w-1.5 rounded-full bg-white/30" style={{ animation: 'floatParticle 8s ease-in-out infinite 1.2s' }} />
        <span className="absolute left-[76%] top-[18%] h-2.5 w-2.5 rounded-full bg-white/35" style={{ animation: 'floatParticle 8s ease-in-out infinite 2.1s' }} />
        <span className="absolute left-[84%] top-[46%] h-1.5 w-1.5 rounded-full bg-white/30" style={{ animation: 'floatParticle 8s ease-in-out infinite 0.6s' }} />
        <span className="absolute left-[34%] top-[78%] h-2 w-2 rounded-full bg-white/35" style={{ animation: 'floatParticle 8s ease-in-out infinite 1.8s' }} />
      </div>

      <style>{`
        @keyframes shimmer {
          0%,
          100% {
            transform: translateX(-100%);
            opacity: 0;
          }
          50% {
            transform: translateX(100%);
            opacity: 0.24;
          }
        }
        @keyframes floatParticle {
          0%,
          100% {
            opacity: 0.3;
            transform: translate3d(0, 0, 0);
          }
          50% {
            opacity: 0.9;
            transform: translate3d(0, -10px, 0);
          }
        }
      `}</style>

      {children}
    </div>
  );
}
