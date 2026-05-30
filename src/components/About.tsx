import { motion } from "framer-motion";
import TechCard from "./TechCard";
import {
  JavaLogo,
  PythonLogo,
  TypeScriptLogo,
  ReactLogo,
  NextJSLogo,
  PostgreLogo,
  // @ts-ignore
} from "../assets";
// @ts-ignore
import { Tilt } from "react-tilt";
import { CardData } from "../public";

const data: Pick<CardData, "title" | "image">[] = [
  { title: "Java", image: JavaLogo },
  { title: "Python", image: PythonLogo },
  { title: "TypeScript", image: TypeScriptLogo },
  { title: "React", image: ReactLogo },
  { title: "NextJS", image: NextJSLogo },
  { title: "PostgreSQL", image: PostgreLogo },
];

const defaultOptions = {
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

const About = () => {
  return (
    <div
      id="about"
      className="max-w-[60rem] mx-auto py-16 p-5 sm:p-10 lg:-translate-y-12"
    >
      <div className="max-w-[60rem] mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.75 }}
          transition={{ duration: 0.5, easeOut: true }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.1 }}
        >
          <h6 className="font-mono text-lg text-stone-500 tracking-widest">
            ABOUT ME
          </h6>
          <div className="text-4xl font-sans font-bold mt-2 mb-10">
            <h1 className="text-stone-900 dark:text-stone-100">Who am I?</h1>
          </div>

          <div className="flex flex-col divide-y divide-stone-200 dark:divide-stone-800">

            <div className="flex gap-5 py-7">
              <div className="flex-shrink-0 w-9 h-9 rounded-full bg-stone-100 dark:bg-stone-800 flex items-center justify-center mt-0.5">
                <span className="text-stone-500 text-sm font-mono">01</span>
              </div>
              <div className="flex-1">
                <p className="font-mono text-sm tracking-widest text-stone-600 dark:text-stone-500 mb-2 uppercase">Role</p>
                <p className="text-sm lg:text-base font-sans text-stone-700 dark:text-stone-400 leading-relaxed">
                  I am a <span className="font-mono font-bold text-stone-900 dark:text-stone-200">Java Software Engineer</span>{" "}
                  working at X, building production software since 2024. Day-to-day I work in an{" "}
                  <span className="font-mono font-bold text-stone-900 dark:text-stone-200">Agile</span> environment,
                  contributing to EPICs within{" "}
                  <span className="font-mono font-bold text-stone-900 dark:text-stone-200">Scrum</span> teams
                  operating across SAFe ARTs. I believe that an{" "}
                  <span className="font-mono font-bold text-stone-900 dark:text-stone-200">architecture-focussed</span> approach
                  is pivotal in a contemporary engineering landscape; extensible, microservice-based
                  design is paramount for pragmatic software development.
                </p>
              </div>
            </div>

            <div className="flex gap-5 py-7">
              <div className="flex-shrink-0 w-9 h-9 rounded-full bg-stone-100 dark:bg-stone-800 flex items-center justify-center mt-0.5">
                <span className="text-stone-500 text-sm font-mono">02</span>
              </div>
              <div className="flex-1">
                <p className="font-mono text-sm tracking-widest text-stone-600 dark:text-stone-500 mb-2 uppercase">Interests</p>
                <p className="text-sm lg:text-base font-sans text-stone-600 dark:text-stone-400 leading-relaxed">
                  Outside my professional role, I maintain a keen interest in{" "}
                  <span className="font-mono font-bold text-stone-900 dark:text-stone-200">modern web development</span>.
                  I am particularly drawn to how migrating legacy software to contemporary
                  service-based architectures can be paired with modern web interfaces to build
                  lightweight, accessible products.
                </p>
              </div>
            </div>

            <div className="flex gap-5 py-7">
              <div className="flex-shrink-0 w-9 h-9 rounded-full bg-stone-100 dark:bg-stone-800 flex items-center justify-center mt-0.5">
                <span className="text-stone-500 text-sm font-mono">03</span>
              </div>
              <div className="flex-1">
                <p className="font-mono text-sm tracking-widest text-stone-600 dark:text-stone-500 mb-2 uppercase">Goals</p>
                <p className="text-sm lg:text-base font-sans text-stone-600 dark:text-stone-400 leading-relaxed">
                  In the <span className="font-mono font-bold text-stone-900 dark:text-stone-200">short term</span> — developing
                  the ability to architect software at scale, building on best practices across
                  extensible design and quality engineering.
                </p>
                <p className="mt-3 text-sm lg:text-base font-sans text-stone-600 dark:text-stone-400 leading-relaxed">
                  In the <span className="font-mono font-bold text-stone-900 dark:text-stone-200">long term</span> — reaching
                  a position where I can open doors for ambitious junior engineers and facilitate
                  a genuine platform for them to grow.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.75 }}
          transition={{ duration: 0.5, easeOut: true }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.1 }}
        >
          <h6 className="text-right font-mono text-lg tracking-widest mt-24 text-stone-500">
            LANGUAGES & TECHNOLOGIES
          </h6>
          <div className="text-4xl font-sans font-bold mt-2 mb-0">
            <h1 className="text-right mb-8 text-stone-900 dark:text-stone-100">
              I have experience with...
            </h1>
          </div>
        </motion.div>

        <div className="grid grid-cols-6">
          {data.map((cardData, index) => (
            <Tilt options={defaultOptions}>
              <TechCard
                key = {index}
                title={cardData.title}
                image={cardData.image}
              />
            </Tilt>
          ))}
        </div>

      </div>
    </div>
  );
};

export default About;