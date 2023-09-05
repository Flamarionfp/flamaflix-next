"use client";
import React from "react";
import Image from "next/image";
import { ContentProps } from "./title-showcase.types";
import { ShowcaseWrapper } from "../showcase-wrapper";
import { SectionTitle } from "..";
import { truncate } from "@/utils/string";

export const Content = async (props: ContentProps) => {
  const {
    titles = [],
    grid = false,
    verticalSpace = 10,
    sectionTitle = "",
  } = props;

  if (!titles.length) return <></>;

  if (grid) {
    return (
      <section className={`flex flex-col items-center py-${verticalSpace}`}>
        <div className=" max-w-[1236px]">
          {sectionTitle && <SectionTitle title={sectionTitle} />}

          <div className="grid grid-cols-3 gap-4">
            {titles.map((item) => (
              <div key={item.imdbID}>
                <Image
                  className="rounded-md max-h-[344px] w-fit"
                  src={item.poster}
                  alt={item.title}
                  quality={100}
                  width={300}
                  height={300}
                />
                <p className="text-left mt-2 font-extralight">
                  {truncate(item.title, 30)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <ShowcaseWrapper {...props}>
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
