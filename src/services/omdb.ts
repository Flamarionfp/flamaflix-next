import { OMDbSearchResponse } from "@/types/omdb";
import { mapOMDbSearchResponse } from "@/utils/mappers/search";
import { getQueryParams } from "@/utils/url";

export const searchTitles = async (titleQuery: string) => {
  const params = {
    apikey: process.env.OMDB_API_KEY,
    s: titleQuery,
  };

  const response = await fetch(
    `${process.env.OMDB_API_HOST}/?${getQueryParams(params)})}`
  );

  const data: OMDbSearchResponse = await response.json();

  if (data?.Response !== "True") {
    return {
      data: [],
      totalResults: 0,
    };
  }

  const { data: formattedData = [], totalResults } =
    mapOMDbSearchResponse(data);

  return {
    data: formattedData.filter((title) => title?.poster !== "N/A"),
    totalResults,
  };
};
