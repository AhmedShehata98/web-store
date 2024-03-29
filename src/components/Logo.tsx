import { ROUTES_LIST } from '@/common/routes';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Logo = () => {
  return (
    <Link href={ROUTES_LIST.app} className='flex gap-5 items-center justify-center flex-shrink-0'>
      <Image
        width={25}
        height={25}
        src={'/logo.png'}
        alt='Logo'
        className='w-12 h-12 max-md:w-10 max-md:h-10 bg-dark-secondary-100 rounded-full p-1 shadow-md'
      />
      <p className='text-slate-300 capitalize text-lg font-semibold max-md:text-sm'>web store</p>
    </Link>
  );
};

export default Logo;
