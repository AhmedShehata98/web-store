'use client';
import React from 'react';
import { publishAppModalAtom } from '@/atoms/publish-app-modal';
import { IoAddCircleOutline } from 'react-icons/io5';
import { useSetRecoilState } from 'recoil';

const PublishNewAppBtn = () => {
  const setIsShownAppModal = useSetRecoilState(publishAppModalAtom);

  return (
    <button
      type='button'
      className='flex items-center justify-center gap-3 px-6 py-2 rounded-full ms-auto shadow-md me-5 dark:bg-dark-secondary-200 hover:brightness-75 max-tablet:hidden'
      onClick={() => setIsShownAppModal(true)}
    >
      <p className='font-semibold capitalize'>publish new app</p>
      <span className='text-3xl'>
        <IoAddCircleOutline />
      </span>
    </button>
  );
};

export default PublishNewAppBtn;
