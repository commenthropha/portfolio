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
      <motion.div className="fixed top-0 left-0 right-0 h-1 z-10 bg-stone-800 dark:bg-stone-100 transform origin-left" style={{ scaleX }} />
      <Navbar />
      <Hero />
      <About />
      <Timeline />
    </div>
  );
};

export default App;
