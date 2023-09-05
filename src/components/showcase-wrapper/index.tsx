'use client';
import React, { Children } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import './showcase-swiper.css';
import { ShowcaseWrapperProps } from './showcase-wrapper.types';

export const ShowcaseWrapper = (props: ShowcaseWrapperProps) => {
  const {
    sectionTitle = '',
    slidesPerView = 8.5,
    spaceBetween = 20,
    verticalSpace = 10,
    children,
  } = props;

  const slides = Children.toArray(children);

  return (
    <section className={`flex justify-center py-${verticalSpace}`}>
      <div className='max-w-[1236px]'>
        {sectionTitle && (
          <h3 className='mb-2 text-lg font-bold'>{sectionTitle}</h3>
        )}

        <Swiper
          modules={[Navigation]}
          slidesPerView={slidesPerView}
          spaceBetween={spaceBetween}
          navigation={true}
          style={{
            width: '100%',
            height: 'fit-content',
          }}
        >
          {Children.map(slides, (slide) => (
            <SwiperSlide>{slide}</SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
