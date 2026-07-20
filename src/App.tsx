//@ts-ignore
import { Navbar, Hero, About, Projects, Timeline } from "./components";
import { motion, useScroll, useSpring } from "framer-motion";

const App = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Timeline />
    </div>
  );
};

export default App;
