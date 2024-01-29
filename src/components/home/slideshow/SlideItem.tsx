import { useAverageColor } from 'hooks';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import { Url } from 'next/dist/shared/lib/router/router';
import Image from 'next/image';
import Link from 'next/link';
import React, { useRef } from 'react';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

type Props = {
  data: {
    title: string;
    image: string | StaticImport;
    description: string;
    btnLink: string | Url;
  };
};
const SlideItem = ({ data: { btnLink, description, image, title } }: Props) => {
  const imageElementRef = useRef<HTMLImageElement | null>(null);
  const { averageColor } = useAverageColor({ imageElement: imageElementRef.current });

  return (
    <>
      <Image
        width={250}
        height={250}
        src={image}
        alt={`slide-${title}`}
        style={{ boxShadow: `1px 3px 16px 9px ${averageColor?.rgba?.replace(')', ' / 50%)')}` }}
        ref={imageElementRef}
        className='w-full max-h-full object-cover object-center rounded-xl overflow-hidden'
      />
      <span className='absolute inset-0 flex items-end max-md:items-start justify-start max-md:pt-6 dark:bg-dark-primary-200 dark:bg-opacity-30 bg-opacity-30'>
        <div className='flex flex-col items-start justify-center max-tablet:mx-8 mx-24 max-tablet:mb-12 mb-24'>
          <h3 className='max-w-[70%] max-tablet:max-w-full max-md:h-9 max-md:overflow-hidden max-md:text-xl max-tablet:text-2xl text-4xl font-semibold mb-3 dark:text-white'>
            {title}
          </h3>
          <p className='max-w-[70%] max-md:max-h-[3.5rem] max-md:h-[3.5rem] max-md:overflow-hidden max-tablet:max-w-full font-medium mb-3 dark:text-slate-300 max-tablet:text-sm'>
            {description}
          </p>
          <Link
            href={btnLink || '#'}
            className='flex items-center justify-center gap-2 py-2 px-4 max-md:mt-4 mt-14 rounded-md shadow-xl border-b-2 dark:border-dark-secondary-200 dark:bg-dark-primary-300 dark:bg-opacity-40 dark:backdrop-blur hover:brightness-150'
          >
            <span className='text-3xl dark:text-white'>
              <MdOutlineKeyboardArrowRight />
            </span>
            <small className='dark:text-white font-medium capitalize leading-3 me-3'>see more</small>
          </Link>
        </div>
      </span>
    </>
  );
};

export default SlideItem;
