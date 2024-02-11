import React, { HTMLAttributes } from 'react';

type Props = HTMLAttributes<HTMLDivElement> & {
  elementClassName?: string;
};
const SkeletonReviewItem = ({ className, elementClassName }: Props) => {
  return (
    <div className={`w-full flex flex-col items-start bg-dark-primary-200 justify-start p-4 ${className}`}>
      <span
        className={`inline-block h-4 w-1/3 mb-5 bg-dark-primary-100 rounded-md animate-pulse ${elementClassName}`}
      ></span>
      <span
        className={`inline-block h-6 w-3/4 rounded-lg mb-3 bg-dark-primary-100 animate-pulse ${elementClassName}`}
      ></span>
      <div className='flex items-center justify-center gap-5'>
        <span
          className={`inline-block h-4 w-3/6 rounded-md bg-dark-primary-100 animate-pulse ${elementClassName}`}
        ></span>
        <span
          className={`inline-block h-4 w-44 rounded-md bg-dark-primary-100 animate-pulse ${elementClassName}`}
        ></span>
      </div>
    </div>
  );
};

export default SkeletonReviewItem;
