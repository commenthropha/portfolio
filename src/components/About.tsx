import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { RiComputerLine } from "react-icons/ri";
import { PiFilmSlate, PiBarbell, PiSoccerBall, PiCar } from "react-icons/pi";

const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const AnimatedSection = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const About = () => {
  return (
    <section
      id="about"
      className="max-w-[60rem] mx-auto py-16 px-6 lg:px-10 min-h-screen"
    >
      <div className="max-w-[50rem] mx-auto">
        
        {/* Main Header */}
        <AnimatedSection className="mb-16 text-center lg:text-left">
          <h2 className="text-4xl lg:text-5xl font-sans font-bold tracking-tight text-stone-900 dark:text-stone-100">
            About.
          </h2>
        </AnimatedSection>

        {/* 1. PROFESSIONAL SECTION */}
        <div className="mb-16">
          <AnimatedSection>
            <h3 className="font-mono text-sm tracking-widest text-stone-500 mb-6 uppercase border-b border-stone-200 dark:border-stone-800/50 pb-4">
              Professional Background
            </h3>
          </AnimatedSection>

          <AnimatedSection>
            <div className="flex flex-col sm:flex-row gap-6 py-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-stone-100 dark:bg-stone-800/80 flex items-center justify-center">
                <RiComputerLine className="text-stone-500 text-lg" />
              </div>
              <div className="flex-1">
                <h4 className="font-mono text-sm tracking-widest text-stone-900 dark:text-stone-300 mb-3 uppercase">
                  Engineering
                </h4>
                <p className="text-base font-sans text-stone-600 dark:text-stone-400 leading-relaxed">
                  I am a{" "}
                  <span className="font-medium text-stone-900 dark:text-stone-200">
                    Java software engineer
                  </span>
                  , building production software since 2024. Day-to-day I work
                  in an{" "}
                  <span className="font-medium text-stone-900 dark:text-stone-200">
                    Agile
                  </span>{" "}
                  environment, contributing to EPICs within Scrum teams
                  operating across SAFe ARTs. I believe that an{" "}
                  <span className="font-medium text-stone-900 dark:text-stone-200">
                    architecture-focused
                  </span>{" "}
                  approach is pivotal in a contemporary engineering landscape;
                  extensible, microservice-based design is paramount for
                  pragmatic software development.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* 2. INTERESTS SECTION */}
        <div>
          <AnimatedSection>
            <h3 className="font-mono text-sm tracking-widest text-stone-500 mb-2 uppercase border-b border-stone-200 dark:border-stone-800/50 pb-4">
              Personal Interests
            </h3>
          </AnimatedSection>

          <div className="flex flex-col border-stone-200 dark:border-stone-800/50">
            {/* Film */}
            <AnimatedSection>
              <div className="flex flex-col sm:flex-row gap-6 py-8 border-b border-stone-200 dark:border-stone-800/50">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-stone-100 dark:bg-stone-800/80 flex items-center justify-center">
                  <PiFilmSlate className="text-stone-500 text-lg" />
                </div>
                <div className="flex-1">
                  <h4 className="font-mono text-sm tracking-widest text-stone-900 dark:text-stone-300 mb-3 uppercase">
                    Cinema
                  </h4>
                  <p className="text-base font-sans text-stone-600 dark:text-stone-400 leading-relaxed">
                    I'm an avid lover of cinema, across all genres, with a soft
                    spot for{" "}
                    <span className="font-medium text-stone-900 dark:text-stone-200">
                      supernatural horror
                    </span>
                    . I write about the films that interest me most; right now I'm
                    watching and writing about a new film every day for{" "}
                    <span className="font-medium text-stone-900 dark:text-stone-200">
                      500 days
                    </span>
                    . You can find all of that{" "}
                    <Link
                      to="/films"
                      className="font-medium text-stone-900 dark:text-stone-200 underline decoration-stone-300 dark:decoration-stone-600 underline-offset-4 hover:decoration-stone-900 dark:hover:decoration-stone-200 transition-colors"
                    >
                      here
                    </Link>
                    .
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* Lifting */}
            <AnimatedSection>
              <div className="flex flex-col sm:flex-row gap-6 py-8 border-b border-stone-200 dark:border-stone-800/50">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-stone-100 dark:bg-stone-800/80 flex items-center justify-center">
                  <PiBarbell className="text-stone-500 text-lg" />
                </div>
                <div className="flex-1">
                  <h4 className="font-mono text-sm tracking-widest text-stone-900 dark:text-stone-300 mb-3 uppercase">
                    Strength Training
                  </h4>
                  <p className="text-base font-sans text-stone-600 dark:text-stone-400 leading-relaxed">
                    As someone who trains regularly, I'm drawn to the tension
                    between{" "}
                    <span className="font-medium text-stone-900 dark:text-stone-200">
                      evidence-based methodology
                    </span>{" "}
                    and simply training hard. Although online discourse is
                    divisive, I believe that the truth-as usual-sits somewhere
                    in the middle.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* Football */}
            <AnimatedSection>
              <div className="flex flex-col sm:flex-row gap-6 py-8 border-b border-stone-200 dark:border-stone-800/50">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-stone-100 dark:bg-stone-800/80 flex items-center justify-center">
                  <PiSoccerBall className="text-stone-500 text-lg" />
                </div>
                <div className="flex-1">
                  <h4 className="font-mono text-sm tracking-widest text-stone-900 dark:text-stone-300 mb-3 uppercase">
                    Football
                  </h4>
                  <p className="text-base font-sans text-stone-600 dark:text-stone-400 leading-relaxed">
                    I'm a huge football fan-especially the tactical side of
                    things; how teams set up, how a press is structured, and how
                    statistics are increasingly informing the game. I try to put
                    that last part to use in{" "}
                    <span className="font-medium text-stone-900 dark:text-stone-200">
                      FPL
                    </span>
                    , though my table position would suggest I've still got some
                    way to go.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* Cars */}
            <AnimatedSection>
              <div className="flex flex-col sm:flex-row gap-6 py-8">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-stone-100 dark:bg-stone-800/80 flex items-center justify-center">
                  <PiCar className="text-stone-500 text-lg" />
                </div>
                <div className="flex-1">
                  <h4 className="font-mono text-sm tracking-widest text-stone-900 dark:text-stone-300 mb-3 uppercase">
                    Automotive
                  </h4>
                  <p className="text-base font-sans text-stone-600 dark:text-stone-400 leading-relaxed">
                    I have a deep admiration for the automotive world,
                    particularly{" "}
                    <span className="font-medium text-stone-900 dark:text-stone-200">
                      JDM
                    </span>{" "}
                    cars and the engineering philosophy behind
                    late-eighties/early-nineties Japanese performance vehicles.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* Footer Note */}
        <AnimatedSection className="mt-5 text-center lg:text-left">
          <p className="text-base font-sans text-stone-500 dark:text-stone-500 italic">
            If any of this resonates, feel free to reach out; I'm always happy to
            talk!
          </p>
        </AnimatedSection>
        
      </div>
    </section>
  );
};

export default About;