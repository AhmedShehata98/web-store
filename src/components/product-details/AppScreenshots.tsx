'use client';
import Image from 'next/image';
import React from 'react';
import { A11y, Autoplay, EffectFlip, Mousewheel, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useMediaQuery } from 'usehooks-ts';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/effect-flip';
import 'swiper/css/mousewheel';
import { MdKeyboardArrowRight } from 'react-icons/md';

type Props = {
  imagesList: Array<{
    _id: string;
    url: string;
    width: number;
    height: number;
  }>;
  isLoading: boolean;
};
const AppScreenshots = ({ imagesList, isLoading }: Props) => {
  const isMatchMedium = useMediaQuery('(max-width:576px)');

  return (
    <div className='w-full flex flex-col items-start rounded-lg mb-5 dark:bg-dark-primary-200 shadow-lg dark:brightness-150 divide-y dark:divide-slate-600'>
      <span className='w-full flex items-center justify-between gap-4 py-4 px-6'>
        <h3 className='capitalize dark:text-white text-xl font-medium m-0'>screenshots</h3>
        <button type='button' className='flex items-center justify-end text-4xl text-white w-28 group'>
          <span className='group-hover:translate-x-3 transition-transform'>
            <MdKeyboardArrowRight />
          </span>
        </button>
      </span>
      <div className='w-full h-[525px] max-md:h-[250px] p-5'>
        {isLoading && (
          <>
            <span className='inline-block w-3/4 max-md:w-full h-full dark:bg-dark-primary-400 animate-pulse me-4'></span>
            <span className='inline-block w-1/4 max-md:w-full h-full dark:bg-dark-primary-400 animate-pulse'></span>
          </>
        )}
        {!isLoading && (
          <Swiper
            spaceBetween={18}
            slidesPerView={isMatchMedium ? 1 : 1.1}
            pagination={true}
            mousewheel={true}
            loop={true}
            className='relative w-full h-full py-3'
            modules={[Pagination, A11y, Mousewheel, Autoplay, EffectFlip]}
          >
            {imagesList &&
              imagesList.map((image, idx) => (
                <SwiperSlide key={image._id} className='w-full rounded-lg shadow-md overflow-hidden'>
                  <Image
                    width={image.width}
                    height={image.height}
                    src={image.url}
                    alt={`slide-${idx}`}
                    className='w-full h-full object-cover object-center'
                  />
                </SwiperSlide>
              ))}
          </Swiper>
        )}
      </div>
    </div>
  );
};

export default AppScreenshots;
