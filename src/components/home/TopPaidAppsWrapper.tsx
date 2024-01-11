'use client';
import React, { useState } from 'react';
import VItemCard from '../item-card/vertical/VItemCard';
import { PAID_APP_LIST } from 'local-constants';

const TopPaidAppsWrapper = () => {
  const [appsList] = useState(PAID_APP_LIST);
  return (
    <div className='w-full flex items-start justify-start gap-2 mb-8'>
      <ul className='w-full grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-7 gap-y-5'>
        {appsList.map((app) => (
          <VItemCard key={app.id} item={app} />
        ))}
      </ul>
    </div>
  );
};

export default TopPaidAppsWrapper;
