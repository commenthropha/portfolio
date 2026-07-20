// components/education/EducationGrid.tsx
import EducationCard from "./EducationCard";

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

interface EducationGridProps {
  items: EducationItem[];
}

const EducationGrid = ({ items }: EducationGridProps) => (
  <div className="flex flex-col gap-4">
    {items.map((item, i) => (
      <EducationCard key={i} {...item} />
    ))}
  </div>
);

export default EducationGrid;
