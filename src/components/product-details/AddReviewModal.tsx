'use client';

import React, { Dispatch, SetStateAction, useRef } from 'react';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import { useOnClickOutside } from 'usehooks-ts';

type Props = {
  closeModal: () => void;
  setRate: Dispatch<SetStateAction<number>>;
  rate: number;
};
const AddReviewModal = ({ closeModal, rate, setRate }: Props) => {
  const modalRef = useRef<HTMLDivElement | null>(null);

  useOnClickOutside(modalRef, closeModal);
  return (
    <div className='fixed z-30 inset-0 flex items-center justify-center dark:bg-dark-primary-300 dark:bg-opacity-65'>
      <div ref={modalRef} className='w-1/2 dark:bg-dark-primary-100 rounded-lg overflow-hidden shadow-lg'>
        <span className='w-full flex flex-col gap-4 px-5 py-7'>
          <h3 className='dark:text-white text-2xl capitalize'>review this application</h3>
          <Rating value={rate} onChange={setRate} style={{ width: 170 }} />
        </span>
        <span className='w-full flex flex-col gap-2 mb-6 px-5 py-7'>
          <label htmlFor='comment' className='text-slate-200 font-medium capitalize'>
            comment
          </label>
          <textarea
            id='comment'
            placeholder='enter your comment ...'
            rows={5}
            className={`w-full dark:text-white dark:bg-dark-primary-300 px-4 py-3 shadow focus:outline-dark-secondary-200`}
          />
        </span>
        <span className='w-full flex gap-4 bg-dark-primary-400 px-5 py-7'>
          <button
            type='button'
            className='w-1/2 px-4 py-3 rounded-md bg-dark-secondary-200 text-lg uppercase font-semibold hover:brightness-125'
          >
            submit
          </button>
          <button
            type='button'
            onClick={() => closeModal()}
            className='w-1/2 px-4 py-3 rounded-md dark:text-dark-secondary-100 dark:brightness-150 border dark:border-dark-secondary-100 dark:bg-dark-primary-200 text-lg uppercase font-semibold hover:brightness-125'
          >
            close
          </button>
        </span>
      </div>
    </div>
  );
};

export default AddReviewModal;
