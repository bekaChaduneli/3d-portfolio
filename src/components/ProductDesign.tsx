import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Shoe from "../Shoe";
import { Model } from "./Chair";
import { Shoes } from "./Shoe";
export default function WebDesign() {
  return (
    <Canvas>
      <Stage environment="city" intensity={0.6}>
        <Shoes />
      </Stage>
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}
