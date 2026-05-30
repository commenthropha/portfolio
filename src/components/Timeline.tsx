import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
  //@ts-ignore
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useTheme } from "../ThemeContext";
import { RiComputerLine } from "react-icons/ri";

const timelineData = [
  {
    date: "July 2024 — October 2025",
    title: "Student Software Engineer",
    subtitle: "Siemens · Full-Time",
    description: [
      "Led an automation intermittency project that reduced intermittencies by ~200%.",
      "Worked on large-scale refactoring efforts, building a strong understanding of class hierarchy and object-oriented best practices at scale.",
      "Took ownership of EPICs toward the end of the placement, contributing significantly to released software.",
      "Gained experience across the full delivery lifecycle including design, development, automated testing, and CI with Jenkins.",
    ],
  },
  {
    date: "October 2025 — July 2026",
    title: "Student Software Engineer",
    subtitle: "Siemens · Part-Time",
    description: [
      "Continued at Siemens part-time alongside final year studies.",
      "Completed a dissertation in collaboration with Siemens, developing a web-based electrical variant management platform using NextJS and React.",
      "Applied modern web development practices to a real industry problem, bridging the gap between contemporary frontend interfaces and service-based architectures.",
    ],
  },
  {
    date: "July 2026 — Present",
    title: "Software Engineer",
    subtitle: "Siemens · Full-Time",
    description: [
      "Transitioned to a full-time role, focussing on extensible microservice-based architecture and modern web-service integrations.",
      "Working toward architecting software at scale and mentoring the next generation of engineers.",
    ],
  },
];

const reversedTimelineData = [...timelineData].reverse();

const Timeline = () => {
  const { light } = useTheme();

  const contentStyle = {
    background: light ? "rgb(245 244 243)" : "rgb(28 25 23)",
    border: light ? "0.5px solid rgb(214 211 208)" : "0.5px solid rgb(68 65 61)",
    boxShadow: "none",
    borderRadius: "12px",
    padding: "20px 24px",
  };

  const arrowStyle = {
    borderRight: light ? "7px solid rgb(214 211 208)" : "7px solid rgb(68 65 61)",
  };

  const iconStyle = {
    background: light ? "rgb(245 244 243)" : "rgb(28 25 23)",
    border: light ? "0.5px solid rgb(214 211 208)" : "0.5px solid rgb(68 65 61)",
    boxShadow: "none",
    color: light ? "rgb(120 113 108)" : "rgb(168 162 158)",
  };

  return (
    <div id="timeline" className="max-w-[60rem] mx-auto py-16 p-5 sm:p-10 !pb-0">
      <motion.div
        initial={{ opacity: 0, scale: 0.75 }}
        transition={{ duration: 0.5, easeOut: true }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.1 }}
      >
        <h6 className="font-mono text-lg my-4 text-stone-500 tracking-widest">
          EXPERIENCE
        </h6>
        <div className="text-4xl font-sans font-bold mt-2 mb-5">
          <h1 className="text-stone-900 dark:text-stone-100">Career Timeline</h1>
        </div>
      </motion.div>

    <hr className="border-t-4 border-stone-300 dark:border-stone-700" />
    <VerticalTimeline className="overflow-x-hidden" lineColor={light ? "rgb(214 211 208)" : "rgb(68 65 61)"}>
        {reversedTimelineData.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            date={item.date}
            contentStyle={contentStyle}
            contentArrowStyle={arrowStyle}
            iconStyle={iconStyle}
            icon = { <RiComputerLine /> }
          >
            <h3 className="font-sans font-bold text-stone-900 dark:text-stone-100 text-lg !m-0">
              {item.title}
            </h3>
            <p className="font-mono text-sm text-stone-500 !m-0 !mt-1">
              {item.subtitle}
            </p>
            <ul className="!mt-4 !mb-0 flex flex-col gap-2">
            {item.description.map((point, i) => (
                <li key={i} className="flex gap-2 items-start">
                <span className="font-mono text-stone-500 mt-[3px] text-xs flex-shrink-0">—</span>
                <span className="font-sans text-sm text-stone-700 dark:text-stone-400 leading-relaxed">
                    {point}
                </span>
                </li>
            ))}
            </ul>          
        </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default Timeline;