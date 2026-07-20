import type { FilmPreview, Film } from "./types";

const modules = import.meta.glob("../content/films/*.mdx", { eager: true });
const imageModules = import.meta.glob("../assets/**/*.{png,jpg,jpeg,webp}", {
  eager: true,
  query: "?url",
  import: "default",
});

export function getFilms(): FilmPreview[] {
  return Object.entries(modules)
    .map(([path, mod]: [string, any]) => {
      const slug = path.split("/").pop()!.replace(".mdx", "");
      const posterKey = `../assets/${mod.frontmatter.poster}`;
      const url = `/src/assets${(imageModules[posterKey] as string) ?? mod.frontmatter.poster}`;

      return {
        slug,
        title: mod.frontmatter.title,
        subtitle: mod.frontmatter.subtitle,
        date: mod.frontmatter.date,
        mainImage: { url, alt: mod.frontmatter.title },
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getFilmBySlug(
  slug: string,
): Film & { Component: React.ComponentType } {
  const entry = Object.entries(modules).find(([path]) =>
    path.endsWith(`/${slug}.mdx`),
  );
  if (!entry) throw new Error(`Film not found: ${slug}`);
  const [, mod]: [string, any] = entry;
  const posterKey = `../assets/${mod.frontmatter.poster}`;
  const url = `/src/assets${(imageModules[posterKey] as string) ?? mod.frontmatter.poster}`;

  return {
    slug,
    title: mod.frontmatter.title,
    subtitle: mod.frontmatter.subtitle,
    date: mod.frontmatter.date,
    mainImage: { url, alt: mod.frontmatter.title },
    Component: mod.default,
  };
}
