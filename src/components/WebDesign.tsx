import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import styled from "styled-components";
import { Model } from "./Chair";
import Mac from "./Mac";

export default function WebDesign() {
  return (
    <Canvas>
      <Stage environment="city" intensity={0.6}>
        <Mac />
      </Stage>
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}
