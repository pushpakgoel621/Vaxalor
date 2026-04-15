"use client";

import { useRef, useEffect, useState } from "react";
import Matter from "matter-js";
import { useInView } from "framer-motion";

interface PhysicsBadgesProps {
  items: string[];
}

export function PhysicsBadges({ items }: PhysicsBadgesProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLDivElement>(null);
  const engineRef = useRef<Matter.Engine | null>(null);
  const bodiesRef = useRef<Matter.Body[]>([]);
  const [positions, setPositions] = useState<{ x: number; y: number; angle: number }[]>([]);
  const [started, setStarted] = useState(false);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });

  useEffect(() => {
    if (!isInView || !containerRef.current || started) return;
    setStarted(true);

    const container = containerRef.current;
    const width = container.offsetWidth;
    const height = 350;

    // Create engine
    const engine = Matter.Engine.create({
      gravity: { x: 0, y: 1, scale: 0.001 },
    });
    engineRef.current = engine;

    // Walls
    const wallOptions = { isStatic: true, restitution: 0.3, friction: 0.5 };
    const walls = [
      Matter.Bodies.rectangle(width / 2, height + 25, width + 100, 50, wallOptions), // floor
      Matter.Bodies.rectangle(-25, height / 2, 50, height * 2, wallOptions), // left
      Matter.Bodies.rectangle(width + 25, height / 2, 50, height * 2, wallOptions), // right
    ];

    // Create bodies for each item
    const bodies = items.map((_, i) => {
      const bodyWidth = 80 + Math.random() * 30;
      const bodyHeight = 36;
      const x = (width / (items.length + 1)) * (i + 1) + (Math.random() - 0.5) * 60;
      const y = -50 - Math.random() * 200;

      return Matter.Bodies.rectangle(x, y, bodyWidth, bodyHeight, {
        restitution: 0.4,
        friction: 0.3,
        frictionAir: 0.01,
        chamfer: { radius: 8 },
        angle: (Math.random() - 0.5) * 0.3,
      });
    });
    bodiesRef.current = bodies;

    Matter.Composite.add(engine.world, [...walls, ...bodies]);

    // Mouse constraint
    const mouse = Matter.Mouse.create(container);
    const mouseConstraint = Matter.MouseConstraint.create(engine, {
      mouse,
      constraint: {
        stiffness: 0.2,
        render: { visible: false },
      },
    });

    // Prevent scrolling when dragging physics bodies
    mouseConstraint.mouse.element.removeEventListener("mousewheel", (mouseConstraint.mouse as unknown as { mousewheel: EventListener }).mousewheel);
    mouseConstraint.mouse.element.removeEventListener("DOMMouseScroll", (mouseConstraint.mouse as unknown as { mousewheel: EventListener }).mousewheel);

    Matter.Composite.add(engine.world, mouseConstraint);

    // Animation loop
    let rafId: number;
    function update() {
      Matter.Engine.update(engine, 1000 / 60);

      const newPositions = bodies.map((body) => ({
        x: body.position.x,
        y: body.position.y,
        angle: body.angle,
      }));
      setPositions(newPositions);

      rafId = requestAnimationFrame(update);
    }
    rafId = requestAnimationFrame(update);

    return () => {
      cancelAnimationFrame(rafId);
      Matter.Engine.clear(engine);
    };
  }, [isInView, items, started]);

  return (
    <div
      ref={containerRef}
      className="relative w-full select-none"
      style={{ height: 350 }}
    >
      <div ref={canvasRef} className="absolute inset-0">
        {items.map((item, i) => {
          const pos = positions[i];
          if (!pos) return null;

          return (
            <div
              key={item}
              className="absolute px-4 py-2 bg-canvas-white border border-canvas-border rounded-lg text-ink-200 text-sm font-medium whitespace-nowrap shadow-sm hover:border-signal/40 hover:text-signal transition-colors duration-150"
              style={{
                left: pos.x,
                top: pos.y,
                transform: `translate(-50%, -50%) rotate(${pos.angle}rad)`,
                cursor: "grab",
                userSelect: "none",
              }}
            >
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
}
