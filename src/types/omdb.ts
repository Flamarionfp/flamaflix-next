export interface OMDbSearchResponse {
  totalResults: number;
  Response: "True" | "False";
  Search: {
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
  }[];
}
