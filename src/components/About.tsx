import { motion } from "framer-motion";
import TechCard from "./TechCard";
import {
  JavaLogo,
  PythonLogo,
  HaskellLogo,
  TypeScriptLogo,
  ReactLogo,
  NextJSLogo,
  PostgreLogo,
  TailwindLogo
// @ts-ignore
} from "../assets";
// @ts-ignore
import { Tilt } from "react-tilt";
import { CardData } from "../public";

const data: Array<CardData> = [
  { title: "Java", image: JavaLogo, background:"bg-[#ffd99e]", text:"text-[#DB380E]" },
  { title: "Python", image: PythonLogo, background:"bg-[#7199BB]", text:"text-[#F2BB30]" },
  { title: "Haskell", image: HaskellLogo, background:"bg-[#100717]", text:"text-[#8F4E8B]" },
  { title: "TypeScript", image: TypeScriptLogo, background: "bg-[#3178C6]", text:"text-[#ffffff]" },
  { title: "React", image: ReactLogo, background: "bg-[#ffffff]" , text:"text-[#61DAFB]" },
  { title: "NextJS", image: NextJSLogo, background: "bg-[#ffffff]", text:"text-[#000000]" },
  { title: "PostgreSQL", image: PostgreLogo, background: "bg-[#336791]", text:"text-[#ffffff]" },
  { title: "TailwindCSS", image: TailwindLogo, background: "bg-[#ffffff]" , text:"text-[#38BDF8]" },
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
      className= "max-w-[100rem] mx-auto py-16 p-5 sm:p-10 md:p-20"
    >
      <div className="max-w-[100rem] mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.75}} 
          transition={{ duration: 0.5, easeOut: true }} 
          whileInView={{ opacity: 1, scale: 1 }} 
          viewport={{ once: true, amount: "all" }} 
        >
            <h6 className="font-mono text-lg md:text-xl my-4 text-[#fcba03]">
              ABOUT ME
            </h6>
            <div
              className="text-4xl lg:text-5xl font-sans font-bold mt-4 mb-0 md:mt-6 lg:mt-8"
            >
              <h1>Who am I?</h1>
            </div>
                    <p
            id="text"
            className="my-6 mb-12 md:my-8 lg:my-10 2xl:my-16 text-md md:text-lg xl:text-xl font-sans mx-2 md:mx-4 lg:mx-6 text-violet-100"
                    >
            I am a second year Computer Science student at the <span className="font-mono text-[#fcba03]"> University of Warwick </span> currently
            due to graduate in Summer 2026. I have a strong background in software development, having worked with a wealth of
            programming languages across a range of paradigms. Notwithstanding, I specialise in front-end web development, with
            extensive experience leading a team for a university project and developing my skills through personal projects on GitHub.
                    </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.75}} 
            transition={{ duration: 0.5, easeOut: true }} 
            whileInView={{ opacity: 1, scale: 1 }} 
            viewport={{ once: true, amount: "all" }} 
          >
          <h6 className="text-right font-mono text-lg md:text-xl mt-36 text-[#fcba03]">
            LANGUAGES & TECHNOLOGIES
          </h6>
          <div
            className="text-4xl lg:text-5xl font-sans font-bold mt-4 mb-0 md:mt-6 lg:mt-8"
          >
            <h1 className="text-right mb-8">I have experience with...</h1>
          </div>
        </motion.div>
        <div className="grid grid-cols-4 xl:grid-cols-8 gap-1">
        {data.map((cardData: CardData, index: number) => (
            <motion.div
              key={cardData.title}
              initial={{ opacity: 0, scale: 0.75, y: 100 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5, easeOut: true }}
              viewport={{ once: true, amount: "some" }} 
            >
              <Tilt options={defaultOptions}>
                <TechCard
                  title={cardData.title}
                  image={cardData.image}
                  background={cardData.background}
                  text={cardData.text}
                />
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
