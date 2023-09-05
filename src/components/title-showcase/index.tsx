import { Content } from "./title-showcase";
import { TitleShowcaseProps } from "./title-showcase.types";
import { searchTitles } from "@/services/omdb";

export const TitleShowcase = async (props: TitleShowcaseProps) => {
  const { titleQuery = "", maxResults, ...rest } = props;

  const { data } = await searchTitles(titleQuery, maxResults);

  return <Content titles={data} {...rest} />;
};
