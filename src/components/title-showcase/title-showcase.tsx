"use client";
import React from "react";
import Image from "next/image";
import { ContentProps } from "./title-showcase.types";
import { ShowcaseWrapper } from "../showcase-wrapper";

export const Content = async (props: ContentProps) => {
  const { titles = [], ...rest } = props;

  if (!titles.length) return <></>;

  return (
    <ShowcaseWrapper {...rest}>
      {titles.map((item) => (
        <Image
          key={item.imdbID}
          alt={item.title}
          src={item.poster}
          height={100}
          width={100}
        />
      ))}
    </ShowcaseWrapper>
  );
};
