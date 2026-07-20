import { createFileRoute } from "@tanstack/react-router";
import { RiComputerLine } from "react-icons/ri";
import {
  CareerSection,
  CareerTimeline,
  TechStack,
} from "../../components/career";
import { EducationGrid } from "../../components/education";

const workData = [
  {
    date: "July 2026 — Present",
    title: "Software Engineer",
    subtitle: "Siemens · Full-Time",
    description: [
      "Transitioned to a full-time role, focussing on extensible microservice-based architecture and modern web-service integrations.",
      "Working toward architecting software at scale and mentoring the next generation of engineers.",
    ],
    icon: <RiComputerLine />,
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
    icon: <RiComputerLine />,
  },
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
    icon: <RiComputerLine />,
  },
];

interface EducationItem {
  years: string;
  institution: string;
  qualification: string;
  grades: string[];
  dissertation?: {
    title: string;
    grade: string;
  };
}

const educationData: EducationItem[] = [
  {
    years: "2022 - 2026",
    institution: "University of Warwick",
    qualification: "BSc Computer Science (With Intercalated Year)",
    grades: ["First Class (With Honours)"],
    dissertation: {
      title:
        "Development of a Web-Based Variant Management Platform for Electrical Systems",
      grade: "87%",
    },
  },
  {
    years: "2020 - 2022",
    institution: "King Edward VI Aston Grammar School",
    qualification: "A-Levels",
    grades: ["Mathematics: A*", "Computer Science: A*", "Physics: A"],
  },
  {
    years: "2015 - 2020",
    institution: "King Edward VI Aston Grammar School",
    qualification: "GCSEs",
    grades: [
      "English Language: 9",
      "English Literature: 9",
      "Maths: 9",
      "Physics: 9",
      "Biology: 9",
      "History: 9",
      "Religious Studies: 9",
      "Chemistry: 8",
      "German: 8",
      "Photography: 8",
      "Computer Science: 8",
    ],
  },
];

const Career = () => (
  <div className="max-w-[60rem] mx-auto py-16 p-5 sm:p-10">
    <TechStack />

    <CareerSection eyebrow="CAREER" heading="Experience" className="mt-16" />
    <hr className="border-t-4 border-stone-300 dark:border-stone-700" />
    <CareerTimeline items={workData} />

    <CareerSection
      eyebrow="EDUCATION"
      heading="Academic Background"
      className="mt-16"
    />
    <EducationGrid items={educationData} />
  </div>
);

export const Route = createFileRoute("/career/")({
  component: Career,
});

export default Career;
