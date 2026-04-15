"use client";

import { motion } from "framer-motion";

// Animated overlays positioned on top of the hero logo PNG
// V = gears (left ~0-38%), A = city (center ~30-70%), i = malachite (right ~72-90%)

function RotatingGear({ cx, cy, r, speed = 20, reverse = false }: { cx: string; cy: string; r: number; speed?: number; reverse?: boolean }) {
  const teeth = 8;
  const innerR = r * 0.65;
  const toothDepth = r * 0.2;

  // Build gear path
  let path = "";
  for (let i = 0; i < teeth; i++) {
    const angle1 = (i / teeth) * Math.PI * 2;
    const angle2 = ((i + 0.35) / teeth) * Math.PI * 2;
    const angle3 = ((i + 0.5) / teeth) * Math.PI * 2;
    const angle4 = ((i + 0.85) / teeth) * Math.PI * 2;

    const outerR = r + toothDepth;
    const x1 = Math.cos(angle1) * r;
    const y1 = Math.sin(angle1) * r;
    const x2 = Math.cos(angle2) * outerR;
    const y2 = Math.sin(angle2) * outerR;
    const x3 = Math.cos(angle3) * outerR;
    const y3 = Math.sin(angle3) * outerR;
    const x4 = Math.cos(angle4) * r;
    const y4 = Math.sin(angle4) * r;

    if (i === 0) path += `M ${x1} ${y1} `;
    path += `L ${x2} ${y2} L ${x3} ${y3} L ${x4} ${y4} `;
  }
  path += "Z";

  return (
    <motion.g
      style={{ originX: cx, originY: cy }}
      animate={{ rotate: reverse ? -360 : 360 }}
      transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
    >
      <g transform={`translate(${cx}, ${cy})`}>
        <path d={path} fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
        <circle cx="0" cy="0" r={innerR} fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.8" />
        <circle cx="0" cy="0" r={r * 0.2} fill="rgba(255,255,255,0.08)" />
      </g>
    </motion.g>
  );
}

function CityLights() {
  // Twinkling dots simulating city lights in the A letterform
  const lights = [
    { x: "42%", y: "35%", delay: 0 },
    { x: "45%", y: "42%", delay: 0.5 },
    { x: "50%", y: "38%", delay: 1.2 },
    { x: "48%", y: "50%", delay: 0.8 },
    { x: "53%", y: "45%", delay: 1.5 },
    { x: "40%", y: "55%", delay: 0.3 },
    { x: "55%", y: "52%", delay: 2 },
    { x: "47%", y: "60%", delay: 1 },
    { x: "52%", y: "30%", delay: 0.7 },
    { x: "44%", y: "48%", delay: 1.8 },
    { x: "56%", y: "40%", delay: 0.4 },
    { x: "49%", y: "55%", delay: 1.3 },
    { x: "43%", y: "65%", delay: 2.2 },
    { x: "51%", y: "58%", delay: 0.9 },
    { x: "46%", y: "33%", delay: 1.6 },
  ];

  return (
    <>
      {lights.map((light, i) => (
        <motion.div
          key={i}
          className="absolute w-[3px] h-[3px] rounded-full"
          style={{
            left: light.x,
            top: light.y,
            backgroundColor: i % 3 === 0 ? "rgba(255, 100, 200, 0.7)" : i % 3 === 1 ? "rgba(100, 200, 255, 0.7)" : "rgba(255, 220, 100, 0.6)",
          }}
          animate={{
            opacity: [0, 0.8, 0.3, 0.9, 0],
            scale: [0.5, 1.2, 0.8, 1, 0.5],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            delay: light.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
      {/* Occasional car headlight sweep */}
      <motion.div
        className="absolute h-[1px] rounded-full"
        style={{
          left: "38%",
          top: "62%",
          width: "20%",
          background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
        }}
        animate={{
          x: ["-100%", "100%"],
          opacity: [0, 0.6, 0],
        }}
        transition={{
          duration: 4,
          delay: 2,
          repeat: Infinity,
          repeatDelay: 5,
          ease: "linear",
        }}
      />
    </>
  );
}

function MalachiteShimmer() {
  // Shimmer/glow effect moving across the i letterform
  return (
    <>
      {/* Vertical shimmer band */}
      <motion.div
        className="absolute rounded-full"
        style={{
          right: "10%",
          top: "15%",
          width: "12%",
          height: "70%",
          background: "linear-gradient(180deg, transparent 0%, rgba(0,200,150,0.15) 30%, rgba(0,200,150,0.25) 50%, rgba(0,200,150,0.15) 70%, transparent 100%)",
          filter: "blur(8px)",
        }}
        animate={{
          y: ["-20%", "20%", "-20%"],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      {/* Dot on the i — subtle pulse */}
      <motion.div
        className="absolute rounded-full"
        style={{
          right: "13%",
          top: "12%",
          width: "8%",
          height: "6%",
          background: "radial-gradient(circle, rgba(0,200,150,0.3) 0%, transparent 70%)",
          filter: "blur(4px)",
        }}
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.4, 0.8, 0.4],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </>
  );
}

export function HeroLogoAnimations() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* Gears on V letter (left side) */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 600 540" fill="none">
        <RotatingGear cx="120" cy="200" r={35} speed={15} />
        <RotatingGear cx="170" cy="300" r={25} speed={12} reverse />
        <RotatingGear cx="80" cy="320" r={20} speed={18} />
        <RotatingGear cx="140" cy="400" r={18} speed={20} reverse />
        <RotatingGear cx="200" cy="250" r={15} speed={10} />
      </svg>

      {/* City lights on A letter (center) */}
      <CityLights />

      {/* Malachite shimmer on i letter (right side) */}
      <MalachiteShimmer />
    </div>
  );
}
