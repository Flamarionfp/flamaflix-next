import { OMDbSearchResponse } from "@/types/omdb";

export const mapOMDbSearchResponse = (response: OMDbSearchResponse) => {
  return {
    totalResults: response.totalResults,
    data: response.Search.map((result) => ({
      title: result.Title,
      year: result.Year,
      imdbID: result.imdbID,
      type: result.Type,
      poster: result.Poster,
    })),
  };
};
