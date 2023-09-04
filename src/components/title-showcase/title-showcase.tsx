"use client";
import React from "react";
import Image from "next/image";
import { SwiperSlide } from "swiper/react";
import { ContentProps } from "./title-showcase.types";
import { ShowcaseWrapper } from "../showcase-wrapper";

export const Content = async (props: ContentProps) => {
  const { titles = [], ...rest } = props;

  if (!titles.length) return <></>;

  return (
    <ShowcaseWrapper {...rest}>
      {titles.map((item) => (
        <SwiperSlide key={item.imdbID}>
          <Image alt={item.title} src={item.poster} height={100} width={100} />
        </SwiperSlide>
      ))}
    </ShowcaseWrapper>
  );
};
