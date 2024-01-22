'use client';

import React, { useRef, useState } from 'react';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import Input from '@/components/Input';
import { useOnClickOutside } from 'usehooks-ts';

type Props = {
  closeModal: () => void;
};
const AddReviewModal = ({ closeModal }: Props) => {
  const [rate, setRate] = useState(1);
  const modalRef = useRef<HTMLDivElement | null>(null);

  useOnClickOutside(modalRef, closeModal);
  return (
    <div className='fixed z-30 inset-0 flex items-center justify-center dark:bg-dark-primary-300 dark:bg-opacity-45'>
      <div ref={modalRef} className='w-1/2 dark:bg-dark-primary-200 rounded-lg shadow-lg'>
        <span className='w-full flex flex-col gap-4 px-5 py-7'>
          <h3 className='dark:text-white text-2xl capitalize'>review this application</h3>
          <Rating value={rate} onChange={setRate} style={{ width: 170 }} />
        </span>
        <span className='w-full flex flex-col gap-2 mb-6 px-5 py-7'>
          <label htmlFor='comment' className='text-slate-300 font-medium'>
            comment
          </label>
          <Input id='comment' type='text' placeholder='enter your comment ...' />
        </span>
        <span className='w-full flex gap-3 bg-dark-primary-100 px-5 py-7'>
          <button
            type='button'
            className='w-1/2 px-4 py-3 rounded-md bg-dark-secondary-200 text-lg capitalize font-medium'
          >
            submit
          </button>
          <button
            type='button'
            className='w-1/2 px-4 py-3 rounded-md dark:text-white dark:brightness-150 dark:bg-dark-primary-200 text-lg capitalize font-medium'
          >
            close
          </button>
        </span>
      </div>
    </div>
  );
};

export default AddReviewModal;
