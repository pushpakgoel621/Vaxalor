interface IndicTextureProps {
  className?: string;
  opacity?: number;
  variant?: "mandala" | "paisley";
}

export function IndicTexture({ className = "", opacity = 0.03, variant = "mandala" }: IndicTextureProps) {
  if (variant === "paisley") {
    return (
      <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`} style={{ opacity }}>
        <svg className="absolute -top-20 -right-20 w-[500px] h-[500px]" viewBox="0 0 400 400" fill="none">
          {/* Paisley motif — top right */}
          <path d="M200 40c-60 0-120 60-120 140s60 140 120 100c40-26 80-80 80-140S260 40 200 40z" stroke="currentColor" strokeWidth="1" className="text-signal-bright" />
          <path d="M200 70c-44 0-90 46-90 110s46 110 90 76c30-20 60-60 60-110S244 70 200 70z" stroke="currentColor" strokeWidth="0.8" className="text-signal-bright" />
          <path d="M200 100c-28 0-60 32-60 80s32 80 60 52c20-14 40-40 40-80s-12-52-40-52z" stroke="currentColor" strokeWidth="0.5" className="text-signal-bright" />
          {/* Inner leaf veins */}
          <path d="M200 120c0 40-15 70-35 90" stroke="currentColor" strokeWidth="0.5" className="text-signal-bright" />
          <path d="M200 120c0 30 10 55 25 75" stroke="currentColor" strokeWidth="0.5" className="text-signal-bright" />
          <circle cx="200" cy="115" r="4" fill="currentColor" className="text-signal-bright" />
        </svg>
        <svg className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rotate-180" viewBox="0 0 400 400" fill="none">
          <path d="M200 40c-60 0-120 60-120 140s60 140 120 100c40-26 80-80 80-140S260 40 200 40z" stroke="currentColor" strokeWidth="1" className="text-signal-bright" />
          <path d="M200 70c-44 0-90 46-90 110s46 110 90 76c30-20 60-60 60-110S244 70 200 70z" stroke="currentColor" strokeWidth="0.8" className="text-signal-bright" />
          <circle cx="200" cy="115" r="4" fill="currentColor" className="text-signal-bright" />
        </svg>
      </div>
    );
  }

  // Mandala variant
  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`} style={{ opacity }}>
      {/* Large mandala — center right */}
      <svg className="absolute top-1/2 -right-32 -translate-y-1/2 w-[600px] h-[600px]" viewBox="0 0 400 400" fill="none">
        {/* Outer rings */}
        <circle cx="200" cy="200" r="180" stroke="currentColor" strokeWidth="0.5" className="text-signal-bright" />
        <circle cx="200" cy="200" r="160" stroke="currentColor" strokeWidth="0.5" className="text-signal-bright" />
        <circle cx="200" cy="200" r="140" stroke="currentColor" strokeWidth="0.5" className="text-signal-bright" />
        <circle cx="200" cy="200" r="120" stroke="currentColor" strokeWidth="0.8" className="text-signal-bright" />

        {/* Petal ring — 12 petals */}
        {Array.from({ length: 12 }).map((_, i) => {
          const angle = (i * 30 * Math.PI) / 180;
          const x = 200 + 140 * Math.cos(angle);
          const y = 200 + 140 * Math.sin(angle);
          return (
            <ellipse
              key={`petal-${i}`}
              cx={x} cy={y} rx="18" ry="8"
              transform={`rotate(${i * 30} ${x} ${y})`}
              stroke="currentColor" strokeWidth="0.5" fill="none"
              className="text-signal-bright"
            />
          );
        })}

        {/* Inner petals — 8 */}
        {Array.from({ length: 8 }).map((_, i) => {
          const angle = (i * 45 * Math.PI) / 180;
          const x = 200 + 90 * Math.cos(angle);
          const y = 200 + 90 * Math.sin(angle);
          return (
            <g key={`inner-${i}`}>
              <ellipse
                cx={x} cy={y} rx="22" ry="10"
                transform={`rotate(${i * 45} ${x} ${y})`}
                stroke="currentColor" strokeWidth="0.8" fill="none"
                className="text-signal-bright"
              />
              <circle
                cx={200 + 105 * Math.cos(angle)}
                cy={200 + 105 * Math.sin(angle)}
                r="3"
                fill="currentColor" className="text-signal-bright"
              />
            </g>
          );
        })}

        {/* Center lotus */}
        <circle cx="200" cy="200" r="30" stroke="currentColor" strokeWidth="1" className="text-signal-bright" />
        <circle cx="200" cy="200" r="18" stroke="currentColor" strokeWidth="0.8" className="text-signal-bright" />
        <circle cx="200" cy="200" r="6" fill="currentColor" className="text-signal-bright" />

        {/* Radial lines */}
        {Array.from({ length: 24 }).map((_, i) => {
          const angle = (i * 15 * Math.PI) / 180;
          return (
            <line
              key={`ray-${i}`}
              x1={200 + 35 * Math.cos(angle)} y1={200 + 35 * Math.sin(angle)}
              x2={200 + 60 * Math.cos(angle)} y2={200 + 60 * Math.sin(angle)}
              stroke="currentColor" strokeWidth="0.3" className="text-signal-bright"
            />
          );
        })}
      </svg>

      {/* Small mandala — top left */}
      <svg className="absolute -top-16 -left-16 w-[300px] h-[300px]" viewBox="0 0 200 200" fill="none">
        <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="0.5" className="text-signal-bright" />
        <circle cx="100" cy="100" r="60" stroke="currentColor" strokeWidth="0.5" className="text-signal-bright" />
        {Array.from({ length: 8 }).map((_, i) => {
          const angle = (i * 45 * Math.PI) / 180;
          return (
            <ellipse
              key={i}
              cx={100 + 60 * Math.cos(angle)} cy={100 + 60 * Math.sin(angle)}
              rx="12" ry="6"
              transform={`rotate(${i * 45} ${100 + 60 * Math.cos(angle)} ${100 + 60 * Math.sin(angle)})`}
              stroke="currentColor" strokeWidth="0.5" fill="none"
              className="text-signal-bright"
            />
          );
        })}
        <circle cx="100" cy="100" r="15" stroke="currentColor" strokeWidth="0.8" className="text-signal-bright" />
        <circle cx="100" cy="100" r="4" fill="currentColor" className="text-signal-bright" />
      </svg>
    </div>
  );
}
