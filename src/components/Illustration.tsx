import React, { Suspense } from "react";
import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Model } from "./Chair";

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
export default function Illustration() {
  return (
    <Canvas>
      <Suspense fallback={null}>
        <ErrorBoundary>
          <Stage environment="city" intensity={0.6}>
            <Model />
          </Stage>
        </ErrorBoundary>
      </Suspense>
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}
