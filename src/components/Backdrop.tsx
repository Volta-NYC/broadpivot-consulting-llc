// Restrained, on-brand backdrops — no photography. Pure SVG so it ships
// confidentially, loads instantly, and never looks like stock.

export function BlueprintBackdrop({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute inset-0 -z-10 overflow-hidden ${className}`} aria-hidden>
      {/* Warm paper base */}
      <div className="absolute inset-0 bg-paper" />
      {/* Faint architectural grid */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.22]"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern id="bp-fine" width="32" height="32" patternUnits="userSpaceOnUse">
            <path d="M32 0H0V32" fill="none" stroke="#0e0d0a" strokeOpacity="0.12" strokeWidth="0.5" />
          </pattern>
          <pattern id="bp-coarse" width="160" height="160" patternUnits="userSpaceOnUse">
            <path d="M160 0H0V160" fill="none" stroke="#0e0d0a" strokeOpacity="0.18" strokeWidth="0.8" />
          </pattern>
          <radialGradient id="bp-vignette" cx="35%" cy="40%" r="80%">
            <stop offset="0%" stopColor="#f7f4ec" stopOpacity="0" />
            <stop offset="65%" stopColor="#f7f4ec" stopOpacity="0.65" />
            <stop offset="100%" stopColor="#f7f4ec" stopOpacity="1" />
          </radialGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#bp-fine)" />
        <rect width="100%" height="100%" fill="url(#bp-coarse)" />
        <rect width="100%" height="100%" fill="url(#bp-vignette)" />
      </svg>
      {/* Soft warm tint */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-paper/40 to-paper" />
    </div>
  );
}

export function PaperBackdrop({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute inset-0 -z-10 overflow-hidden ${className}`} aria-hidden>
      <div className="absolute inset-0 bg-paper" />
      <div
        className="absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(60% 80% at 75% 10%, rgba(31,58,82,0.06), transparent 70%), radial-gradient(50% 60% at 10% 90%, rgba(168,85,42,0.05), transparent 70%)",
        }}
      />
    </div>
  );
}

export function DarkPlate({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`} aria-hidden>
      <div className="absolute inset-0 bg-ink-900" />
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.10]"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern id="dp-grid" width="44" height="44" patternUnits="userSpaceOnUse">
            <path d="M44 0H0V44" fill="none" stroke="#f7f4ec" strokeOpacity="0.5" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dp-grid)" />
      </svg>
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 80% at 80% 20%, rgba(31,58,82,0.35), transparent 70%)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink-900 via-ink-900/70 to-transparent" />
    </div>
  );
}
