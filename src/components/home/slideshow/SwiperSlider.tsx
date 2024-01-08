import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import React from 'react';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/effect-flip';
import 'swiper/css/mousewheel';
import { A11y, Autoplay, EffectFlip, Mousewheel, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

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
  return (
    <Swiper
      spaceBetween={18}
      slidesPerView={1.6}
      pagination={true}
      mousewheel={true}
      loop={true}
      autoplay={{ delay: 5000, waitForTransition: true }}
      className='w-full h-full flex overflow-y-hidden'
      modules={[Pagination, A11y, Mousewheel, Autoplay, EffectFlip]}
    >
      {isFetched &&
        data.map((slide, idx) => (
          <SwiperSlide key={idx} className='relative overflow-hidden rounded-xl shadow-lg'>
            <Image
              width={250}
              height={250}
              src={slide.image}
              alt={`slide-${idx}`}
              className='w-full max-h-full object-cover object-center overflow-hidden'
            />
            <span className='absolute inset-0 flex items-end justify-start dark:bg-dark-primary-200 dark:bg-opacity-30'>
              <div className='flex flex-col items-start justify-center mx-24 mb-24'>
                <h3 className='max-w-[70%] text-4xl font-semibold mb-3 dark:text-white'>{slide.title}</h3>
                <p className='max-w-[70%] font-medium mb-3 dark:text-slate-300'>{slide.description}</p>
                <Link
                  href={slide.btnLink || '#'}
                  className='flex items-center justify-center gap-2 py-2 px-4 mt-14 rounded-md shadow-xl border-b-2 dark:border-dark-secondary-200 dark:bg-dark-primary-300 dark:bg-opacity-40 dark:backdrop-blur hover:brightness-150'
                >
                  <span className='text-3xl dark:text-white'>
                    <MdOutlineKeyboardArrowRight />
                  </span>
                  <small className='dark:text-white font-medium capitalize leading-3 me-3'>see more</small>
                </Link>
              </div>
            </span>
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default SwiperSlider;
