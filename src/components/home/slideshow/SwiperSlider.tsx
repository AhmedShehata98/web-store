'use client';

import { StaticImageData } from 'next/image';
import React from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/effect-flip';
import 'swiper/css/mousewheel';
import { A11y, Autoplay, EffectFlip, Mousewheel, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useMediaQuery } from 'usehooks-ts';
import SlideItem from './SlideItem';

type Props = {
  data: {
    id: string;
    image: string | StaticImageData;
    title: string;
    description: string;
    btnLink: string;
  }[];
  isLoading: boolean;
  isFetched: boolean;
};
const SwiperSlider = ({ data, isFetched }: Props) => {
  const isMatchMedium = useMediaQuery('(max-width:576px)');

  return (
    <Swiper
      spaceBetween={8}
      slidesPerView={isMatchMedium ? 1 : 1.6}
      pagination={true}
      mousewheel={true}
      loop={true}
      autoplay={{ delay: 5000, waitForTransition: true }}
      className='w-full h-full flex overflow-y-hidden'
      modules={[Pagination, A11y, Mousewheel, Autoplay, EffectFlip]}
    >
      {isFetched &&
        data.map((slide, idx) => (
          <SwiperSlide className='relative rounded-xl shadow-lg px-4 py-2'>
            <SlideItem
              key={idx}
              data={{
                ...slide,
              }}
            />
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default SwiperSlider;
