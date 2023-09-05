import { SearchData, ShowcaseProps } from '@/types/main';

export interface TitleShowcaseProps extends ShowcaseProps {
  titleQuery: string;
}

export interface ContentProps extends ShowcaseProps {
  titles: SearchData[];
}
