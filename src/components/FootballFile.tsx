import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import styled from "styled-components";
import { Football } from "./Football";

const Box = styled.div`
  width: 40vw;
  display: flex;
  align-items: flex-end;
`;

const Center = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function FootballFile() {
  return (
    <Center>
      <Box>
        <Canvas>
          <Stage environment="city" intensity={0.6}>
            <Football />
          </Stage>
          <OrbitControls enableZoom={false} />
        </Canvas>
      </Box>
    </Center>
  );
}
