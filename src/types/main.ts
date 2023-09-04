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
