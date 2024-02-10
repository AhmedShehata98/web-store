import React from 'react';

const SkeletonVCard = ({ className }: { className?: string }) => {
  return (
    <div className={`w-full dark:bg-dark-primary-200 brightness-150 rounded-lg shadow-lg ${className}`}>
      <span className='w-full h-52 max-md:h-36 flex mb-3 dark:bg-dark-primary-400 rounded-md animate-pulse overflow-hidden'></span>
      <div className='flex flex-col items-start justify-start gap-4 py-4 px-3'>
        <span className='w-3/5 h-4 rounded-lg dark:bg-dark-primary-400 animate-pulse'></span>
        <div className='w-full flex items-center justify-between'>
          <span className='inline-block w-12 h-3 bg-dark-primary-400 animate-pulse'></span>
          <span className='inline-block w-16 h-10 dark:bg-dark-primary-400 rounded-lg animate-pulse'></span>
        </div>
      </div>
    </div>
  );
};

export default SkeletonVCard;
