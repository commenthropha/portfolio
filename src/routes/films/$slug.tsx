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

const SpoilerBanner = ({ spoilers }: { spoilers?: string[] }) => {
  if (!spoilers?.length) return null;

  return (
    <div className="w-full bg-amber-50 dark:bg-amber-950 border border-amber-300 dark:border-amber-700 rounded-sm px-4 py-3 mb-8 flex items-start gap-3">
      <span className="text-amber-500 dark:text-amber-400 font-bold text-lg leading-tight select-none">
        !
      </span>

      <div className="text-amber-800 dark:text-amber-200 text-sm leading-snug">
        <span className="font-semibold">Spoilers:</span>{" "}
        {spoilers.length === 1 ? (
          <>
            This piece contains spoilers for{" "}
            <span className="italic">{spoilers[0]}</span>
          </>
        ) : (
          <>
            This piece contains spoilers for:
            <ul className="mt-2 list-disc list-inside">
              {spoilers.map((movie) => (
                <li key={movie} className="italic">
                  {movie}
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

const FilmComponent = () => {
  const { title, subtitle, year, date, mainImage, spoilers, Component } =
    Route.useLoaderData();
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
      <div className="flex items-center">
        <h1 className="text-5xl font-bold mb-2 text-stone-900 dark:text-stone-100">
          {title}
        </h1>
        <h3 className="ml-2 text-3xl">
          ({year})
        </h3>
      </div>
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
      <SpoilerBanner spoilers={spoilers} />
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
