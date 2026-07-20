import { createFileRoute } from "@tanstack/react-router";
import { getFilms } from "../../lib/films";
import { FeatureCard, FilmCard } from "../../components/films";
import type { FilmPreview } from "../../lib/types";
import { motion } from "framer-motion";

const FilmsComponent = () => {
  const films: FilmPreview[] = Route.useLoaderData();

  return (
    <div className="max-w-[60rem] mx-auto py-16 p-5 sm:p-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.75 }}
        transition={{ duration: 0.5, easeOut: true }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.1 }}
      >
        <h6 className="font-mono text-lg text-stone-500 tracking-widest">
          FILM REVIEWS
        </h6>
        <h1 className="text-4xl font-sans font-bold mt-2 mb-10 text-stone-900 dark:text-stone-100">
          What I've been watching
        </h1>
      </motion.div>

      <div className="flex flex-col">
        {films.map((film, i) => (
          <motion.div
            key={film.slug}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.08, easeOut: true }}
            viewport={{ once: true, amount: 0.1 }}
          >
            {i === 0 ? <FeatureCard film={film} /> : <FilmCard film={film} />}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export const Route = createFileRoute("/films/")({
  loader: () => getFilms(),
  component: FilmsComponent,
});
