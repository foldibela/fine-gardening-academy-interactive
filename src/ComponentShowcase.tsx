import FGAGlassCard from './components/FGAGlassCard';
import FGAButton from './components/FGAButton';

export default function ComponentShowcase() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[linear-gradient(120deg,_#07130f_0%,_#10261e_30%,_#17412f_58%,_#0b1712_100%)] px-6 py-16 text-slate-50 sm:px-8 lg:px-12">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(16,185,129,0.24),_transparent_34%),radial-gradient(circle_at_80%_20%,_rgba(255,255,255,0.11),_transparent_24%),radial-gradient(circle_at_15%_88%,_rgba(16,185,129,0.16),_transparent_22%)]" />
        <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:18px_18px]" />
        <div className="absolute left-[-10%] top-[-12%] h-72 w-72 rounded-full bg-emerald-500/20 blur-3xl" />
        <div className="absolute bottom-[-12%] right-[-8%] h-80 w-80 rounded-full bg-emerald-400/15 blur-3xl" />
        <div className="absolute left-[18%] top-[28%] h-56 w-56 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent_0%,rgba(255,255,255,0.04)_35%,transparent_60%)] animate-[shimmer_12s_ease-in-out_infinite]" />
      </div>

      <div className="relative mx-auto flex min-h-[calc(100vh-8rem)] max-w-6xl flex-col items-center justify-center">
        <div className="mb-10 max-w-3xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.36em] text-emerald-300/90">
            Fine Gardening Academy
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Interactive Professional Learning Platform
          </h1>
        </div>

        <div className="relative w-full max-w-4xl">
          <FGAGlassCard className="text-left">
            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div className="space-y-6">
                <div className="space-y-3">
                  <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                    💧 Automatic Irrigation System Installer
                  </h2>
                  <p className="max-w-2xl text-base leading-8 text-slate-200/90 sm:text-lg">
                    Learn the principles, planning, and installation craft behind resilient irrigation systems with the elegance and precision of Fine Gardening.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3 pt-2">
                  <FGAButton variant="primary">Enter Academy</FGAButton>
                </div>
              </div>

              <div className="rounded-[1.5rem] border border-white/15 bg-white/10 p-6 backdrop-blur-md">
                <div className="rounded-[1.25rem] border border-emerald-200/20 bg-gradient-to-br from-emerald-500/20 via-emerald-400/10 to-transparent p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.18)]">
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-200/80">
                    Featured Course
                  </p>
                  <div className="mt-4 space-y-3 text-sm text-slate-100/90">
                    <div className="rounded-xl border border-white/10 bg-slate-950/20 px-3 py-3">
                      <div className="flex items-center justify-between">
                        <span>System design</span>
                        <span className="text-emerald-200">Expert-led</span>
                      </div>
                    </div>
                    <div className="rounded-xl border border-white/10 bg-slate-950/20 px-3 py-3">
                      <div className="flex items-center justify-between">
                        <span>Water efficiency</span>
                        <span className="text-emerald-200">Practical</span>
                      </div>
                    </div>
                    <div className="rounded-xl border border-white/10 bg-slate-950/20 px-3 py-3">
                      <div className="flex items-center justify-between">
                        <span>Professional install</span>
                        <span className="text-emerald-200">Certified</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FGAGlassCard>
          <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[2rem]">
            <span className="absolute left-[8%] top-[14%] h-2 w-2 rounded-full bg-white/35" style={{ animation: 'floatParticle 8s ease-in-out infinite' }} />
            <span className="absolute left-[24%] top-[28%] h-1.5 w-1.5 rounded-full bg-white/30" style={{ animation: 'floatParticle 8s ease-in-out infinite 1.2s' }} />
            <span className="absolute left-[76%] top-[18%] h-2.5 w-2.5 rounded-full bg-white/35" style={{ animation: 'floatParticle 8s ease-in-out infinite 2.1s' }} />
            <span className="absolute left-[84%] top-[46%] h-1.5 w-1.5 rounded-full bg-white/30" style={{ animation: 'floatParticle 8s ease-in-out infinite 0.6s' }} />
            <span className="absolute left-[34%] top-[78%] h-2 w-2 rounded-full bg-white/35" style={{ animation: 'floatParticle 8s ease-in-out infinite 1.8s' }} />
          </div>
        </div>
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
    </main>
  );
}
