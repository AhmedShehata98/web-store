'use client';
import React, { useState } from 'react';
import VItemCard from '../item-card/vertical/VItemCard';
import { PAID_APP_LIST } from 'local-constants';
import Link from 'next/link';

const OtherApps = () => {
  const [appsList] = useState(PAID_APP_LIST);

  return (
    <div className='w-full max-w-full flex flex-col pe-5 mb-4'>
      <span className='w-full flex items-center justify-between'>
        <h3 className='py-7 px-3 dark:text-white text-xl font-semibold capitalize'>more apps for you</h3>
        <Link href={'#'} className='text-sky-600 font-semibold'>
          see more
        </Link>
      </span>
      <ul className='w-full flex items-center justify-start gap-6 overflow-x-auto'>
        {appsList.map((app) => (
          <VItemCard key={app.id} item={{ ...app }} className='shrink-0 basis-1/4' />
        ))}
        {appsList.map((app) => (
          <VItemCard key={app.id} item={{ ...app }} className='shrink-0 basis-1/4' />
        ))}
      </ul>
    </div>
  );
};

export default OtherApps;
