import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { getFilmBySlug } from "../../lib/films";
import { MDXProvider } from "@mdx-js/react";
import {
  Script,
  Scene,
  Action,
  Character,
} from "../../components/films/screenplay";
import { ImageWithCaption, Quote } from "../../components/films";
import { VscTextSize } from "react-icons/vsc";

const fontSizes = ["text-md", "text-xl", "text-2xl", "text-3xl"] as const;
type FontSize = (typeof fontSizes)[number];

const FilmComponent = () => {
  const { title, subtitle, date, mainImage, Component } = Route.useLoaderData();
  const [sizeIndex, setSizeIndex] = useState(0);
  const components = {
    Scene,
    Character,
    Action,
    Script,
    ImageWithCaption,
    Quote,
  };

  return (
    <div className="max-w-[60rem] mx-auto py-16 p-5 sm:p-10">
      <h1 className="text-5xl font-bold mb-2 text-stone-900 dark:text-stone-100">
        {title}
      </h1>
      <h2 className="text-2xl font-bold mb-2 text-stone-700 dark:text-stone-300">
        {subtitle}
      </h2>
      <p className="font-mono font-extrabold text-sm tracking-widest text-stone-500 uppercase mb-10">
        {new Date(date).toLocaleDateString("en-GB", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })}
      </p>
      <div className="flex w-full justify-center">
        <img
          src={mainImage.url}
          alt={mainImage.alt}
          className="w-full rounded-sm mb-8 object-cover max-w-[700px]"
        />
      </div>
      <div className="flex justify-end items-center gap-3 mb-4">
        <VscTextSize className="text-stone-400 dark:text-stone-600 text-base flex-shrink-0" />
        <input
          type="range"
          min={0}
          max={3}
          step={1}
          value={sizeIndex}
          onChange={(e) => setSizeIndex(Number(e.target.value))}
          className="w-24 accent-stone-400"
        />
      </div>
      <div
        className={`prose dark:prose-invert text-stone-800 dark:text-stone-300 max-w-none ${fontSizes[sizeIndex]}`}
      >
        <MDXProvider components={components}>
          <Component />
        </MDXProvider>
      </div>
    </div>
  );
};

export const Route = createFileRoute("/films/$slug")({
  loader: ({ params }) => getFilmBySlug(params.slug),
  component: FilmComponent,
});
