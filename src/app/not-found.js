import Link from 'next/link';
import React from 'react';

const NotFound = () => {
  return (
    <section className='w-full max-w-full h-screen ms-24 max-tablet:ms-0 max-tablet:px-4 px-2 py-4 flex items-center justify-center flex-col gap-2'>
      <h2 className='mb-1 capitalize text-3xl text-red-400'>not found</h2>
      <p className='text-slate-300 mb-4'> this page is not available or wrong page url </p>
      <figure className='w-72 h-72 flex items-center justify-center dark:bg-dark-secondary-100 dark:bg-opacity-75 rounded-full shadow-md p-12'>
        <img src='/error-404.png' alt='error-404.png' className='w-full object-cover object-center backdrop-blur-md' />
      </figure>
      <Link href={'/'} className='px-5 py-2 rounded-md bg-slate-100 font-medium text-lg capitalize mt-12'>
        <p>return to home</p>
      </Link>
    </section>
  );
};

export default NotFound;
