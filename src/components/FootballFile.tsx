import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import styled from "styled-components";
import { Football } from "./Football";

export default function FootballFile() {
  return (
    <Canvas>
      <Stage environment="city" intensity={0.6}>
        <Football />
      </Stage>
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}
