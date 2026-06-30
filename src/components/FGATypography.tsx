import type { HTMLAttributes, ReactNode } from 'react';

interface FGATypographyProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
}

export function FGATitle({ children, className = '', as: Component = 'h1', ...props }: FGATypographyProps) {
  return (
    <Component
      className={['text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl', className]
        .filter(Boolean)
        .join(' ')}
      {...props}
    >
      {children}
    </Component>
  );
}

export function FGASubtitle({ children, className = '', as: Component = 'p', ...props }: FGATypographyProps) {
  return (
    <Component
      className={['text-sm font-semibold uppercase tracking-[0.36em] text-emerald-300/90', className]
        .filter(Boolean)
        .join(' ')}
      {...props}
    >
      {children}
    </Component>
  );
}

export function FGADescription({ children, className = '', as: Component = 'p', ...props }: FGATypographyProps) {
  return (
    <Component
      className={['max-w-2xl text-base leading-8 text-slate-200/90 sm:text-lg', className]
        .filter(Boolean)
        .join(' ')}
      {...props}
    >
      {children}
    </Component>
  );
}
