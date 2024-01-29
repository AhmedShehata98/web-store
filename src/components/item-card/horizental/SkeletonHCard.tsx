import React from 'react';

const SkeletonHCard = () => {
  return (
    <div
      className={`w-full flex items-start justify-start gap-8 px-5 py-7 max-md:px-3 max-md:py-5 dark:bg-dark-primary-200 brightness-150 rounded-md shadow-lg transition-transform duration-500`}
    >
      <span className='flex items-center justify-center w-28 max-md:w-16 dark:bg-dark-primary-400 aspect-square overflow-hidden rounded-md'></span>
      <div className='flex-1 flex flex-col gap-4 overflow-x-hidden'>
        <span className='w-3/5 h-8 dark:bg-dark-primary-400 animate-pulse rounded-md mt-4'></span>
        <span className='w-full max-w-full max-md:gap-2 overflow-x-hidden flex items-center justify-start gap-4'>
          <p className='w-8 h-4 dark:bg-dark-primary-400 animate-pulse rounded-md'></p>
          <p className='w-28 h-4 dark:bg-dark-primary-400 animate-pulse rounded-md'></p>
        </span>
      </div>
      <span className='w-20 h-12 dark:bg-dark-primary-400 animate-pulse rounded-full self-end'></span>
    </div>
  );
};

export default SkeletonHCard;
