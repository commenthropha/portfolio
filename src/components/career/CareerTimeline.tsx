import {
  VerticalTimeline,
  VerticalTimelineElement,
  // @ts-ignore
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useTheme } from "../../ThemeContext";

interface TimelineItem {
  date: string;
  title: string;
  subtitle: string;
  description: string[];
  icon: React.ReactElement;
}

interface CareerTimelineProps {
  items: TimelineItem[];
}

const CareerTimeline = ({ items }: CareerTimelineProps) => {
  const { light } = useTheme();

  const contentStyle = {
    background: light ? "rgb(245 244 243)" : "rgb(28 25 23)",
    border: light
      ? "0.5px solid rgb(214 211 208)"
      : "0.5px solid rgb(68 65 61)",
    boxShadow: "none",
    borderRadius: "4px",
    padding: "20px 24px",
  };

  const arrowStyle = {
    borderRight: light
      ? "7px solid rgb(214 211 208)"
      : "7px solid rgb(68 65 61)",
  };

  const iconStyle = {
    background: light ? "rgb(245 244 243)" : "rgb(28 25 23)",
    border: light
      ? "0.5px solid rgb(214 211 208)"
      : "0.5px solid rgb(68 65 61)",
    boxShadow: "none",
    color: light ? "rgb(120 113 108)" : "rgb(168 162 158)",
  };

  return (
    <VerticalTimeline
      className="overflow-x-hidden"
      lineColor={light ? "rgb(214 211 208)" : "rgb(68 65 61)"}
    >
      {items.map((item, index) => (
        <VerticalTimelineElement
          key={index}
          date={item.date}
          contentStyle={contentStyle}
          contentArrowStyle={arrowStyle}
          iconStyle={iconStyle}
          icon={item.icon}
        >
          <h3 className="font-sans font-bold text-stone-900 dark:text-stone-100 text-lg !m-0">
            {item.title}
          </h3>
          <p className="font-mono !text-sm text-stone-700 dark:text-stone-400 !m-0 !mt-1">
            {item.subtitle}
          </p>
          {item.description.length > 0 && (
            <ul className="!mt-4 !mb-0 flex flex-col gap-2">
              {item.description.map((point, i) => (
                <li key={i} className="flex gap-2 items-start">
                  <span className="font-mono text-stone-500 mt-[3px] text-xs flex-shrink-0">
                    —
                  </span>
                  <span className="font-sans text-sm text-stone-800 dark:text-stone-300 leading-relaxed">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
};

export default CareerTimeline;
