export interface SearchData {
  title: string;
  year: string;
  imdbID: string;
  type: string;
  poster: string;
}

export interface Search {
  totalResults: number;
  data: SearchData[];
}

export interface ShowcaseProps {
  sectionTitle?: string;
  slidesPerView?: number;
  spaceBetween?: number;
}
