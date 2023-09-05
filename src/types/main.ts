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

interface StyleProps {
  verticalSpace?: number;
}

export interface ShowcaseProps extends StyleProps {
  sectionTitle?: string;
  slidesPerView?: number;
  spaceBetween?: number;
  maxResults?: number;
  grid?: boolean;
}
