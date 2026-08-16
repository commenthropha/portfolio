import { motion } from "framer-motion";
import TechCard from "../TechCard";
import {
  JavaLogo,
  PythonLogo,
  TypeScriptLogo,
  ReactLogo,
  NextJSLogo,
  PostgreLogo,
  // @ts-ignore
} from "../../assets";
// @ts-ignore
import { Tilt } from "react-tilt";

const techData = [
  { title: "Java", image: JavaLogo },
  { title: "Python", image: PythonLogo },
  { title: "TypeScript", image: TypeScriptLogo },
  { title: "React", image: ReactLogo },
  { title: "NextJS", image: NextJSLogo },
  { title: "PostgreSQL", image: PostgreLogo },
];

const defaultTiltOptions = {
  reverse: false,
  max: 20,
  perspective: 1000,
  scale: 1.0,
  speed: 2000,
  transition: true,
  axis: null,
  reset: true,
  easing: "cubic-bezier(.03,.98,.52,.99)",
};

const TechStack = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.75 }}
    transition={{ duration: 0.5, easeOut: true }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true, amount: 0.1 }}
  >
    <h2 className="text-right text-4xl lg:text-5xl font-sans font-bold tracking-tight text-stone-900 dark:text-stone-100">
      Experience.
    </h2>
    <p className="text-right font-mono text-sm tracking-widest text-stone-500 mt-4 uppercase">
      Languages & Technologies
    </p>
    
    <div className="grid grid-cols-6">
      {techData.map((cardData, index) => (
        <Tilt key={index} options={defaultTiltOptions}>
          <TechCard title={cardData.title} image={cardData.image} />
        </Tilt>
      ))}
    </div>
  </motion.div>
);

export default TechStack;
