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
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="mb-16 text-center lg:text-left"
        >
          <h2 className="text-4xl lg:text-5xl font-sans font-bold tracking-tight text-stone-900 dark:text-stone-100">
            Films.
          </h2>
          <p className="font-mono text-sm tracking-widest text-stone-500 mt-4 uppercase">
            What I've been watching
          </p>
        </motion.div>


      <div className="flex flex-col">
        {films.map((film, i) => (
          <motion.div
            key={film.slug}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, easeOut: true }}
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
