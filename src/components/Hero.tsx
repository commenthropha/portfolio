import { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
//@ts-ignore
import Computer from "./Computer";

const ResponsiveCanvas = () => {
  const [canvasHeight, setCanvasHeight] = useState(
    window.innerWidth > 1023 ? 800 : 500
  );

  const [interactive, setInteractive] = useState(
    window.innerWidth > 1023 ? "auto" : "none"
  );

  const handleResize = () => {
    setCanvasHeight(window.innerWidth > 1023 ? 800 : 500);
    setInteractive(window.innerWidth > 1023 ? "auto" : "none");
  };


  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Canvas
      camera={{ position: [1, 2, 3] }}
      //@ts-ignore
      style={{ height: `${canvasHeight}px`, pointerEvents: `${interactive}` }}
    >
      <OrbitControls 
        enableZoom={false} 
        enablePan={false} 
        autoRotate={true}
        minPolarAngle={1.2}
        maxPolarAngle={1.2}
      />
      <ambientLight intensity={3} />
      <pointLight position={[0, 1, 1]} color="#fcba03" />
      <Computer />
    </Canvas>
  );
};

const Hero = () => {
  return (
    <div className="max-w-[100rem] mx-auto flex flex-col lg:flex-row">
      <div className="lg:w-1/2 xl:w-2/5 flex items-center justify-center">
        <div className="my-16 md:my-24 mx-10 lg:mx-24">
          <h1 className="slit-in-vertical text-center md:text-right text-5xl md:text-7xl xl:text-8xl font-sans font-bold">
            Hey, my name is{" "}
            <span className="underline font-bold text-[#fcba03]">Anees</span>
          </h1>
        </div>
      </div>

      <div className="grow lg:w-1/2 xl:w-3/5">
        <ResponsiveCanvas />
      </div>
    </div>
  );
};

export default Hero;
