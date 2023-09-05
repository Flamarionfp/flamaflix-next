import Image from 'next/image';
import { BannerStandardProps } from './banner-standard.types';

export const BannerStandard = (props: BannerStandardProps) => {
  const { src, alt } = props;

  return (
    <Image
      unoptimized
      className='h-[16rem] w-full max-w-[822px]'
      src={src}
      alt={alt}
      height={270}
      width={100}
    />
  );
};
