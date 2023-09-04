"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ContentProps, TitleShowcaseProps } from "./title-showcase.types";

import "swiper/css";
import "swiper/css/pagination";
import "./showcase-swiper.css";

export const Content = async (props: ContentProps) => {
  const { data = [], sectionTitle = "", slidesPerView = 8.5 } = props;

  if (!data.length) return <></>;

  return (
    <section className="flex justify-center mt-10">
      <div className="max-w-[1236px]">
        {sectionTitle && (
          <h3 className="mb-2 font-bold text-lg">{sectionTitle}</h3>
        )}

        <Swiper
          modules={[Navigation]}
          slidesPerView={slidesPerView}
          spaceBetween={20}
          navigation={true}
          className="mySwiper"
        >
          {data.map((item) => (
            <SwiperSlide key={item.imdbID}>
              <Image
                alt={item.title}
                src={item.poster}
                height={100}
                width={100}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
