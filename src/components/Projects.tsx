import styles from "./styles/Projects.module.css";
import { motion } from "framer-motion";
import Card from "./Card";
import { Project } from "../public";
import { FaPython, FaJava, FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa6";
import { SiHaskell, SiTypescript } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { TbBrandNextjs, TbLetterC } from "react-icons/tb";

const data: Array<Project> = [
    { title: "Maze AI", link: null, description: "For one of my university modules, I designed and implemented an AI to navigate a grid-based maze efficiently. Primarily, it functioned by employing a systematic Depth-First-Search for the initial exploration of the maze, followed by using the A* pathfinding algorithm to determine the shortest path to the end. \nCentral to the success of this project was the development of a robust adjacency list graph implementation. This structure was chosen over an adjacency matrix alternative for it's increased time efficiency when traversing all edges (as required by the algorithm). By designing this data and testing it for robustness, I ensured that the AI could process and analyse a range of maze configurations swiftly and efficiently. \nMoreover, this project served as my introduction to the importance of clear and comprehensive documentation in facilitating project understanding, collaboration, and maintainability. Every aspect of the codebase through the use of JavaDocs as well as general comments wherever necessary. This practice was not only pivotal to this project, but it was also something that I carried forward when working on all subsequent major codebases.", icons: [[FaJava, "DD3F14"]]},
    { title: "Robot Arm", link: null, description: "", icons: [[TbLetterC, "214CE5"]]},
    { title: "Warwick+", link: null, description: "For this project, I developed a comprehensive database system from scratch, utilising custom data structures and abstract data type (ADT) implementations. During this process, I employed myriad data structures such as min heaps, linked sets, hashmaps, hashsets, and graphs to cater to different aspects of the system's functionality. These choices were made with careful consideration of the specific use cases and requirements in each instance.\nThroughout the development process, maintaining code integrity was a top priority. To achieve this, I implemented a number of testing protocols, achieving 100% unit test coverage for the implemented data structures. This thorough testing approach confirmed the functionality and reliability of each component, ultimately ensuring the robustness of the overall database system; Test-Driven Development has since become a staple of my development workflow.", icons: [[FaJava, "DD3F14"]]},
    { title: "Giginator", link: "https://github.com/commenthropha/giginator", description: "Test", icons: [[FaHtml5, "E44D26"], [FaCss3Alt, "214CE5"], [FaReact, "61DAFB"], [SiTypescript, "3178C6"], [BiLogoPostgresql, "336791"]]},
    { title: "Press Start", link: null, description: "Test", icons: [[FaHtml5, "E44D26"], [FaCss3Alt, "214CE5"], [TbBrandNextjs, "#FFFFFF"], [SiTypescript, "3178C6"], [BiLogoPostgresql, "336791"]]},
    { title: "The Bean's Gambit", link: null, description: "Test", icons:[[SiHaskell, "8F4E8B"]]},
    { title: "Connect-K AI", link: null, description: "Test", icons:[[FaPython, "F2BB30"]]},
    { title: "Intrusion Detection System", link: null, description: "Test", icons:[[TbLetterC, "214CE5"]]},
  ];
  

const Projects = () => {
  return (
    <div
      id="about"
      className={`${styles.gradient}`}
    >
      <div className="py-16 p-5 sm:p-10 md:p-20 max-w-[100rem] mx-auto">
        <h6 className="font-mono text-lg md:text-xl my-4 text-[#fcba03]">
          PROJECTS
        </h6>
        <div
          className="text-4xl lg:text-5xl font-sans font-bold mt-4 mb-0 md:mt-6 lg:mt-8"
        >
          <h1>Here are some things I've worked on</h1>
        </div>
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-10 grid md:grid-cols-2 xl:grid-cols-4 gap-3"
          transition={{
              delay: 1,
          }}
      >
          {data.map((project) => (
              <Card
                  title={project.title}
                  description={project.description}
                  link={project.link}
                  icons={project.icons}
              />
          ))}
      </motion.main>
      </div>
    </div>
  );
};

export default Projects