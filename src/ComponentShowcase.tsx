import './styles/fine-gardening.css';
import FGAGlassCard from './components/FGAGlassCard';
import FGAButton from './components/FGAButton';

export default function ComponentShowcase() {
  return (
    <main className="fga-cover-shell">
      <div className="fga-cover-backdrop">
        <div className="fga-cover-orb fga-cover-orb--left" />
        <div className="fga-cover-orb fga-cover-orb--right" />
        <div className="fga-cover-orb fga-cover-orb--center" />
        <div className="fga-cover-shimmer" />
      </div>

      <div className="relative w-full max-w-4xl">
        <FGAGlassCard className="fga-cover-card">
          <div className="fga-cover-content">
            <p className="fga-cover-eyebrow">Fine Gardening Academy</p>
            <div className="space-y-3">
              <div className="mx-auto h-px w-24 bg-gradient-to-r from-transparent via-emerald-200/80 to-transparent" />
              <h1 className="fga-cover-title">Fine Gardening</h1>
              <h2 className="fga-cover-subtitle">ACADEMY</h2>
            </div>
            <p className="fga-cover-description">
              Fedezd fel a vízmegtakarító, precíz öntözőrendszerek tervezésének és telepítésének elegáns, szakmai világát egy gondosan megírt tanulási útvonalon.
            </p>
            <div className="pt-2">
              <FGAButton variant="primary">Kurzus indítása</FGAButton>
            </div>
          </div>
        </FGAGlassCard>
      </div>

      <div className="fga-cover-particles">
        <span className="fga-cover-particle fga-cover-particle--1" />
        <span className="fga-cover-particle fga-cover-particle--2" />
        <span className="fga-cover-particle fga-cover-particle--3" />
        <span className="fga-cover-particle fga-cover-particle--4" />
        <span className="fga-cover-particle fga-cover-particle--5" />
      </div>
    </main>
  );
}
