'use client';
import clsx from 'clsx';
import React, { useState } from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';

type Props = {
  description: string;
};
const AppDescription = ({ description }: Props) => {
  const [isShownMoreText, setIsShownMoreText] = useState(false);
  return (
    <div className='w-full flex flex-col items-start rounded-lg mb-5 dark:bg-dark-primary-200 shadow-lg dark:brightness-150 divide-y dark:divide-slate-600'>
      <span className='w-full flex items-center justify-between gap-4 py-4 px-6'>
        <h3 className='capitalize dark:text-white text-xl font-medium m-0'>description</h3>
      </span>
      <span className='flex flex-col gap-4 p-4'>
        <p
          className={`text-lg dark:text-white overflow-hidden transition-height ${clsx({ 'h-24': !isShownMoreText })}`}
        >
          {description}
        </p>
        <button
          type='button'
          onClick={() => setIsShownMoreText((prev) => !prev)}
          className='text-dark-secondary-200 underline text-lg capitalize text-start'
        >
          {isShownMoreText ? 'show less' : 'show more'}
        </button>
      </span>
    </div>
  );
};

export default AppDescription;
