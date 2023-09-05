import Image from "next/image";
import { HorizontalBannerGroupProps } from "./horizontal-banner-group.types";
import { BannerStandard } from "..";

export const HorizontalBannerGroup = (props: HorizontalBannerGroupProps) => {
  const { banners, verticalSpace = 10 } = props;

  return (
    <div className={`flex justify-center py-${verticalSpace}`}>
      <div className="flex justify-center gap-4 w-full max-w-[1236px]">
        {banners.map((banner) => (
          <div key={banner.src}>
            <BannerStandard {...banner} />
          </div>
        ))}
      </div>
    </div>
  );
};
