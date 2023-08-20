"use client";
import { Canvas } from "@react-three/fiber";
import Experience from "components/Experience";

export default function Home() {
  return (
    <Canvas shadows camera={{ position: [3, 3, 3], fov: 30 }}>
      <color attach="background" args={["ffffff"]} />
      <Experience />
    </Canvas>
  );
}
