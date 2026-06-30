interface FGAGlowEffectsProps {
  className?: string;
}

export default function FGAGlowEffects({ className = '' }: FGAGlowEffectsProps) {
  return (
    <div aria-hidden className={['pointer-events-none absolute inset-0 overflow-hidden', className].filter(Boolean).join(' ')}>
      <div className="absolute left-[-8%] top-[-10%] h-72 w-72 rounded-full bg-emerald-500/20 blur-3xl" />
      <div className="absolute bottom-[-10%] right-[-6%] h-80 w-80 rounded-full bg-emerald-400/15 blur-3xl" />
      <div className="absolute left-[20%] top-[32%] h-56 w-56 rounded-full bg-white/5 blur-3xl" />
    </div>
  );
}
