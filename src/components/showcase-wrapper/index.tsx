"use client";
import React, { Children } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "./showcase-swiper.css";
import { ShowcaseWrapperProps } from "./showcase-wrapper.types";

export const ShowcaseWrapper = (props: ShowcaseWrapperProps) => {
  const {
    sectionTitle = "",
    slidesPerView = 8.5,
    spaceBetween = 20,
    children,
  } = props;

  const slides = Children.toArray(children);

  return (
    <section className="flex justify-center">
      <div className="max-w-[1236px]">
        {sectionTitle && (
          <h3 className="mb-2 font-bold text-lg">{sectionTitle}</h3>
        )}

        <Swiper
          modules={[Navigation]}
          slidesPerView={slidesPerView}
          spaceBetween={spaceBetween}
          navigation={true}
          className="mySwiper"
        >
          {Children.map(slides, (slide) => (
            <SwiperSlide>{slide}</SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
