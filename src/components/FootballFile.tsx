import React, { Suspense } from "react";
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

// Error boundary component
class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: any) {
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.error("Error:", error);
  }

  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    return this.props.children;
  }
}

export default function FootballFile() {
  return (
    <Center>
      <Box>
        <Canvas>
          <Suspense fallback={null}>
            <ErrorBoundary>
              <Stage environment="city" intensity={1}>
                <Football />
              </Stage>
            </ErrorBoundary>
          </Suspense>
          <OrbitControls enableZoom={false} />
        </Canvas>
      </Box>
    </Center>
  );
}
