'use client';

import clsx from 'clsx';
import useImageFile from 'hooks/useImageFile';
import Image from 'next/image';
import React, { Dispatch, SetStateAction, useEffect, useRef } from 'react';
import { IoAddCircleOutline } from 'react-icons/io5';
import { LuTrash2 } from 'react-icons/lu';
import { ImSpinner3 } from 'react-icons/im';

const ImagesList = ({
  setImagesList,
  isPending,
}: {
  isPending: boolean;
  setImagesList: Dispatch<SetStateAction<ImagesListType[]>>;
}) => {
  const inputFileRef = useRef<HTMLInputElement | null>(null);
  const {
    imagesList,
    methods: { handleRemoveImageById },
  } = useImageFile({ inputFile: inputFileRef });

  useEffect(() => {
    setImagesList(imagesList);
  }, [imagesList]);

  return (
    <div className='w-full h-max overflow-x-auto'>
      <ul className='w-full max-w-full flex items-center justify-start overflow-x-auto px-5 py-5'>
        {imagesList.map((img) => (
          <li
            key={img.id}
            className={`relative w-32 h-32 shrink-0 group me-3 rounded-lg border border-dark-secondary-200 shadow-md ${clsx(
              { 'opacity-40 animate-pulse pointer-events-none': isPending },
            )}`}
          >
            <button
              type='button'
              onClick={() => handleRemoveImageById(img.id)}
              className={`absolute -top-3 -left-2 w-8 h-8 flex items-center justify-center rounded-full bg-red-400 text-slate-800 text-xl opacity-0 hover:brightness-125 group-hover:opacity-100 ${clsx(
                { hidden: isPending },
              )}`}
            >
              <LuTrash2 />
            </button>
            <Image
              src={img.url}
              alt={img.title}
              className='w-full h-full object-cover object-center rounded-lg'
              width={128}
              height={128}
            />
            {isPending && (
              <span className='absolute inset-0 bg-gray-400 flex items-center justify-center'>
                <span className='text-3xl animate-spin dark:text-dark-secondary-200'>
                  <ImSpinner3 />
                </span>
              </span>
            )}
          </li>
        ))}
        <input type='file' name='image-file-input' multiple hidden id='image-file-input' ref={inputFileRef} />
        <label
          htmlFor='image-file-input'
          className='text-8xl shadow-md rounded-md cursor-pointer p-5 dark:bg-dark-primary-300 text-dark-secondary-200 border dark:border-slate-600'
        >
          <IoAddCircleOutline />
        </label>
      </ul>
    </div>
  );
};

export default ImagesList;
