import Image from 'next/image';
import React from 'react';
import { CgSpinner } from 'react-icons/cg';

const LoadingScreen = () => {
  return (
    <div className='fixed z-50 inset-0 h-dvh flex flex-col items-center justify-center gap-32 dark:bg-dark-primary-100'>
      <span className='max-md:w-3/4 w-1/3 flex flex-col items-center justify-center mt-16'>
        <figure className='w-36 h-36 px-6 py-5 dark:bg-dark-secondary-100 rounded-full drop-shadow-lg'>
          <Image
            src={'/logo-128.png'}
            alt='logo'
            width={128}
            height={128}
            style={{ backdropFilter: '' }}
            className='w-full object-cover object-center drop-shadow-lg'
          />
        </figure>
      </span>
      <span className='w-full flex items-center justify-center'>
        <span className='text-6xl max-md:text-4xl dark:text-gray-200 animate-spin drop-shadow-lg'>
          <CgSpinner />
        </span>
      </span>
    </div>
  );
};

export default LoadingScreen;
