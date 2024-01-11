'use client';
import React, { useState } from 'react';
import ItemCard from '../item-card/horizental/ItemCard';
import { FREE_APP_LIST } from 'local-constants';

const TopFreeAppsWrapper = () => {
  const [appsList] = useState(FREE_APP_LIST);
  return (
    <div className='w-full flex items-start justify-start gap-2 mb-8'>
      <ul className='w-full grid sm:grid-cols-1 md:grid-cols-2 gap-x-7 gap-y-5'>
        {appsList.map((app) => (
          <ItemCard key={app.id} item={app} />
        ))}
      </ul>
    </div>
  );
};

export default TopFreeAppsWrapper;
