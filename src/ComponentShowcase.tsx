import FGAGlassCard from './components/FGAGlassCard';
import FGAButton from './components/FGAButton';

export default function ComponentShowcase() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(22,101,52,0.28),_transparent_34%),linear-gradient(135deg,_#07130f_0%,_#0d221c_38%,_#123426_72%,_#0b1712_100%)] px-6 py-16 text-slate-50 sm:px-8 lg:px-12">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_16%,_rgba(255,255,255,0.11),_transparent_24%),radial-gradient(circle_at_15%_88%,_rgba(16,185,129,0.16),_transparent_22%)]" />
      <div className="absolute inset-0 opacity-24 [background-image:radial-gradient(rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:20px_20px]" />

      <div className="relative mx-auto flex min-h-[calc(100vh-8rem)] max-w-6xl flex-col items-center justify-center">
        <div className="mb-10 max-w-3xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.36em] text-emerald-300/90">
            Fine Gardening Academy
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Interactive Professional Learning Platform
          </h1>
        </div>

        <div className="w-full max-w-4xl">
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
        </div>
      </div>
    </main>
  );
}
