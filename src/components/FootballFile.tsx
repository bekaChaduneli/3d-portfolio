import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import styled from "styled-components";
import { Football } from "./Football";

const Box = styled.div`
  width: 30vw;
  display: flex;
  align-items: flex-end;
`;

const Center = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 1440px) {
    height: 100vh;
  }
`;

export default function FootballFile() {
  return (
    <Center>
      <Box>
        <Canvas>
          <Stage environment="city" intensity={1}>
            <Football />
          </Stage>
          <OrbitControls enableZoom={false} />
        </Canvas>
      </Box>
    </Center>
  );
}
