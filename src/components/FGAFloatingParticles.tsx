const particles = [
  { className: 'left-[8%] top-[16%] h-2 w-2', delay: '0s' },
  { className: 'left-[22%] top-[30%] h-1.5 w-1.5', delay: '1.2s' },
  { className: 'left-[72%] top-[18%] h-2.5 w-2.5', delay: '2.1s' },
  { className: 'left-[84%] top-[46%] h-1.5 w-1.5', delay: '0.6s' },
  { className: 'left-[35%] top-[78%] h-2 w-2', delay: '1.8s' },
];

export default function FGAFloatingParticles() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((particle, index) => (
        <span
          key={index}
          className={['absolute rounded-full bg-white/30', particle.className].join(' ')}
          style={{ animation: `floatParticle 8s ease-in-out infinite`, animationDelay: particle.delay }}
        />
      ))}
      <style>{`
        @keyframes floatParticle {
          0%,
          100% {
            opacity: 0.3;
            transform: translate3d(0, 0, 0);
          }
          50% {
            opacity: 0.8;
            transform: translate3d(0, -10px, 0);
          }
        }
      `}</style>
    </div>
  );
}
