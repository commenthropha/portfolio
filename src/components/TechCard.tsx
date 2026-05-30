import { CardData } from "../public";

const TechCard = ({ title, image }: Pick<CardData, "title" | "image">) => {
  return (
    <div className="fade-in-bottom flex flex-col items-center gap-2 p-3 group">
      <img
        className="h-8 md:h-10"
        src={image}
        alt={title}
      />
      <span className="hidden md:block font-mono text-xs text-stone-600 group-hover:text-stone-950 dark:text-stone-500 dark:group-hover:text-stone-300 transition-colors duration-300">
        {title}
      </span>
    </div>
  );
};

export default TechCard;