import { BannerStandard } from '..';
import { VerticalBannerGroupProps } from './vertical-banner-group.types';

export const VerticalBannerGroup = (props: VerticalBannerGroupProps) => {
  const { banners, space = 4 } = props;

  return (
    <section className={`flex flex-col items-center gap-${space}`}>
      {banners.map((banner) => (
        <div key={banner.src} className='flex justify-center'>
          <BannerStandard {...banner} />
        </div>
      ))}
    </section>
  );
};
