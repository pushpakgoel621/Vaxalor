"use client";

import { useRef, useState, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, Environment } from "@react-three/drei";
import * as THREE from "three";

function VShape() {
  const meshRef = useRef<THREE.Group>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const { viewport } = useThree();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMouse({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useFrame((_, delta) => {
    if (!meshRef.current) return;

    // Smooth follow mouse rotation
    const targetRotY = mouse.x * 0.4;
    const targetRotX = -mouse.y * 0.3;

    meshRef.current.rotation.y += (targetRotY - meshRef.current.rotation.y) * delta * 3;
    meshRef.current.rotation.x += (targetRotX - meshRef.current.rotation.x) * delta * 3;

    // Subtle idle rotation
    meshRef.current.rotation.z = Math.sin(Date.now() * 0.0005) * 0.05;
  });

  // Build the "V" shape using ExtrudeGeometry
  const vShape = new THREE.Shape();
  vShape.moveTo(-1.2, 1.5);
  vShape.lineTo(-0.6, 1.5);
  vShape.lineTo(0, -0.8);
  vShape.lineTo(0.6, 1.5);
  vShape.lineTo(1.2, 1.5);
  vShape.lineTo(0.3, -1.5);
  vShape.lineTo(-0.3, -1.5);
  vShape.closePath();

  const extrudeSettings = {
    depth: 0.5,
    bevelEnabled: true,
    bevelThickness: 0.08,
    bevelSize: 0.06,
    bevelSegments: 4,
  };

  // "A" shape (triangle with cutout)
  const aShape = new THREE.Shape();
  aShape.moveTo(0, 1.5);
  aShape.lineTo(-0.9, -1.5);
  aShape.lineTo(-0.4, -1.5);
  aShape.lineTo(-0.15, -0.5);
  aShape.lineTo(0.15, -0.5);
  aShape.lineTo(0.4, -1.5);
  aShape.lineTo(0.9, -1.5);
  aShape.closePath();

  // "i" dot
  const iDotShape = new THREE.Shape();
  iDotShape.absarc(0, 0, 0.2, 0, Math.PI * 2, false);

  return (
    <group ref={meshRef} scale={viewport.width > 8 ? 1 : 0.7}>
      <Float speed={2} rotationIntensity={0.1} floatIntensity={0.3}>
        {/* V */}
        <mesh position={[-1.8, 0, 0]} castShadow>
          <extrudeGeometry args={[vShape, extrudeSettings]} />
          <meshStandardMaterial
            color="#1D5CBF"
            metalness={0.7}
            roughness={0.2}
            envMapIntensity={1.2}
          />
        </mesh>

        {/* A */}
        <mesh position={[0.3, 0, 0]} castShadow>
          <extrudeGeometry args={[aShape, extrudeSettings]} />
          <meshStandardMaterial
            color="#3B8BF5"
            metalness={0.6}
            roughness={0.25}
            envMapIntensity={1}
          />
        </mesh>

        {/* i stem */}
        <mesh position={[1.8, -0.2, 0]} castShadow>
          <boxGeometry args={[0.35, 2, 0.5]} />
          <meshStandardMaterial
            color="#1D5CBF"
            metalness={0.7}
            roughness={0.2}
            envMapIntensity={1.2}
          />
        </mesh>

        {/* i dot */}
        <mesh position={[1.8, 1.3, 0.25]} castShadow>
          <extrudeGeometry args={[iDotShape, { depth: 0.5, bevelEnabled: true, bevelThickness: 0.05, bevelSize: 0.04, bevelSegments: 3 }]} />
          <meshStandardMaterial
            color="#3B8BF5"
            metalness={0.5}
            roughness={0.3}
            envMapIntensity={1}
          />
        </mesh>

        {/* Subtle glow plane behind */}
        <mesh position={[0, 0, -0.5]} scale={[5, 4, 1]}>
          <planeGeometry />
          <meshBasicMaterial
            color="#1D5CBF"
            transparent
            opacity={0.03}
          />
        </mesh>
      </Float>
    </group>
  );
}

export function Logo3D() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-full h-full" />;
  }

  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
        <directionalLight position={[-3, 2, 4]} intensity={0.4} color="#3B8BF5" />
        <pointLight position={[0, -2, 3]} intensity={0.3} color="#1D5CBF" />
        <Environment preset="city" />
        <VShape />
      </Canvas>
    </div>
  );
}
