import { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
//@ts-ignore
import Computer from "./Computer";

const ResponsiveCanvas = () => {
  const [interactive, setInteractive] = useState(
    window.innerWidth > 1023 ? "auto" : "none",
  );

  const handleResize = () => {
    setInteractive(window.innerWidth > 1023 ? "auto" : "none");
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Canvas
      camera={{ position: [1, 3, 10] }}
      //@ts-ignore
      style={{ height: `420px`, pointerEvents: `${interactive}` }}
    >
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate={true}
        minPolarAngle={1.2}
        maxPolarAngle={1.2}
      />
      <ambientLight intensity={2} />
      <pointLight position={[0, 1, 1]} color="#a8a29e" />
      <Computer />
    </Canvas>
  );
};

const Hero = () => {
  return (
    <div className="max-w-[70rem] mx-auto flex flex-col lg:flex-row">
      <div className="lg:-translate-y-16 lg:w-1/2 flex items-center justify-center">
        <div className="flex content-end mt-10 mb-6 mx-10">
          <div className="text-center lg:text-left lg:pl-16">
            <h1 className="text-5xl lg:text-6xl font-sans font-bold text-stone-900 dark:text-stone-100">
              Hey, I'm{" "}
              <span className="text-stone-700 dark:text-stone-300 underline decoration-stone-400 dark:decoration-stone-600 underline-offset-4">
                Anees
              </span>
            </h1>
            <p className="font-mono text-sm tracking-widest text-stone-500 mt-4 uppercase">
              Software Engineer
            </p>
          </div>
        </div>
      </div>

      <div className="lg:w-1/2">
        <ResponsiveCanvas />
      </div>
    </div>
  );
};

export default Hero;
