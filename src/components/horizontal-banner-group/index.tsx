import { HorizontalBannerGroupProps } from './horizontal-banner-group.types';
import { BannerStandard } from '..';

export const HorizontalBannerGroup = (props: HorizontalBannerGroupProps) => {
  const { banners, verticalSpace = 10 } = props;

  return (
    <div className={`flex justify-center py-${verticalSpace}`}>
      <div className='flex w-full max-w-[1236px] justify-center gap-4'>
        {banners.map((banner) => (
          <div key={banner.src}>
            <BannerStandard {...banner} />
          </div>
        ))}
      </div>
    </div>
  );
};
