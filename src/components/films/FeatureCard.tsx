import { Link } from "@tanstack/react-router";
import { FilmPreview } from "../../lib/types";

const FeatureCard = ({ film }: { film: FilmPreview }) => {
  return (
    <Link to="/films/$slug" params={{ slug: film.slug }}>
      <div className="bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 hover:border-stone-400 dark:hover:border-stone-600 hover:bg-stone-200 dark:hover:bg-stone-800 rounded-sm mb-3 group transition-colors">
        <div className="flex flex-row-reverse justify-between h-full">
          <div className="relative w-[10rem] sm:w-[16rem] md:w-[24rem] shrink-0 overflow-hidden">
            <img
              src={film.mainImage.url}
              alt={film.mainImage.alt ?? film.title}
              className="w-full h-full object-cover rounded-sm group-hover:scale-105 transition-transform duration-300"
            />
          </div>

          <div className="m-6 lg:m-10 flex flex-col justify-between min-w-0">
            <div>
              <p className="font-mono font-extrabold text-xs tracking-widest text-stone-500 uppercase mb-2">
                {new Date(film.date).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </p>
              <div className="flex items-baseline gap-2 flex-wrap">
                <h3 className="text-2xl md:text-3xl xl:text-4xl font-sans font-bold text-stone-900 dark:text-stone-100 group-hover:text-stone-600 dark:group-hover:text-stone-300 transition-colors">
                  {film.title}
                </h3>

                <span className="text-lg md:text-xl xl:text-2xl font-medium text-stone-500 dark:text-stone-400">
                  ({film.year})
                </span>
              </div>
              <p className="text-sm text-stone-600 dark:text-stone-400 mt-2">
                {film.subtitle}
              </p>
            </div>
            <p className="font-mono text-xs tracking-widest text-stone-400 dark:text-stone-600 group-hover:text-stone-600 dark:group-hover:text-stone-400 uppercase mt-16 transition-colors">
              Read Essay →
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default FeatureCard;
