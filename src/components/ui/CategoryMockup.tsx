"use client";

import { motion } from "framer-motion";

interface CategoryMockupProps {
  category: "Website" | "Mobile" | "AI" | "MVP" | "CRM" | "Design";
  gradient: string;
}

const FLOAT = { y: [0, -4, 0], transition: { duration: 3, repeat: Infinity, ease: "easeInOut" as const } };

export function CategoryMockup({ category, gradient }: CategoryMockupProps) {
  return (
    <div className={`relative w-full h-full bg-gradient-to-br ${gradient} overflow-hidden`}>
      {/* Subtle dot grid backdrop */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.08]" xmlns="http://www.w3.org/2000/svg">
        {Array.from({ length: 80 }).map((_, i) => (
          <circle key={i} cx={`${((i % 10) * 10) + 5}%`} cy={`${(Math.floor(i / 10) * 12.5) + 6}%`} r="1.5" fill="var(--color-signal)" />
        ))}
      </svg>

      <motion.div
        className="absolute inset-0 flex items-center justify-center p-6"
        animate={FLOAT}
      >
        {category === "Website" && <WebsiteMockup />}
        {category === "Mobile" && <MobileMockup />}
        {category === "AI" && <AIMockup />}
        {category === "MVP" && <MVPMockup />}
        {category === "CRM" && <CRMMockup />}
        {category === "Design" && <DesignMockup />}
      </motion.div>
    </div>
  );
}

/* —————————————————————————— Per-category SVG mockups —————————————————————————— */

function WebsiteMockup() {
  return (
    <svg viewBox="0 0 320 180" className="w-[88%] h-auto drop-shadow-[0_10px_24px_rgba(29,92,191,0.25)]">
      {/* Browser frame */}
      <rect x="0" y="0" width="320" height="180" rx="8" fill="white" stroke="var(--color-signal)" strokeOpacity="0.2" />
      <rect x="0" y="0" width="320" height="22" rx="8" fill="var(--color-canvas-alt)" />
      <rect x="0" y="14" width="320" height="8" fill="var(--color-canvas-alt)" />
      <circle cx="12" cy="11" r="3" fill="#ff5f57" />
      <circle cx="22" cy="11" r="3" fill="#febc2e" />
      <circle cx="32" cy="11" r="3" fill="#28c840" />
      <rect x="80" y="6" width="160" height="10" rx="5" fill="white" stroke="var(--color-signal)" strokeOpacity="0.15" />

      {/* Site header */}
      <rect x="16" y="34" width="36" height="10" rx="2" fill="var(--color-signal)" opacity="0.8" />
      <rect x="220" y="36" width="20" height="6" rx="3" fill="var(--color-ink-200)" opacity="0.4" />
      <rect x="248" y="36" width="20" height="6" rx="3" fill="var(--color-ink-200)" opacity="0.4" />
      <rect x="276" y="34" width="28" height="10" rx="5" fill="var(--color-signal)" />

      {/* Hero */}
      <rect x="16" y="60" width="180" height="12" rx="2" fill="var(--color-ink)" opacity="0.7" />
      <rect x="16" y="78" width="140" height="8" rx="2" fill="var(--color-ink-200)" opacity="0.5" />
      <rect x="16" y="92" width="60" height="14" rx="7" fill="var(--color-signal)" />

      {/* Cards row */}
      <g>
        <rect x="16" y="118" width="90" height="48" rx="4" fill="white" stroke="var(--color-signal)" strokeOpacity="0.18" />
        <rect x="22" y="124" width="78" height="22" rx="2" fill="var(--color-signal)" opacity="0.15" />
        <rect x="22" y="150" width="50" height="6" rx="2" fill="var(--color-ink-200)" opacity="0.5" />
        <rect x="22" y="160" width="34" height="4" rx="2" fill="var(--color-ink-200)" opacity="0.3" />

        <rect x="115" y="118" width="90" height="48" rx="4" fill="white" stroke="var(--color-signal)" strokeOpacity="0.18" />
        <rect x="121" y="124" width="78" height="22" rx="2" fill="var(--color-signal)" opacity="0.12" />
        <rect x="121" y="150" width="50" height="6" rx="2" fill="var(--color-ink-200)" opacity="0.5" />
        <rect x="121" y="160" width="34" height="4" rx="2" fill="var(--color-ink-200)" opacity="0.3" />

        <rect x="214" y="118" width="90" height="48" rx="4" fill="white" stroke="var(--color-signal)" strokeOpacity="0.18" />
        <rect x="220" y="124" width="78" height="22" rx="2" fill="var(--color-signal)" opacity="0.18" />
        <rect x="220" y="150" width="50" height="6" rx="2" fill="var(--color-ink-200)" opacity="0.5" />
        <rect x="220" y="160" width="34" height="4" rx="2" fill="var(--color-ink-200)" opacity="0.3" />
      </g>
    </svg>
  );
}

function MobileMockup() {
  return (
    <svg viewBox="0 0 220 180" className="h-[92%] w-auto drop-shadow-[0_10px_24px_rgba(29,92,191,0.25)]">
      {/* Phone frame */}
      <rect x="60" y="6" width="100" height="168" rx="14" fill="var(--color-ink)" />
      <rect x="64" y="10" width="92" height="160" rx="10" fill="white" />
      {/* Notch */}
      <rect x="92" y="10" width="36" height="6" rx="3" fill="var(--color-ink)" />

      {/* Status bar */}
      <rect x="72" y="22" width="14" height="3" rx="1" fill="var(--color-ink-300)" opacity="0.5" />
      <rect x="138" y="22" width="14" height="3" rx="1" fill="var(--color-ink-300)" opacity="0.5" />

      {/* Hero card */}
      <rect x="72" y="32" width="76" height="36" rx="4" fill="var(--color-signal)" />
      <rect x="78" y="38" width="40" height="4" rx="2" fill="white" opacity="0.9" />
      <rect x="78" y="46" width="56" height="3" rx="1" fill="white" opacity="0.5" />
      <rect x="78" y="56" width="22" height="8" rx="4" fill="white" />

      {/* App grid */}
      {Array.from({ length: 6 }).map((_, i) => (
        <g key={i}>
          <rect
            x={72 + (i % 3) * 26}
            y={76 + Math.floor(i / 3) * 28}
            width="20" height="20" rx="5"
            fill="var(--color-signal)"
            opacity={0.25 + (i % 3) * 0.15}
          />
          <rect
            x={72 + (i % 3) * 26}
            y={98 + Math.floor(i / 3) * 28}
            width="20" height="3" rx="1.5"
            fill="var(--color-ink-200)" opacity="0.4"
          />
        </g>
      ))}

      {/* Bottom dock */}
      <rect x="78" y="148" width="64" height="16" rx="8" fill="var(--color-canvas-alt)" />
      <circle cx="92" cy="156" r="3" fill="var(--color-signal)" />
      <circle cx="110" cy="156" r="3" fill="var(--color-ink-300)" opacity="0.4" />
      <circle cx="128" cy="156" r="3" fill="var(--color-ink-300)" opacity="0.4" />
    </svg>
  );
}

function AIMockup() {
  return (
    <svg viewBox="0 0 320 180" className="w-[88%] h-auto drop-shadow-[0_10px_24px_rgba(29,92,191,0.25)]">
      <rect x="0" y="0" width="320" height="180" rx="10" fill="white" stroke="var(--color-signal)" strokeOpacity="0.2" />
      {/* Header */}
      <rect x="0" y="0" width="320" height="28" rx="10" fill="var(--color-ink)" />
      <rect x="0" y="18" width="320" height="10" fill="var(--color-ink)" />
      <circle cx="16" cy="14" r="6" fill="var(--color-signal-bright)" />
      <rect x="28" y="10" width="50" height="4" rx="2" fill="white" />
      <rect x="28" y="18" width="30" height="3" rx="1.5" fill="white" opacity="0.5" />
      <circle cx="80" cy="20" r="2" fill="#34d399">
        <animate attributeName="opacity" values="1;0.4;1" dur="1.5s" repeatCount="indefinite" />
      </circle>

      {/* AI message */}
      <circle cx="22" cy="48" r="6" fill="var(--color-signal)" opacity="0.2" />
      <rect x="32" y="40" width="160" height="22" rx="11" fill="var(--color-canvas-alt)" stroke="var(--color-signal)" strokeOpacity="0.15" />
      <rect x="40" y="46" width="120" height="3" rx="1.5" fill="var(--color-ink-200)" />
      <rect x="40" y="53" width="80" height="3" rx="1.5" fill="var(--color-ink-200)" opacity="0.6" />

      {/* User message */}
      <rect x="170" y="74" width="140" height="22" rx="11" fill="var(--color-signal)" />
      <rect x="180" y="80" width="100" height="3" rx="1.5" fill="white" opacity="0.9" />
      <rect x="180" y="87" width="70" height="3" rx="1.5" fill="white" opacity="0.7" />

      {/* AI response */}
      <circle cx="22" cy="116" r="6" fill="var(--color-signal)" opacity="0.2" />
      <rect x="32" y="108" width="200" height="32" rx="11" fill="var(--color-canvas-alt)" stroke="var(--color-signal)" strokeOpacity="0.15" />
      <rect x="40" y="114" width="170" height="3" rx="1.5" fill="var(--color-ink-200)" />
      <rect x="40" y="121" width="140" height="3" rx="1.5" fill="var(--color-ink-200)" opacity="0.8" />
      <rect x="40" y="128" width="90" height="3" rx="1.5" fill="var(--color-ink-200)" opacity="0.5" />

      {/* Typing */}
      <circle cx="22" cy="158" r="6" fill="var(--color-signal)" opacity="0.2" />
      <rect x="32" y="150" width="60" height="16" rx="8" fill="var(--color-canvas-alt)" stroke="var(--color-signal)" strokeOpacity="0.15" />
      <circle cx="48" cy="158" r="2" fill="var(--color-signal)">
        <animate attributeName="opacity" values="0.3;1;0.3" dur="1s" begin="0s" repeatCount="indefinite" />
      </circle>
      <circle cx="58" cy="158" r="2" fill="var(--color-signal)">
        <animate attributeName="opacity" values="0.3;1;0.3" dur="1s" begin="0.2s" repeatCount="indefinite" />
      </circle>
      <circle cx="68" cy="158" r="2" fill="var(--color-signal)">
        <animate attributeName="opacity" values="0.3;1;0.3" dur="1s" begin="0.4s" repeatCount="indefinite" />
      </circle>

      {/* Input */}
      <rect x="240" y="148" width="70" height="20" rx="10" fill="var(--color-signal)" />
      <polygon points="270,154 280,158 270,162" fill="white" />
    </svg>
  );
}

function MVPMockup() {
  return (
    <svg viewBox="0 0 320 180" className="w-[88%] h-auto drop-shadow-[0_10px_24px_rgba(29,92,191,0.25)]">
      <rect x="0" y="0" width="320" height="180" rx="8" fill="white" stroke="var(--color-signal)" strokeOpacity="0.2" />
      <rect x="0" y="0" width="320" height="22" rx="8" fill="var(--color-canvas-alt)" />
      <rect x="0" y="14" width="320" height="8" fill="var(--color-canvas-alt)" />
      <circle cx="12" cy="11" r="3" fill="#ff5f57" />
      <circle cx="22" cy="11" r="3" fill="#febc2e" />
      <circle cx="32" cy="11" r="3" fill="#28c840" />

      {/* Sidebar */}
      <rect x="0" y="22" width="60" height="158" fill="var(--color-canvas-alt)" />
      <rect x="8" y="32" width="44" height="8" rx="2" fill="var(--color-signal)" opacity="0.8" />
      <rect x="8" y="46" width="36" height="4" rx="2" fill="var(--color-ink-200)" opacity="0.5" />
      <rect x="8" y="56" width="40" height="4" rx="2" fill="var(--color-ink-200)" opacity="0.5" />
      <rect x="8" y="66" width="32" height="4" rx="2" fill="var(--color-ink-200)" opacity="0.5" />

      {/* Kanban columns */}
      {["To-Do", "Progress", "Done"].map((_, col) => (
        <g key={col}>
          <rect x={70 + col * 84} y="34" width="80" height="138" rx="4" fill="var(--color-canvas-alt)" opacity="0.5" />
          <rect x={76 + col * 84} y="40" width="30" height="4" rx="2" fill="var(--color-ink-200)" opacity="0.7" />
          {/* Task cards */}
          {Array.from({ length: col === 1 ? 3 : 2 }).map((_, i) => (
            <g key={i}>
              <rect x={76 + col * 84} y={52 + i * 32} width="68" height="26" rx="3" fill="white" stroke="var(--color-signal)" strokeOpacity={0.15 + (col * 0.1)} />
              <rect x={80 + col * 84} y={57 + i * 32} width="40" height="3" rx="1.5" fill="var(--color-ink-200)" />
              <rect x={80 + col * 84} y={63 + i * 32} width="28" height="3" rx="1.5" fill="var(--color-ink-200)" opacity="0.5" />
              <circle cx={138 + col * 84} cy={72 + i * 32} r="2" fill={col === 2 ? "#34d399" : "var(--color-signal)"} opacity={col === 0 ? 0.4 : 0.8} />
              <rect x={80 + col * 84} y={70 + i * 32} width="18" height="4" rx="2" fill="var(--color-signal)" opacity={0.2 + col * 0.1} />
            </g>
          ))}
        </g>
      ))}
    </svg>
  );
}

function CRMMockup() {
  return (
    <svg viewBox="0 0 320 180" className="w-[88%] h-auto drop-shadow-[0_10px_24px_rgba(29,92,191,0.25)]">
      <rect x="0" y="0" width="320" height="180" rx="8" fill="white" stroke="var(--color-signal)" strokeOpacity="0.2" />
      <rect x="0" y="0" width="320" height="22" rx="8" fill="var(--color-ink)" />
      <rect x="0" y="14" width="320" height="8" fill="var(--color-ink)" />
      <rect x="12" y="8" width="40" height="6" rx="2" fill="white" opacity="0.8" />

      {/* 3 metric cards */}
      {[
        { label: "Leads", val: "82", growth: "+12%" },
        { label: "Pipeline", val: "$240K", growth: "+34%" },
        { label: "Closed", val: "16", growth: "+8%" },
      ].map((m, i) => (
        <g key={i}>
          <rect x={16 + i * 98} y="34" width="88" height="48" rx="4" fill="white" stroke="var(--color-signal)" strokeOpacity="0.15" />
          <rect x={22 + i * 98} y="40" width="32" height="3" rx="1.5" fill="var(--color-ink-200)" opacity="0.6" />
          <text x={22 + i * 98} y="60" fontSize="14" fontWeight="600" fill="var(--color-ink)">{m.val}</text>
          <rect x={22 + i * 98} y="68" width="28" height="8" rx="4" fill="#34d399" opacity="0.15" />
          <text x={26 + i * 98} y="74" fontSize="6" fill="#22c55e" fontWeight="600">{m.growth}</text>
        </g>
      ))}

      {/* Chart area */}
      <rect x="16" y="92" width="288" height="76" rx="4" fill="white" stroke="var(--color-signal)" strokeOpacity="0.15" />
      <rect x="22" y="98" width="60" height="4" rx="2" fill="var(--color-ink-200)" opacity="0.7" />

      {/* Axis */}
      <line x1="30" y1="156" x2="296" y2="156" stroke="var(--color-ink-200)" strokeOpacity="0.3" />
      <line x1="30" y1="116" x2="30" y2="156" stroke="var(--color-ink-200)" strokeOpacity="0.3" />

      {/* Chart line */}
      <polyline
        points="40,148 75,138 110,142 145,124 180,128 215,118 250,108 285,98"
        fill="none"
        stroke="var(--color-signal)"
        strokeWidth="2"
      />
      <polygon
        points="40,148 75,138 110,142 145,124 180,128 215,118 250,108 285,98 285,156 40,156"
        fill="var(--color-signal)"
        opacity="0.12"
      />
      {/* Data dots */}
      {[[40,148],[75,138],[110,142],[145,124],[180,128],[215,118],[250,108],[285,98]].map(([x,y], i) => (
        <circle key={i} cx={x} cy={y} r="2.5" fill="white" stroke="var(--color-signal)" strokeWidth="2" />
      ))}
    </svg>
  );
}

function DesignMockup() {
  return (
    <svg viewBox="0 0 320 180" className="w-[88%] h-auto drop-shadow-[0_10px_24px_rgba(29,92,191,0.25)]">
      <rect x="0" y="0" width="320" height="180" rx="10" fill="white" stroke="var(--color-signal)" strokeOpacity="0.2" />

      {/* Brand mark on the left — big V */}
      <g transform="translate(40,40)">
        <rect width="100" height="100" rx="12" fill="var(--color-signal)" />
        <text x="50" y="78" fontSize="76" fontWeight="700" fill="white" textAnchor="middle" fontFamily="serif">V</text>
      </g>

      {/* Color palette swatches */}
      <g transform="translate(170,32)">
        <rect width="60" height="36" rx="4" fill="var(--color-signal)" />
        <text x="6" y="20" fontSize="6" fill="white" opacity="0.9">SIGNAL</text>
        <text x="6" y="30" fontSize="7" fill="white" fontWeight="600">#1D5CBF</text>

        <rect y="44" width="60" height="36" rx="4" fill="var(--color-ink)" />
        <text x="6" y="64" fontSize="6" fill="white" opacity="0.9">INK</text>
        <text x="6" y="74" fontSize="7" fill="white" fontWeight="600">#0F1419</text>

        <rect y="88" width="60" height="36" rx="4" fill="var(--color-canvas-alt)" stroke="var(--color-signal)" strokeOpacity="0.2" />
        <text x="6" y="108" fontSize="6" fill="var(--color-ink)" opacity="0.6">CANVAS</text>
        <text x="6" y="118" fontSize="7" fill="var(--color-ink)" fontWeight="600">#F5F7FA</text>
      </g>

      {/* Typography sample */}
      <g transform="translate(244,32)">
        <text x="0" y="14" fontSize="14" fontWeight="700" fill="var(--color-ink)">Aa</text>
        <text x="0" y="28" fontSize="6" fill="var(--color-ink-200)">Heading</text>

        <rect y="40" width="60" height="2" rx="1" fill="var(--color-ink)" />
        <rect y="48" width="40" height="2" rx="1" fill="var(--color-ink-200)" />
        <rect y="56" width="50" height="2" rx="1" fill="var(--color-ink-200)" />

        <rect y="72" width="60" height="20" rx="10" fill="var(--color-signal)" />
        <text x="30" y="86" fontSize="6" fill="white" textAnchor="middle" fontWeight="600">BUTTON</text>

        <text x="0" y="108" fontSize="6" fill="var(--color-ink-200)">tag</text>
        <text x="0" y="118" fontSize="6" fill="var(--color-ink-200)">tag</text>
        <text x="0" y="128" fontSize="6" fill="var(--color-ink-200)">tag</text>
      </g>
    </svg>
  );
}
