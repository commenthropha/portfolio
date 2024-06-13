import { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
//@ts-ignore
import Computer from "./Computer";

const ResponsiveCanvas = () => {

  const [interactive, setInteractive] = useState(
    window.innerWidth > 1023 ? "auto" : "none"
  );

  const handleResize = () => {
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
      style={{ height: `500px`, pointerEvents: `${interactive}` }}
    >
      <OrbitControls 
        enableZoom={false} 
        enablePan={false} 
        autoRotate={true}
        minPolarAngle={1.2}
        maxPolarAngle={1.2}
      />
      <ambientLight intensity={2} />
      <pointLight position={[0, 1, 1]} color="#D69400" />
      <Computer />
    </Canvas>
  );
};

const Hero = () => {
  return (
    <div className="max-w-[70rem] mx-auto flex flex-col lg:flex-row">
      <div className="lg:-translate-y-16 lg:w-1/2 flex items-center justify-center">
        <div className="flex content-end my-16 mx-10">
          <h1 className="text-center lg:text-left text-5xl lg:text-6xl font-sans font-bold lg:pl-16">
            Hey, my name is{" "}
            <span className="underline font-bold text-[#D69400]">Anees</span>
          </h1>
        </div>
      </div>

      <div className="lg:w-1/2">
        <ResponsiveCanvas />
      </div>
    </div>
  );
};

export default Hero;
