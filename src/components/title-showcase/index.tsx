import { Content } from "./title-showcase";
import { TitleShowcaseProps } from "./title-showcase.types";
import { searchTitles } from "@/services/omdb";

export const TitleShowcase = async (props: TitleShowcaseProps) => {
  const { titleQuery = "", ...rest } = props;

  const { data } = await searchTitles(titleQuery);

  return <Content titles={data} {...rest} />;
};
