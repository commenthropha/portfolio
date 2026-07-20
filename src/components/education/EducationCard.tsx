// components/education/EducationCard.tsx
interface EducationCardProps {
  years: string;
  institution: string;
  qualification: string;
  grades: string[];
  dissertation?: {
    title: string;
    grade: string;
  };
}

const EducationCard = ({
  years,
  institution,
  qualification,
  grades,
  dissertation,
}: EducationCardProps) => (
  <div className="bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 rounded-sm p-6 flex flex-col gap-4">
    <div className="flex items-start justify-between gap-4">
      <div>
        <p className="font-mono text-xs tracking-widest text-stone-500 uppercase mb-1">
          {years}
        </p>
        <h3 className="font-sans font-bold text-stone-900 dark:text-stone-100 text-lg leading-snug">
          {institution}
        </h3>
        <p className="font-mono text-sm text-stone-600 dark:text-stone-400 mt-0.5">
          {qualification}
        </p>
      </div>
    </div>

    <div className="flex flex-wrap gap-2">
      {grades.map((grade, i) => (
        <span
          key={i}
          className="font-mono font-bold text-xs text-stone-600 dark:text-stone-400 border border-stone-300 dark:border-stone-700 px-2 py-0.5 rounded-sm"
        >
          {grade}
        </span>
      ))}
    </div>

    {dissertation && (
      <div className="border-t border-stone-200 dark:border-stone-800 pt-4 flex items-start justify-between items-center gap-4">
        <p className="font-sans font-bold text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          Dissertation Title:{" "}
          <span className="font-normal italic">"{dissertation.title}"</span>
        </p>
        <span className="font-mono font-bold text-xs text-stone-600 dark:text-stone-400 border border-stone-300 dark:border-stone-700 px-2 py-0.5 rounded-sm shrink-0">
          Final Report: {dissertation.grade}
        </span>
      </div>
    )}
  </div>
);

export default EducationCard;
