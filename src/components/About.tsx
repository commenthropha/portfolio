import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { RiComputerLine } from "react-icons/ri";
import {
  PiFilmSlate,
  PiBarbell,
  PiGameController,
  PiCar,
} from "react-icons/pi";

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
          <h6 className="font-mono text-lg text-stone-800 dark:text-stone-500 tracking-widest">
            ABOUT ME
          </h6>
          <div className="text-4xl font-sans font-bold mt-2 mb-10">
            <h1 className="text-stone-900 dark:text-stone-100">Who am I?</h1>
          </div>

          <div className="flex flex-col divide-y divide-stone-200 dark:divide-stone-800">
            {/* Role */}
            <div className="flex gap-5 py-7">
              <div className="flex-shrink-0 w-9 h-9 rounded-full bg-stone-100 dark:bg-stone-800 flex items-center justify-center mt-0.5">
                <RiComputerLine className="text-stone-500 text-sm" />
              </div>
              <div className="flex-1">
                <p className="font-mono text-sm tracking-widest text-stone-600 dark:text-stone-500 mb-2 uppercase">
                  Role
                </p>
                <p className="text-sm lg:text-base font-sans text-stone-800 dark:text-stone-300 leading-relaxed">
                  I am a{" "}
                  <span className="font-bold text-stone-900 dark:text-stone-200">
                    Java software engineer
                  </span>
                  , building production software since 2024. Day-to-day I work
                  in an{" "}
                  <span className="font-bold text-stone-900 dark:text-stone-200">
                    Agile
                  </span>{" "}
                  environment, contributing to EPICs within{" "}
                  <span className="font-bold text-stone-900 dark:text-stone-200">
                    Scrum
                  </span>{" "}
                  teams operating across SAFe ARTs. I believe that an{" "}
                  <span className="font-bold text-stone-900 dark:text-stone-200">
                    architecture-focussed
                  </span>{" "}
                  approach is pivotal in a contemporary engineering landscape;
                  extensible, microservice-based design is paramount for
                  pragmatic software development.
                </p>
              </div>
            </div>

            {/* Interests heading */}
            <div className="py-7">
              <h6 className="font-mono text-lg text-stone-800 dark:text-stone-500 tracking-widest">
                INTERESTS
              </h6>

              <div className="flex flex-col divide-y divide-stone-300 dark:divide-stone-900">
                {/* Film */}
                <div className="flex gap-5 py-6">
                  <div className="flex-shrink-0 w-9 h-9 rounded-full bg-stone-100 dark:bg-stone-800 flex items-center justify-center mt-0.5">
                    <PiFilmSlate className="text-stone-500 text-sm" />
                  </div>
                  <div className="flex-1">
                    <p className="font-mono text-sm tracking-widest text-stone-600 dark:text-stone-500 mb-2 uppercase">
                      Cinema
                    </p>
                    <p className="text-sm lg:text-base font-sans text-stone-800 dark:text-stone-300 leading-relaxed">
                      I'm an avid lover of cinema, across all genres, with a
                      soft spot for{" "}
                      <span className="font-bold text-stone-900 dark:text-stone-200">
                        supernatural horror
                      </span>
                      . I write analysis on the films that interest me most,
                      which you can find{" "}
                      <Link
                        to="/films"
                        className="font-mono font-bold text-stone-900 dark:text-stone-200 underline underline-offset-4 hover:text-stone-500 dark:hover:text-stone-400 transition-colors"
                      >
                        here
                      </Link>
                      .
                    </p>
                  </div>
                </div>

                {/* Lifting */}
                <div className="flex gap-5 py-6">
                  <div className="flex-shrink-0 w-9 h-9 rounded-full bg-stone-100 dark:bg-stone-800 flex items-center justify-center mt-0.5">
                    <PiBarbell className="text-stone-500 text-sm" />
                  </div>
                  <div className="flex-1">
                    <p className="font-mono text-sm tracking-widest text-stone-600 dark:text-stone-500 mb-2 uppercase">
                      Strength Training
                    </p>
                    <p className="text-sm lg:text-base font-sans text-stone-800 dark:text-stone-300 leading-relaxed">
                      I'm drawn to the tension between{" "}
                      <span className="font-bold text-stone-900 dark:text-stone-200">
                        evidence-based methodology
                      </span>{" "}
                      and just training hard. Although online discourse is
                      divisive, I believe that the truth - as usual - sits
                      somewhere in the middle.
                    </p>
                  </div>
                </div>

                {/* Games */}
                <div className="flex gap-5 py-6">
                  <div className="flex-shrink-0 w-9 h-9 rounded-full bg-stone-100 dark:bg-stone-800 flex items-center justify-center mt-0.5">
                    <PiGameController className="text-stone-500 text-sm" />
                  </div>
                  <div className="flex-1">
                    <p className="font-mono text-sm tracking-widest text-stone-600 dark:text-stone-500 mb-2 uppercase">
                      Game Design
                    </p>
                    <p className="text-sm lg:text-base font-sans text-stone-800 dark:text-stone-300 leading-relaxed">
                      Although I don't particularly have the time to play these
                      days, my fascination with{" "}
                      <span className="font-bold text-stone-900 dark:text-stone-200">
                        video game design
                      </span>{" "}
                      hasn't faded; particularly retro games, where developers
                      were forced into creativity through limitation.
                    </p>
                  </div>
                </div>

                {/* Cars */}
                <div className="flex gap-5 py-6">
                  <div className="flex-shrink-0 w-9 h-9 rounded-full bg-stone-100 dark:bg-stone-800 flex items-center justify-center mt-0.5">
                    <PiCar className="text-stone-500 text-sm" />
                  </div>
                  <div className="flex-1">
                    <p className="font-mono text-sm tracking-widest text-stone-600 dark:text-stone-500 mb-2 uppercase">
                      Automotive
                    </p>
                    <p className="text-sm lg:text-base font-sans text-stone-800 dark:text-stone-300 leading-relaxed">
                      I have a deep admiration for the automotive world,
                      particularly{" "}
                      <span className="font-bold text-stone-900 dark:text-stone-200">
                        JDM
                      </span>{" "}
                      cars and the engineering philosophy behind
                      late-eighties/early-nineties Japanese performance
                      vehicles.
                    </p>
                  </div>
                </div>
              </div>

              <p className="mt-6 text-sm font-sans text-stone-500 dark:text-stone-500 italic">
                If any of this resonates, feel free to reach out - I'm always
                happy to talk!
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
