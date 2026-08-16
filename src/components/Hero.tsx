import { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
//@ts-ignore
import Computer from "./Computer";

const ResponsiveCanvas = () => {
  const [interactive, setInteractive] = useState("none");

  useEffect(() => {
    const handleResize = () => {
      setInteractive(window.innerWidth > 1023 ? "auto" : "none");
    };
    
    handleResize(); 

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Canvas
      camera={{ position: [1, 3, 10] }}
      //@ts-ignore
      style={{ height: `450px`, pointerEvents: interactive }}
    >
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate={true}
        autoRotateSpeed={0.5} 
        minPolarAngle={1.2}
        maxPolarAngle={1.2}
      />
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={1.5} />
      <pointLight position={[-5, 2, -5]} intensity={0.8} color="#a8a29e" />
      <Computer />
    </Canvas>
  );
};

const Hero = () => {
  return (
    <section className="max-w-[70rem] mx-auto flex flex-col lg:flex-row items-center min-h-[50vh]">
      <div className="lg:w-1/2 flex flex-col justify-center px-8 lg:px-16 mt-12 lg:mt-0">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl lg:text-6xl font-sans font-bold tracking-tight text-stone-900 dark:text-stone-100">
            Anees H.
          </h1>
          <h2 className="font-mono text-sm tracking-widest text-stone-500 mt-4 uppercase">
            Software Engineer
          </h2>
          <p className="mt-6 text-stone-600 dark:text-stone-400 max-w-md mx-auto lg:mx-0 leading-relaxed text-lg">
            Designing and building scalable applications with a focus on performance and robust architecture.
          </p>
        </div>
      </div>

      <div className="lg:w-1/2 w-full mt-10 lg:mt-0">
        <ResponsiveCanvas />
      </div>
    </section>
  );
};

export default Hero;