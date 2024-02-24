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
      return <div>Something went wrong while loading the 3D model.</div>;
    }
    return this.props.children;
  }
}
