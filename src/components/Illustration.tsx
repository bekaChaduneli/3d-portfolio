import React, { Suspense } from "react";
import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Model } from "./Chair";

// Error boundary component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error in Illustration component:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <div>Something went wrong while rendering the 3D model.</div>;
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
