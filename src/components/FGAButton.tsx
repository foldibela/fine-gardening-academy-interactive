import type { ButtonHTMLAttributes, ReactNode } from 'react';

interface FGAButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
}

export default function FGAButton({
  children,
  variant = 'primary',
  className = '',
  disabled = false,
  ...props
}: FGAButtonProps) {
  const baseClasses = [
    'inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold tracking-[0.02em] transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-emerald-300/60 focus:ring-offset-2 focus:ring-offset-slate-950 disabled:cursor-not-allowed disabled:opacity-60',
    'hover:-translate-y-0.5 hover:shadow-lg',
  ];

  const variants = {
    primary: 'bg-emerald-500 text-white shadow-[0_10px_30px_-12px_rgba(16,185,129,0.75)] hover:bg-emerald-400',
    secondary: 'bg-slate-800/80 text-slate-100 shadow-[0_10px_30px_-12px_rgba(15,23,42,0.7)] hover:bg-slate-700/90',
    outline:
      'border border-emerald-300/50 bg-transparent text-emerald-200 hover:border-emerald-200 hover:bg-emerald-400/10',
  };

  return (
    <button
      className={[...baseClasses, variants[variant], className].filter(Boolean).join(' ')}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
