import React, { Suspense } from "react";
import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Atom from "./Atom";

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
    console.error("Error in WebDesign component:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <div>Something went wrong while rendering the 3D model.</div>;
    }
    return this.props.children;
  }
}

export default function WebDesign() {
  return (
    <Canvas>
      <Suspense fallback={null}>
        <ErrorBoundary>
          <Stage environment="city" intensity={0.6}>
            <Atom />
          </Stage>
        </ErrorBoundary>
      </Suspense>
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}
