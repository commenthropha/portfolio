import { Link } from "@tanstack/react-router";
import { FilmPreview } from "../../lib/types";

const FilmCard = ({ film }: { film: FilmPreview }) => {
  return (
    <Link to="/films/$slug" params={{ slug: film.slug }}>
      <div className="bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 hover:border-stone-400 dark:hover:border-stone-600 hover:bg-stone-200 dark:hover:bg-stone-800 rounded-sm my-3 group transition-colors">
        <div className="flex justify-start h-full">
          <div className="relative w-[8rem] sm:w-[12rem] shrink-0 overflow-hidden">
            <img
              src={film.mainImage.url}
              alt={film.mainImage.alt ?? film.title}
              className="w-full h-full object-cover rounded-sm group-hover:scale-105 transition-transform duration-300"
            />
          </div>

          <div className="m-5 lg:m-7 flex flex-col justify-between min-w-0">
            <div>
              <p className="font-mono text-xs font-extrabold tracking-widest text-stone-500 uppercase mb-2">
                {new Date(film.date).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </p>
              <h3 className="text-base md:text-lg xl:text-xl font-sans font-bold text-stone-900 dark:text-stone-100 group-hover:text-stone-600 dark:group-hover:text-stone-300 transition-colors">
                {film.title}
              </h3>
              <p className="text-xs text-stone-600 dark:text-stone-400 mt-1">
                {film.subtitle}
              </p>
            </div>
            <p className="font-mono text-xs tracking-widest text-stone-400 dark:text-stone-600 group-hover:text-stone-600 dark:group-hover:text-stone-400 uppercase mt-8 transition-colors">
              Read Essay →
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default FilmCard;
