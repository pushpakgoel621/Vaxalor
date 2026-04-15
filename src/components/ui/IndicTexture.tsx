interface IndicTextureProps {
  className?: string;
  opacity?: number;
  variant?: "mandala" | "paisley";
}

function LotusMotif({ x, y, size, rotate = 0 }: { x: string; y: string; size: number; rotate?: number }) {
  const petals = 8;
  return (
    <g transform={`translate(${x}, ${y}) rotate(${rotate})`}>
      {Array.from({ length: petals }).map((_, i) => {
        const angle = (i * (360 / petals) * Math.PI) / 180;
        const px = Math.cos(angle) * size * 0.6;
        const py = Math.sin(angle) * size * 0.6;
        return (
          <ellipse
            key={i}
            cx={px} cy={py}
            rx={size * 0.35} ry={size * 0.15}
            transform={`rotate(${i * (360 / petals)} ${px} ${py})`}
            stroke="currentColor" strokeWidth="0.6" fill="none"
          />
        );
      })}
      <circle cx="0" cy="0" r={size * 0.18} stroke="currentColor" strokeWidth="0.5" fill="none" />
      <circle cx="0" cy="0" r={size * 0.06} fill="currentColor" />
    </g>
  );
}

function PaisleyMotif({ x, y, size, rotate = 0 }: { x: string; y: string; size: number; rotate?: number }) {
  const s = size / 100;
  return (
    <g transform={`translate(${x}, ${y}) rotate(${rotate}) scale(${s})`}>
      <path d="M0 -60c-40 0-80 40-80 100s40 100 80 70c27-18 54-54 54-100S40-60 0-60z" stroke="currentColor" strokeWidth={1.2 / s} fill="none" />
      <path d="M0 -35c-28 0-55 28-55 72s28 72 55 48c18-12 36-36 36-72S28-35 0-35z" stroke="currentColor" strokeWidth={0.8 / s} fill="none" />
      <path d="M0 -10c-16 0-30 16-30 44s16 44 30 28c10-8 20-20 20-44S16-10 0-10z" stroke="currentColor" strokeWidth={0.5 / s} fill="none" />
      {/* Veins */}
      <path d="M0 -5c0 30-10 50-22 65" stroke="currentColor" strokeWidth={0.4 / s} fill="none" />
      <path d="M0 -5c0 22 7 40 16 55" stroke="currentColor" strokeWidth={0.4 / s} fill="none" />
      <circle cx="0" cy="-12" r={4} fill="currentColor" />
    </g>
  );
}

function MandalaRing({ cx, cy, r, count, petalRx, petalRy }: { cx: number; cy: number; r: number; count: number; petalRx: number; petalRy: number }) {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => {
        const angle = (i * (360 / count) * Math.PI) / 180;
        const px = cx + r * Math.cos(angle);
        const py = cy + r * Math.sin(angle);
        return (
          <ellipse
            key={i}
            cx={px} cy={py}
            rx={petalRx} ry={petalRy}
            transform={`rotate(${i * (360 / count)} ${px} ${py})`}
            stroke="currentColor" strokeWidth="0.6" fill="none"
          />
        );
      })}
    </>
  );
}

function CornerBorder({ position }: { position: "top-left" | "top-right" | "bottom-left" | "bottom-right" }) {
  const transforms: Record<string, string> = {
    "top-left": "",
    "top-right": "scale(-1, 1)",
    "bottom-left": "scale(1, -1)",
    "bottom-right": "scale(-1, -1)",
  };
  return (
    <svg className={`absolute ${position.includes("top") ? "top-0" : "bottom-0"} ${position.includes("left") ? "left-0" : "right-0"} w-[140px] h-[140px]`} viewBox="0 0 120 120" fill="none">
      <g transform={transforms[position]} style={{ transformOrigin: "60px 60px" }}>
        <path d="M0 0 Q0 40 20 60 Q40 80 80 80" stroke="currentColor" strokeWidth="0.8" fill="none" className="text-signal-bright" />
        <path d="M0 0 Q0 30 15 48 Q30 66 65 66" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-signal-bright" />
        <circle cx="20" cy="20" r="3" fill="currentColor" className="text-signal-bright" />
        <circle cx="35" cy="45" r="2" fill="currentColor" className="text-signal-bright" />
        {/* Small lotus at corner */}
        <ellipse cx="12" cy="35" rx="6" ry="3" transform="rotate(-30 12 35)" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-signal-bright" />
        <ellipse cx="35" cy="12" rx="6" ry="3" transform="rotate(60 35 12)" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-signal-bright" />
      </g>
    </svg>
  );
}

export function IndicTexture({ className = "", opacity = 0.4, variant = "mandala" }: IndicTextureProps) {
  if (variant === "paisley") {
    return (
      <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`} style={{ opacity }}>
        {/* Large paisley — top right */}
        <svg className="absolute -top-10 -right-10 w-[450px] h-[450px] text-signal-bright" viewBox="0 0 400 400" fill="none">
          <PaisleyMotif x="200" y="200" size={160} rotate={-15} />
        </svg>

        {/* Medium paisley — bottom left */}
        <svg className="absolute -bottom-10 -left-10 w-[350px] h-[350px] text-signal-bright" viewBox="0 0 300 300" fill="none">
          <PaisleyMotif x="150" y="150" size={120} rotate={165} />
        </svg>

        {/* Small paisley — center left */}
        <svg className="absolute top-1/3 left-[5%] w-[180px] h-[180px] text-signal-bright" viewBox="0 0 200 200" fill="none">
          <PaisleyMotif x="100" y="100" size={70} rotate={45} />
        </svg>

        {/* Small paisley — bottom right */}
        <svg className="absolute bottom-[15%] right-[15%] w-[150px] h-[150px] text-signal-bright" viewBox="0 0 200 200" fill="none">
          <PaisleyMotif x="100" y="100" size={55} rotate={-60} />
        </svg>

        {/* Corner borders */}
        <CornerBorder position="top-left" />
        <CornerBorder position="bottom-right" />

        {/* Scattered lotus flowers */}
        <svg className="absolute top-[20%] right-[40%] w-[80px] h-[80px] text-signal-bright" viewBox="-40 -40 80 80" fill="none">
          <LotusMotif x="0" y="0" size={25} rotate={22} />
        </svg>
        <svg className="absolute bottom-[25%] left-[30%] w-[60px] h-[60px] text-signal-bright" viewBox="-30 -30 60 60" fill="none">
          <LotusMotif x="0" y="0" size={18} rotate={0} />
        </svg>

        {/* Decorative dots trail */}
        <svg className="absolute top-[60%] right-[8%] w-[100px] h-[200px] text-signal-bright" viewBox="0 0 40 100" fill="none">
          {Array.from({ length: 8 }).map((_, i) => (
            <circle key={i} cx={20 + Math.sin(i * 0.8) * 12} cy={i * 12 + 6} r="1.5" fill="currentColor" />
          ))}
        </svg>
      </div>
    );
  }

  // Mandala variant — dense
  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`} style={{ opacity }}>
      {/* Large mandala — right side */}
      <svg className="absolute top-1/2 -right-24 -translate-y-1/2 w-[650px] h-[650px] text-signal-bright" viewBox="0 0 400 400" fill="none">
        {/* Outer rings */}
        <circle cx="200" cy="200" r="190" stroke="currentColor" strokeWidth="0.3" />
        <circle cx="200" cy="200" r="180" stroke="currentColor" strokeWidth="0.5" />
        <circle cx="200" cy="200" r="160" stroke="currentColor" strokeWidth="0.5" />
        <circle cx="200" cy="200" r="140" stroke="currentColor" strokeWidth="0.5" />
        <circle cx="200" cy="200" r="120" stroke="currentColor" strokeWidth="0.8" />
        <circle cx="200" cy="200" r="100" stroke="currentColor" strokeWidth="0.3" strokeDasharray="4 4" />

        {/* Outer petal ring — 16 petals */}
        <MandalaRing cx={200} cy={200} r={170} count={16} petalRx={14} petalRy={6} />

        {/* Middle petal ring — 12 petals */}
        <MandalaRing cx={200} cy={200} r={140} count={12} petalRx={18} petalRy={8} />

        {/* Inner petal ring — 8 petals */}
        <MandalaRing cx={200} cy={200} r={90} count={8} petalRx={22} petalRy={10} />

        {/* Dot ring */}
        {Array.from({ length: 24 }).map((_, i) => {
          const angle = (i * 15 * Math.PI) / 180;
          return <circle key={`dot-${i}`} cx={200 + 110 * Math.cos(angle)} cy={200 + 110 * Math.sin(angle)} r="2.5" fill="currentColor" />;
        })}

        {/* Radial lines */}
        {Array.from({ length: 36 }).map((_, i) => {
          const angle = (i * 10 * Math.PI) / 180;
          return (
            <line key={`ray-${i}`}
              x1={200 + 30 * Math.cos(angle)} y1={200 + 30 * Math.sin(angle)}
              x2={200 + 55 * Math.cos(angle)} y2={200 + 55 * Math.sin(angle)}
              stroke="currentColor" strokeWidth="0.3" />
          );
        })}

        {/* Center lotus */}
        <circle cx="200" cy="200" r="30" stroke="currentColor" strokeWidth="1" />
        <circle cx="200" cy="200" r="20" stroke="currentColor" strokeWidth="0.6" />
        <circle cx="200" cy="200" r="10" stroke="currentColor" strokeWidth="0.4" />
        <circle cx="200" cy="200" r="4" fill="currentColor" />
      </svg>

      {/* Medium mandala — top left */}
      <svg className="absolute -top-20 -left-20 w-[380px] h-[380px] text-signal-bright" viewBox="0 0 300 300" fill="none">
        <circle cx="150" cy="150" r="130" stroke="currentColor" strokeWidth="0.4" />
        <circle cx="150" cy="150" r="110" stroke="currentColor" strokeWidth="0.5" />
        <circle cx="150" cy="150" r="90" stroke="currentColor" strokeWidth="0.4" />
        <MandalaRing cx={150} cy={150} r={110} count={10} petalRx={15} petalRy={7} />
        <MandalaRing cx={150} cy={150} r={70} count={6} petalRx={20} petalRy={9} />
        {Array.from({ length: 16 }).map((_, i) => {
          const angle = (i * 22.5 * Math.PI) / 180;
          return <circle key={i} cx={150 + 85 * Math.cos(angle)} cy={150 + 85 * Math.sin(angle)} r="2" fill="currentColor" />;
        })}
        <circle cx="150" cy="150" r="22" stroke="currentColor" strokeWidth="0.8" />
        <circle cx="150" cy="150" r="8" fill="currentColor" />
      </svg>

      {/* Small mandala — bottom left */}
      <svg className="absolute bottom-[10%] left-[8%] w-[200px] h-[200px] text-signal-bright" viewBox="0 0 200 200" fill="none">
        <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="0.4" />
        <circle cx="100" cy="100" r="60" stroke="currentColor" strokeWidth="0.5" />
        <MandalaRing cx={100} cy={100} r={60} count={8} petalRx={12} petalRy={5} />
        <circle cx="100" cy="100" r="15" stroke="currentColor" strokeWidth="0.6" />
        <circle cx="100" cy="100" r="4" fill="currentColor" />
      </svg>

      {/* Corner borders */}
      <CornerBorder position="top-right" />
      <CornerBorder position="bottom-left" />

      {/* Scattered lotus flowers */}
      <svg className="absolute top-[15%] right-[45%] w-[70px] h-[70px] text-signal-bright" viewBox="-35 -35 70 70" fill="none">
        <LotusMotif x="0" y="0" size={22} rotate={15} />
      </svg>
      <svg className="absolute bottom-[20%] right-[30%] w-[55px] h-[55px] text-signal-bright" viewBox="-28 -28 56 56" fill="none">
        <LotusMotif x="0" y="0" size={16} rotate={-30} />
      </svg>
      <svg className="absolute top-[55%] left-[25%] w-[50px] h-[50px] text-signal-bright" viewBox="-25 -25 50 50" fill="none">
        <LotusMotif x="0" y="0" size={15} rotate={45} />
      </svg>

      {/* Decorative dot trails */}
      <svg className="absolute top-[30%] left-[3%] w-[30px] h-[200px] text-signal-bright" viewBox="0 0 20 120" fill="none">
        {Array.from({ length: 10 }).map((_, i) => (
          <circle key={i} cx={10 + Math.sin(i * 0.7) * 6} cy={i * 12 + 4} r="1.5" fill="currentColor" />
        ))}
      </svg>
      <svg className="absolute bottom-[10%] right-[5%] w-[200px] h-[30px] text-signal-bright" viewBox="0 0 120 20" fill="none">
        {Array.from({ length: 10 }).map((_, i) => (
          <circle key={i} cx={i * 12 + 4} cy={10 + Math.cos(i * 0.7) * 6} r="1.5" fill="currentColor" />
        ))}
      </svg>
    </div>
  );
}
