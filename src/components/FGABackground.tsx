import type { HTMLAttributes, ReactNode } from 'react';

interface FGABackgroundProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
}

export default function FGABackground({ children, className = '', ...props }: FGABackgroundProps) {
  return (
    <section
      className={['relative isolate min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(22,101,52,0.28),_transparent_34%),linear-gradient(135deg,_#07130f_0%,_#0d221c_38%,_#123426_72%,_#0b1712_100%)] text-slate-50', className]
        .filter(Boolean)
        .join(' ')}
      {...props}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_16%,_rgba(255,255,255,0.11),_transparent_24%),radial-gradient(circle_at_15%_88%,_rgba(16,185,129,0.16),_transparent_22%)]" />
      <div className="absolute inset-0 opacity-24 [background-image:radial-gradient(rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:20px_20px]" />
      {children}
    </section>
  );
}
