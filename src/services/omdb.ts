import { OMDbSearchResponse } from '@/types/omdb';
import { filterSearchData } from '@/utils/filters/search';
import { mapOMDbSearchResponse } from '@/utils/mappers/search';
import { getQueryParams } from '@/utils/url';

export const searchTitles = async (titleQuery: string, maxResults?: number) => {
  const params = {
    apikey: process.env.OMDB_API_KEY,
    s: titleQuery,
  };

  const response = await fetch(
    `${process.env.OMDB_API_HOST}/?${getQueryParams(params)})}`
  );

  const data: OMDbSearchResponse = await response.json();

  if (data?.Response !== 'True') {
    return {
      data: [],
      totalResults: 0,
    };
  }

  const { data: formattedData = [], totalResults } =
    mapOMDbSearchResponse(data);
  const filteredData = filterSearchData(formattedData, maxResults);

  return {
    data: filteredData,
    totalResults,
  };
};
