export interface FilmPreview {
  slug: string;
  title: string;
  year: number;
  subtitle: string;
  spoilers: string[];
  date: string;
  mainImage: {
    url: string;
    alt: string;
  };
}

export interface Film extends FilmPreview {}
