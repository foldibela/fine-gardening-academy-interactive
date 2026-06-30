import FGAGlassCard from './components/FGAGlassCard';
import FGAButton from './components/FGAButton';

export default function ComponentShowcase() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(45,212,191,0.18),_transparent_45%),linear-gradient(135deg,_#07111f_0%,_#0f172a_45%,_#111827_100%)] px-6 py-16 text-slate-50 sm:px-8 lg:px-12">
      <div className="mx-auto flex min-h-[calc(100vh-8rem)] max-w-5xl flex-col items-center justify-center text-center">
        <div className="mb-10 space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-300/80">
            Fine Gardening Academy
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Design System v0.2
          </h1>
        </div>

        <div className="w-full max-w-2xl">
          <FGAGlassCard className="text-left">
            <div className="space-y-4">
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-emerald-300/80">
                Welcome
              </p>
              <h2 className="text-2xl font-semibold text-white sm:text-3xl">
                Welcome to the Fine Gardening Academy
              </h2>
              <p className="text-base leading-7 text-slate-200/90 sm:text-lg">
                This is our first reusable React component.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <FGAButton variant="primary">Primary</FGAButton>
                <FGAButton variant="secondary">Secondary</FGAButton>
                <FGAButton variant="outline">Outline</FGAButton>
              </div>
            </div>
          </FGAGlassCard>
        </div>
      </div>
    </main>
  );
}
