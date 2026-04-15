"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import { useInView } from "framer-motion";

interface PhysicsBadgesProps {
  items: string[];
}

export function PhysicsBadges({ items }: PhysicsBadgesProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const badgeRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [started, setStarted] = useState(false);
  const [ready, setReady] = useState(false);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });
  const cleanupRef = useRef<(() => void) | null>(null);

  const setBadgeRef = useCallback((el: HTMLDivElement | null, i: number) => {
    badgeRefs.current[i] = el;
  }, []);

  useEffect(() => {
    if (!isInView || !containerRef.current || started) return;
    setStarted(true);

    let rafId: number;

    import("matter-js").then((Matter) => {
      const container = containerRef.current;
      if (!container) return;

      const width = container.offsetWidth;
      const height = 350;

      const engine = Matter.Engine.create({
        gravity: { x: 0, y: 1, scale: 0.001 },
      });

      // Walls
      const wallOpts = { isStatic: true, restitution: 0.3, friction: 0.5 };
      const walls = [
        Matter.Bodies.rectangle(width / 2, height + 25, width + 100, 50, wallOpts),
        Matter.Bodies.rectangle(-25, height / 2, 50, height * 2, wallOpts),
        Matter.Bodies.rectangle(width + 25, height / 2, 50, height * 2, wallOpts),
      ];

      // Bodies
      const bodies = items.map((_, i) => {
        const bw = 80 + Math.random() * 30;
        const bh = 36;
        const x = (width / (items.length + 1)) * (i + 1) + (Math.random() - 0.5) * 60;
        const y = -50 - Math.random() * 200;

        return Matter.Bodies.rectangle(x, y, bw, bh, {
          restitution: 0.4,
          friction: 0.3,
          frictionAir: 0.01,
          chamfer: { radius: 8 },
          angle: (Math.random() - 0.5) * 0.3,
        });
      });

      Matter.Composite.add(engine.world, [...walls, ...bodies]);

      // Mouse drag
      try {
        const mouse = Matter.Mouse.create(container);
        const mouseConstraint = Matter.MouseConstraint.create(engine, {
          mouse,
          constraint: { stiffness: 0.2, render: { visible: false } },
        });
        Matter.Composite.add(engine.world, mouseConstraint);
      } catch {
        // Mouse constraint setup can fail in some environments — physics still works
      }

      setReady(true);

      // Render loop — update DOM directly, no React state
      function update() {
        Matter.Engine.update(engine, 1000 / 60);

        bodies.forEach((body, i) => {
          const el = badgeRefs.current[i];
          if (el) {
            el.style.left = `${body.position.x}px`;
            el.style.top = `${body.position.y}px`;
            el.style.transform = `translate(-50%, -50%) rotate(${body.angle}rad)`;
            el.style.opacity = "1";
          }
        });

        rafId = requestAnimationFrame(update);
      }
      rafId = requestAnimationFrame(update);

      cleanupRef.current = () => {
        cancelAnimationFrame(rafId);
        Matter.Engine.clear(engine);
      };
    });

    return () => {
      cleanupRef.current?.();
    };
  }, [isInView, items, started]);

  return (
    <div
      ref={containerRef}
      className="relative w-full select-none overflow-hidden"
      style={{ height: 350, cursor: "grab" }}
    >
      {items.map((item, i) => (
        <div
          key={item}
          ref={(el) => setBadgeRef(el, i)}
          className="absolute px-4 py-2 bg-canvas-white border border-canvas-border rounded-lg text-ink-200 text-sm font-medium whitespace-nowrap shadow-sm hover:border-signal/40 hover:text-signal transition-colors duration-150"
          style={{
            left: 0,
            top: 0,
            opacity: ready ? 1 : 0,
            cursor: "grab",
            userSelect: "none",
          }}
        >
          {item}
        </div>
      ))}
    </div>
  );
}
