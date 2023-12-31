import { SearchData } from '@/types/main';

export const filterSearchData = (
  data: SearchData[],
  maxResults?: number
): SearchData[] => {
  let filteredData = data.filter((title) => title?.poster !== 'N/A');

  if (maxResults) {
    filteredData = filteredData.slice(0, maxResults);
  }

  return filteredData;
};
