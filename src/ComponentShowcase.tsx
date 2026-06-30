import FGAGlassCard from './components/FGAGlassCard';
import FGAButton from './components/FGAButton';

export default function ComponentShowcase() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(16,185,129,0.24),_transparent_32%),linear-gradient(120deg,_#07130f_0%,_#0e221d_35%,_#123126_72%,_#0b1712_100%)] px-6 py-16 text-slate-50 sm:px-8 lg:px-12">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_rgba(255,255,255,0.12),_transparent_24%),radial-gradient(circle_at_15%_85%,_rgba(45,212,191,0.14),_transparent_20%)]" />
      <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:18px_18px]" />

      <div className="relative mx-auto flex min-h-[calc(100vh-8rem)] max-w-6xl flex-col items-center justify-center">
        <div className="mb-10 max-w-3xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-emerald-300/80">
            Fine Gardening Academy
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Professional Interactive Learning Platform
          </h1>
        </div>

        <div className="w-full max-w-4xl">
          <FGAGlassCard className="text-left">
            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div className="space-y-5">
                <div className="inline-flex items-center rounded-full border border-emerald-300/30 bg-emerald-400/10 px-3 py-1 text-sm font-medium text-emerald-200">
                  Premium botanical education
                </div>
                <div className="space-y-3">
                  <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                    Fine Gardening Academy
                  </h2>
                  <p className="max-w-2xl text-base leading-8 text-slate-200/90 sm:text-lg">
                    Discover expert-led courses, practical horticulture guidance, and immersive learning experiences designed for modern gardeners.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3 pt-2">
                  <FGAButton variant="primary">Explore Courses</FGAButton>
                  <FGAButton variant="outline">View Curriculum</FGAButton>
                </div>
              </div>

              <div className="rounded-[1.5rem] border border-white/15 bg-white/10 p-6 backdrop-blur-md">
                <div className="rounded-[1.25rem] border border-emerald-200/20 bg-gradient-to-br from-emerald-500/20 via-emerald-400/10 to-transparent p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.18)]">
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-200/80">
                    Learning Path
                  </p>
                  <div className="mt-4 space-y-3 text-sm text-slate-100/90">
                    <div className="flex items-center justify-between rounded-xl border border-white/10 bg-slate-950/20 px-3 py-2">
                      <span>Garden Design</span>
                      <span className="text-emerald-200">Advanced</span>
                    </div>
                    <div className="flex items-center justify-between rounded-xl border border-white/10 bg-slate-950/20 px-3 py-2">
                      <span>Plant Care</span>
                      <span className="text-emerald-200">Essential</span>
                    </div>
                    <div className="flex items-center justify-between rounded-xl border border-white/10 bg-slate-950/20 px-3 py-2">
                      <span>Seasonal Planning</span>
                      <span className="text-emerald-200">Live</span>
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
