import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import styled from "styled-components";
import Navbar from "./Navbar";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  @media only screen and (max-width: 1440px) {
    max-width: 100%;
  }
`;

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 1440px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 15px;
  }
`;

const Left_Top = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  @media only screen and (max-width: 1440px) {
    flex: 1;
    align-items: center;
    text-align: center;
  }
`;
const Title = styled.h1`
  font-size: 74px;
  @media only screen and (max-width: 1440px) {
    text-align: center;
    font-size: 44px;
  }
  @media only screen and (max-width: 768px) {
    text-align: center;
    font-size: 30px;
  }
`;
const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const Line = styled.img`
  height: 5px;
`;
const Subtitle = styled.h2`
  color: #da4ea2;
`;
const Desc = styled.p`
  font-size: 24px;
  color: lightgray;
  align-self: center;
  justify-self: center;
`;
const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  font-weight: 500;
  width: 100px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Right_Bottom = styled.div`
  flex: 3;
  position: relative;
  animation: animate 2s infinite ease alternate;
  @media only screen and (max-width: 1440px) {
    flex: 2;
    width: 100%;
    max-height: 600px;
  }
  @media only screen and (max-width: 768px) {
    flex: 1;
    width: 100%;
    max-height: 600px;
  }

  @keyframes animate {
    100% {
      transform: translateY(20px);
    }
  }
`;
const Img = styled.img`
  width: 800px;
  height: 600px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  @media only screen and (max-width: 1440px) {
    width: 40%;
    max-width: 400px;
  }
  @media only screen and (max-width: 768px) {
    width: 60%;
    max-width: 350px;
  }
`;

export default function Hero(props: any) {
  return (
    <Section>
      <Navbar />
      <Container>
        <Left_Top>
          <Title>Think, Make, Solve.</Title>
          <WhatWeDo>
            <Line />
            <Line src={props.line} />
            <Subtitle>What we Do</Subtitle>
          </WhatWeDo>
          <Desc>
            we enjoy creating delightful, human-centered digital experiences.
          </Desc>
          <Button>Learn More</Button>
        </Left_Top>
        <Right_Bottom>
          <Canvas>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={1} />
            <directionalLight position={[3, 2, 1]} />
            <Sphere args={[1, 100, 100]} scale={2.65}>
              <MeshDistortMaterial
                color="#3d1c56"
                attach="material"
                distort={0.5}
                speed={2}
              />
            </Sphere>
          </Canvas>
          <Img src={props.moon} />
        </Right_Bottom>
      </Container>
    </Section>
  );
}
