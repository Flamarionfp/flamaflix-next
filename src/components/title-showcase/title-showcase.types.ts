import { SearchData } from "@/types/main";

interface CommonProps {
  sectionTitle?: string;
  slidesPerView?: number;
}

export interface TitleShowcaseProps extends CommonProps {
  titleQuery: string;
}

export interface ContentProps extends CommonProps {
  data: SearchData[];
}
