export interface FilmPreview {
  slug: string;
  title: string;
  subtitle: string;
  date: string;
  mainImage: {
    url: string;
    alt: string;
  };
}

export interface Film extends FilmPreview {}
