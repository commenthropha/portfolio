import { motion } from "framer-motion";
import Card from "./Card";
import { Project } from "../public";
import { FaPython, FaJava, FaReact } from "react-icons/fa6";
import { SiHaskell, SiTypescript } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { GrGraphQl } from "react-icons/gr";
import { TbBrandNextjs, TbLetterC } from "react-icons/tb";

const data: Array<Project> = [
    { title: "Maze AI", link: null, description: "For one of my university modules, I designed and implemented an AI to navigate a grid-based maze efficiently. Primarily, it functioned by employing a systematic Depth-First-Search for the initial exploration of the maze, followed by using the A* pathfinding algorithm to determine the shortest path to the end. \nCentral to the success of this project was the development of a robust adjacency list graph implementation. This structure was chosen over an adjacency matrix alternative for it's increased time efficiency when traversing all edges (as required by the algorithm). By designing this data and testing it for robustness, I ensured that the AI could process and analyse a range of maze configurations swiftly and efficiently. \nMoreover, this project served as my introduction to the importance of clear and comprehensive documentation in facilitating project understanding, collaboration, and maintainability. Every aspect of the codebase through the use of JavaDocs as well as general comments wherever necessary. This practice was not only pivotal to this project, but it was also something that I carried forward when working on all subsequent major codebases.", icons: [[FaJava, "DD3F14"]]},
    { title: "Warwick+", link: null, description: "For this project, I developed a comprehensive database system from scratch, utilising custom data structures and abstract data type (ADT) implementations. During this process, I employed myriad data structures such as min heaps, linked sets, hashmaps, hashsets, and graphs to cater to different aspects of the system's functionality. These choices were made with careful consideration of the specific use cases and requirements in each instance.\nThroughout the development process, maintaining code integrity was a top priority. To achieve this, I implemented a number of testing protocols, achieving 100% unit test coverage for the implemented data structures. This thorough testing approach confirmed the functionality and reliability of each component, ultimately ensuring the robustness of the overall database system; Test-Driven Development has since become a staple of my development workflow.", icons: [[FaJava, "DD3F14"]]},
    { title: "Connect-K AI", link: null, description: "In this coursework, I undertook the challenge of implementing and evaluating two versions of adversarial search algorithms within the context of the Connect-k game: the minimax algorithm with and without alpha-beta pruning.\nI focused on refining the algorithm's decision-making through the incorporation of efficient heuristics. By designing heuristics that could accurately evaluate the board states and identify more favorable positions, I achieved significant success, evidenced by a 100% win-rate for the standard Connect-4 board even when employing an early cut-off strategy. This highlights the efficacy of the algorithm in navigating the game space and making strategic decisions that lead to more optimal outcomes. \nOne significant enhancement that I introduced to ove the application's efficiency was the integration of multithreading. Recognising the computational demands, particularly with larger board sizes, I leveraged multithreading to parallelise the search process, enabling the algorithm to explore branches simultaneously; this improved the speed of the application significantly. \nFurthermore, to address the issue of redundant computation caused by recurring board states, I implemented a transposition table. By storing previously evaluated states along with their corresponding heuristic values, I optimised the algorithm's performance by avoiding redundant calculations. This not only further streamlined the search process but also conserved computational resources.", icons:[[FaPython, "F2BB30"]]},
    { title: "Giginator", link: null, description: "This was a full-stack project that was initially created using Flask, MySQL and SQLAlchemy for one of my first year modules at university. I decided to migrate the application to a modern stack to get experience with, both, NextJS 13 and Supabase without having to worry about the design process. \nOn the front-end, exploring NextJS 13 showcased its benefits like Server Side Rendering and file-based routing, despite encountering minor issues with features such as server side rendering that were still primitive at the time of development. Supabase, chosen over other solutions, provided free and efficient Postgres hosting and served as an effective BaaS platform for the backend. \nIn terms of my use of TypeScript, I refined utilised in-line type definitions wherever relevant for increased readability. Furthermore, embracing the functional nature of React and ECMAScript, I employed arrow functions and higher-order functions like map extensively, drawing from my Haskell background.", icons: [[SiTypescript, "3178C6"], [FaReact, "61DAFB"], [BiLogoPostgresql, "336791"]]},
    { title: "Press Start", link: "https://github.com/commenthropha/press-start", description: "The project is an exploration of GraphQL as a querying language and a demonstration of a content management system built with ease of use for end-users in mind, as an alternative to platforms like WordPress. While the project could have been applied to any informational site such as a blog, the decision was made to develop a game reviewing site to allow for more creative freedom in visual design and to enhance front-end development skills with TailwindCSS. \nThe use of GraphQL proved advantageous due to its query specificity, eliminating issues of excessive data retrieval and simplifying frontend abstraction. Hygraph served as an efficient content management solution, offering seamless integration with GraphQL APIs for content sourcing. Although limitations may arise in more complex applications requiring relational data, Hygraph with GraphQL remains proficient for straightforward CMS implementations. \nIn terms of enhancing TailwindCSS proficiency, custom properties defined in the tailwind.config.ts file, like color names and fonts, expedited workflow by enabling easy color reference and reuse throughout the project. Future improvements could involve pre-defining a color palette for the website to further streamline CSS development and maintain consistency across the application.", icons: [[SiTypescript, "3178C6"], [TbBrandNextjs, "FFFFFF"], [GrGraphQl, "DE33A6"]]},
    { title: "The Bean's Gambit", link: "https://github.com/commenthropha/the-beans-gambit", description: "The project aims to develop a parser for Bean's Gambit Notation (.bgn) files, verifying their validity and generating a story based on the game moves if the file is valid. The parser distinguishes between correct and incorrect formats, providing detailed feedback on any moves that violate the game's rules. For valid files, the program generates a narrative paragraph for each move, considering factors such as move type, player, and game status. \nUsing Haskell and Megaparsec, the parser breaks down the .bgn files into tuples of player moves, facilitating easy identification of players and move sequences. Throughout development, a focus on separation of concerns and systematic refactoring ensured concise and well-structured code. The project served to deepen understanding of monadic interfaces in Haskell. \nReflection on improvements include refining the handling of invalid file formats. Despite intentional considerations for file format flexibility, ensuring accurate move numbering remains a challenge yet to be fully resolved.", icons:[[SiHaskell, "8F4E8B"]]},
    { title: "CHIP-8 Emulator", link: "https://github.com/commenthropha/chip-8", description: "This project involved the development of a Chip-8 emulator written in C. Chip-8 is an interpreted programming language, originally developed in the mid-1970s, which was designed to make game development easier on 8-bit computers. This emulator allows modern systems to run programs and games that were originally created for the Chip-8 platform. \nThrough this project, I gained a deeper understanding of how low-level systems operate. Emulating the Chip-8 required me to delve into the workings of an interpreter, including memory management, stack operations, and instruction decoding. It also acted as an introduction to the SDL2 library which was used to render the system graphics.\nFurthermore, this project acted as an introduction to writing effective Makefiles in C; I learned how to write Makefiles to automate the compilation and linking of the project, streamline the build process, and manage dependencies effectively.", icons: [[TbLetterC, "214CE5"]]},
    { title: "Robot Arm", link: null, description: "In this project, I successfully programmed a robot arm using C to solve the Towers of Hanoi problem. By adopting an algorithmic approach, I devised strategies to maneuver the robot arm to solve the problem effectively; delving into the hardware specification for the arm was integral to ensuring seamless execution, and a key part of the development process. \nThroughout the project, I adhered to best practices in C programming, learning about pointers, memory management, and data structure manipulation. This not only optimised the performance of the robot arm but also improved my proficiency with the programmming language.", icons: [[TbLetterC, "214CE5"]]},
    { title: "Intrusion Detection System", link: null, description: "This project involved creating an intrusion detection system in C, aimed at identifying malicious packets. The system meticulously effectively parses network packet headers, discerning various states such as SYN attacks, ARP cache Poisoning attacks, and the detection of blacklisted URLs. A key aspect of the project involved the creation of a hash set in C for effective and efficient storage of unique values.\nEnsuring optimal memory management was imperative throughout the project. To achieve this, a concerted effort was made to identify and mitigate memory leaks. Valgrind was as paramount tool for this purpose, utilised extensively to identify and rectify all application leaks and advisories. The process required particular patience and scrutiny to minimise memory consumption and address all issues being flagged by the compiler.", icons:[[TbLetterC, "214CE5"]]}
  ];
  

const Projects = () => {
  return (
    <div
      id="about"
    >
      <div className="lg:rounded-lg bg-[#D69400] py-16 p-5 sm:p-10 md:p-20 max-w-[60rem] mx-auto mb-0 lg:mb-5">
        <motion.div
          initial={{ opacity: 0, scale: 0.75}} 
          transition={{ duration: 0.5, easeOut: true }} 
          whileInView={{ opacity: 1, scale: 1 }} 
          viewport={{ once: true, amount: "all" }} 
        >
          <h6 className="font-mono text-lg md:text-xl my-4 text-[#322763]">
            PROJECTS
          </h6>
          <div
            className="text-4xl text-black font-sans font-bold mt-4 mb-0"
          >
            <h1>Here are some things I've worked on:</h1>
          </div>
        </motion.div>
        <div className="mt-10 grid lg:grid-cols-3 gap-3">
          {data.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.75, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5, easeOut: true }}
              viewport={{ once: true, amount: "some" }} 
            >
              <Card
                  title={project.title}
                  description={project.description}
                  link={project.link}
                  icons={project.icons}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects