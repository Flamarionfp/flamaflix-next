"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Keyboard, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export const BannerCarrousel = () => {
  const banners = new Array(3)
    .fill(null)
    .map((_, index) => `/banners/main/banner${index + 1}.jpg`);

  return (
    <section>
      <Swiper
        modules={[Pagination, Navigation, Keyboard, Autoplay]}
        spaceBetween={30}
        className="mySwiper"
        navigation={true}
        keyboard={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
      >
        {banners.map((banner) => (
          <SwiperSlide key={banner}>
            <Image
              className="w-full max-h-[85vh]"
              width={1236}
              height={300}
              alt="Banner"
              src={banner}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
