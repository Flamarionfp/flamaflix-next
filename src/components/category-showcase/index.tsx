'use client';
import Image from 'next/image';
import { ShowcaseWrapper } from '../showcase-wrapper';
import { CategoryShowcaseProps } from './category-showcase.types';

export const CategoryShowcase = (props: CategoryShowcaseProps) => {
  const { folder, slidesPerView = 6.5 } = props;

  const categories: string[] = new Array(10).fill(
    `/images/${folder}/${folder}.webp`
  );

  return (
    <ShowcaseWrapper slidesPerView={slidesPerView} {...props}>
      {categories.map((image) => (
        <Image
          key={image}
          alt='Imagem da categoria'
          src={image}
          height={170}
          width={170}
        />
      ))}
    </ShowcaseWrapper>
  );
};
