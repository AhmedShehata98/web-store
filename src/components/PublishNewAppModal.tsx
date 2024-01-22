'use client';
import React, { useRef, useState } from 'react';
import { useOnClickOutside } from 'usehooks-ts';
import { IoAddCircleOutline } from 'react-icons/io5';
import { IoAddOutline } from 'react-icons/io5';
import { IoSend } from 'react-icons/io5';
import { MdCleaningServices } from 'react-icons/md';

type Props = {
  closeModal: () => void;
};
const PublishNewAppModal = ({ closeModal }: Props) => {
  const modalRef = useRef<HTMLFormElement | null>(null);
  const [technologiesInputCount, setTechnologiesInputCount] = useState(1);
  useOnClickOutside(modalRef, closeModal);
  return (
    <div className='fixed z-30 inset-0 flex items-center justify-center dark:bg-opacity-45 dark:bg-dark-primary-200'>
      <form
        ref={modalRef}
        className='w-1/3 max-sm:w-11/12 max-tablet:w-10/12 max-xl:w-2/4 h-[85dvh] max-tablet:h-[80dvh] max-tablet:-translate-y-8 overflow-y-auto shadow-lg border px-2 py-5 dark:border-slate-600 rounded-lg overflow-hidden dark:bg-dark-primary-100'
      >
        <h3 className='text-xl text-white capitalize mb-3 px-3'>add new application</h3>
        <ul className='w-full max-w-full flex items-center justify-start overflow-x-auto p-3'>
          <button
            type='button'
            className='text-8xl shadow-md rounded-md p-5 dark:bg-dark-primary-300 text-dark-secondary-200 border dark:border-slate-600'
          >
            <IoAddCircleOutline />
          </button>
        </ul>
        <div className='flex flex-col gap-3 mt-3 p-3'>
          <h3 className='text-xl text-white capitalize mb-3 px-3'>application details</h3>
          <input
            type='text'
            name='title'
            id='title'
            placeholder='enter application name ...'
            className='px-3 py-3 rounded-md w-full dark:bg-dark-primary-300 focus:dark:outline-dark-secondary-200'
          />
          <textarea
            name='description'
            id='description'
            cols={20}
            rows={4}
            className='px-3 py-3 rounded-md w-full dark:bg-dark-primary-300 focus:dark:outline-dark-secondary-200'
            placeholder='enter application description'
          ></textarea>
          <span className='w-2/5 flex flex-col items-center justify-center my-4 gap-3'>
            <label htmlFor='category' className='text-slate-300 capitalize w-full'>
              select category
            </label>
            <select
              name='category'
              id='category'
              className='w-full px-3 py-2 dark:bg-dark-primary-300 dark:text-slate-200 capitalize'
            >
              <option value='asdasd'> sdfwef</option>
              <option value='asaaasd'> sdfsdfwef</option>
              <option value='asda'> sdftrjujwef</option>
            </select>
          </span>
          <span className='w-full flex flex-col items-center justify-center mb-4 gap-3'>
            <input
              type='url'
              name='repoUrl'
              id='repoUrl'
              placeholder='enter repository url ...'
              className='px-3 py-3 rounded-md w-full dark:bg-dark-primary-300 focus:dark:outline-dark-secondary-200'
            />
            <input
              type='url'
              name='demoUrl'
              id='demoUrl'
              placeholder='enter live demo url ...'
              className='px-3 py-3 rounded-md w-full dark:bg-dark-primary-300 focus:dark:outline-dark-secondary-200'
            />
          </span>
          <span className='w-full flex flex-col items-center justify-center mb-5 gap-2'>
            <h5 className='text-slate-300 capitalize w-full'>used technologies and programming languages</h5>
            {Array.from({ length: technologiesInputCount }, (_, num) => num + 1).map((input) => (
              <input
                type='text'
                name='technologies'
                id={`technology-${input}`}
                placeholder={'Ex..  React JS'}
                className='px-3 py-3 rounded-md w-full dark:bg-dark-primary-300 focus:dark:outline-dark-secondary-200'
              />
            ))}
            <button
              type='button'
              className='w-full flex items-center justify-center gap-3 px-5 py-3 text-lg border dark:border-dark-secondary-200 dark:text-dark-secondary-200 font-medium shadow-md mt-3'
              onClick={() => setTechnologiesInputCount((p) => p + 1)}
            >
              <p>add more</p>
              <IoAddOutline />
            </button>
          </span>
          <span className='w-full flex items-center justify-center gap-4'>
            <button
              type='submit'
              className='w-1/2 flex items-center justify-center gap-3 px-4 py-2 dark:bg-red-500 shadow-md rounded-md'
            >
              <span className='text-3xl'>
                <MdCleaningServices />
              </span>
              <p className='font-semibold capitalize text-lg'>reset</p>
            </button>
            <button
              type='reset'
              className='w-1/2 flex items-center justify-center gap-3 px-4 py-2 dark:bg-dark-secondary-200 shadow-md rounded-md'
            >
              <span className='text-3xl'>
                <IoSend />
              </span>
              <p className='font-semibold capitalize text-lg'>publish now</p>
            </button>
          </span>
        </div>
      </form>
    </div>
  );
};

export default PublishNewAppModal;
