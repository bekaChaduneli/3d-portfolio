import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Mac from "./Mac";
import React from "react";

export default function WebDesign() {
  return (
    <Canvas>
      <Stage environment="city" intensity={0.6}>
        <ErrorBoundary>
          <Mac />
        </ErrorBoundary>
      </Stage>
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}

// Add an error boundary component
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
