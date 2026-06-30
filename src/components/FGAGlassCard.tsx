import type { HTMLAttributes, ReactNode } from 'react';

interface FGAGlassCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export default function FGAGlassCard({ children, className = '', ...props }: FGAGlassCardProps) {
  const baseClasses = [
    'w-full rounded-[1.75rem] border border-white/40 bg-white/15 p-6 shadow-[0_20px_60px_-20px_rgba(15,23,42,0.45)] backdrop-blur-xl backdrop-saturate-150 transition-all duration-300 ease-out',
    'overflow-hidden',
    'md:p-8',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={baseClasses} {...props} style={{ animation: 'glassCardFadeIn 500ms ease-out both', ...props.style }}>
      <style>{`
        @keyframes glassCardFadeIn {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
      {children}
    </div>
  );
}
