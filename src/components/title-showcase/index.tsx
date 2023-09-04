import { Content } from "./title-showcase";
import { TitleShowcaseProps } from "./title-showcase.types";
import { searchTitles } from "@/services/search";

export const TitleShowcase = async (props: TitleShowcaseProps) => {
  const { titleQuery = "", ...rest } = props;

  const { data } = await searchTitles(titleQuery);

  return <Content data={data} {...rest} />;
};
