import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import styled from "styled-components";
import { Model } from "./Chair";

export default function Illustration() {
  return (
    <Canvas>
      <Stage environment="city" intensity={0.6}>
        <Model />
      </Stage>
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}
