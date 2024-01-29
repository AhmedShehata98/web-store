'use client';
import React, { useRef, useState } from 'react';
import { useOnClickOutside } from 'usehooks-ts';
import { IoAddOutline } from 'react-icons/io5';
import { IoSend } from 'react-icons/io5';
import { MdCleaningServices } from 'react-icons/md';
import Input from '../Input';
import CategoriesData from './CategoriesData';
import ImagesList from './ImagesList';
import { UseMutateAsyncFunction } from '@tanstack/react-query';
import Button from '../Button';
import Image from 'next/image';
import clsx from 'clsx';

type Props = {
  closeModal: () => void;
  isPendingPublishApp: boolean;
  isPendingUpload: boolean;
  mutateUploadImage: UseMutateAsyncFunction<any, Error, FormData, unknown>;
  publishNewApp: UseMutateAsyncFunction<IApplication, Error, FormData | CreateAppFormType, unknown>;
  revalidateApplicationList: () => void;
};
const PublishNewAppModal = ({
  closeModal,
  publishNewApp,
  mutateUploadImage,
  revalidateApplicationList,
  isPendingPublishApp,
  isPendingUpload,
}: Props) => {
  const modalRef = useRef<HTMLFormElement | null>(null);
  const [technologiesInputCount, setTechnologiesInputCount] = useState(1);
  const [images, setImages] = useState<ImagesListType[]>([]);
  const [isPublishedApplication, setIsPublishedApplication] = useState(false);
  const [cachedImagesList, setCachedImagesList] = useState<Partial<UploadResponse>[]>([]);
  useOnClickOutside(modalRef, closeModal);

  const handleUploadImages = async (images: ImagesListType[]) => {
    const imagesList = images.map((img) => img.file);
    const uploadedImages: UploadResponse[] = [];

    for (const img of imagesList) {
      const fd = new FormData();
      fd.append('image', img as any);

      const uploadedImg = await mutateUploadImage(fd);
      uploadedImages.push(uploadedImg);
    }

    return uploadedImages;
  };

  const handleApplicationData = async ({ fd, uploadedImages }: { fd: FormData; uploadedImages: UploadResponse[] }) => {
    let imagesList: Partial<UploadResponse>[] = [];
    if (cachedImagesList.length <= 0) {
      if (!uploadedImages) throw new Error(`Upload images is ${uploadedImages}`);
      imagesList = uploadedImages.map((img) => ({ url: img.url, width: img.width, height: img.height }));
      setCachedImagesList(imagesList);
    }
    const data = {
      thumbnail:
        imagesList.length >= 1 ? (uploadedImages.at(0)?.url as string) : (cachedImagesList.at(0)?.url as string),
      images: imagesList.length >= 1 ? imagesList : cachedImagesList,
      title: fd.get('title') as string,
      description: fd.get('description') as string,
      category: fd.get('category') as string,
      usedTechnologies: fd.getAll('technologies') as string[],
      repoUrl: fd.get('repoUrl') as string,
      demoUrl: fd.get('demoUrl') as string,
    };

    return data;
  };

  const handleSubmit = async (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();

    const fd = new FormData(ev.currentTarget);
    const uploadedImages = await handleUploadImages(images);
    const data = await handleApplicationData({ fd, uploadedImages });

    publishNewApp(data, {
      onSuccess: () => {
        revalidateApplicationList();
        setIsPublishedApplication(true);
      },
      onError: (err) => console.log(err),
    });
  };

  return (
    <div className='fixed z-30 inset-0 flex items-center justify-center dark:bg-opacity-45 dark:bg-dark-primary-200'>
      <form
        onSubmit={handleSubmit}
        ref={modalRef}
        className={`relative w-1/3 max-sm:w-11/12 max-tablet:w-10/12 max-xl:w-2/4 h-[85dvh] max-tablet:h-[80dvh] max-tablet:-translate-y-8 overflow-y-auto shadow-lg border px-2 py-5 dark:border-slate-600 rounded-lg overflow-hidden dark:bg-dark-primary-100 ${clsx(
          { '!overflow-y-hidden': isPublishedApplication },
        )}`}
      >
        {isPublishedApplication && (
          <div className='absolute inset-0 w-full h-full flex flex-col gap-12 items-center justify-center dark:bg-dark-primary-200 dark:bg-opacity-95'>
            <Image src='/congratulation.png' width={128} height={128} alt='congratulation.png' />
            <span className='flex flex-col gap-5 items-center justify-center px-24'>
              <h5 className='text-2xl capitalize dark:text-slate-200 font-bold text-center'>
                congratulation , your application is published successfully
              </h5>
              <Button type='button' className='w-2/3 rounded-md' onClick={() => closeModal()}>
                close
              </Button>
            </span>
          </div>
        )}
        <h3 className='text-xl font-bold text-white capitalize mb-6 px-3'>add new application</h3>
        <ImagesList setImagesList={setImages} isPending={isPendingUpload} />
        <div className='flex flex-col gap-3 mt-3 p-3'>
          <h3 className='text-xl text-white capitalize mb-3 px-3'>application details</h3>
          <Input type='text' name='title' id='title' placeholder='enter application name ...' />
          <textarea
            name='description'
            id='description'
            cols={20}
            rows={4}
            className='px-3 py-3 rounded-md w-full dark:!text-white dark:bg-dark-primary-300 focus:dark:outline-dark-secondary-200'
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
              <CategoriesData>
                {({ categoriesList, isFetched, isLoading }) => {
                  if (isFetched && !isLoading)
                    return categoriesList?.map((category) => (
                      <option key={category._id} value={category._id}>
                        {' '}
                        {category.name}
                      </option>
                    ));
                  else return isLoading && <option value='loading'> loading categories ...</option>;
                }}
              </CategoriesData>
            </select>
          </span>
          <span className='w-full flex flex-col items-center justify-center mb-4 gap-3'>
            <Input type='url' name='repoUrl' id='repoUrl' placeholder='enter repository url ...' />
            <Input type='url' name='demoUrl' id='demoUrl' placeholder='enter live demo url ...' />
          </span>
          <span className='w-full flex flex-col items-center justify-center mb-5 gap-2'>
            <h5 className='text-slate-300 capitalize w-full'>used technologies and programming languages</h5>
            {Array.from({ length: technologiesInputCount }, (_, num) => num + 1).map((input) => (
              <Input
                key={input}
                type='text'
                name='technologies'
                id={`technology-${input}`}
                placeholder={'Ex..  React JS'}
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
            <Button type='reset' className='w-1/2 dark:!bg-red-500 shadow-md rounded-md' disabled={isPendingPublishApp}>
              <span className='text-3xl'>
                <MdCleaningServices />
              </span>
              <p className='font-semibold capitalize text-lg'>reset</p>
            </Button>
            <Button
              type='submit'
              className='w-1/2 dark:!bg-dark-secondary-200 shadow-md rounded-md'
              disabled={isPendingPublishApp}
            >
              <span className='text-3xl'>
                <IoSend />
              </span>
              <p className='font-semibold capitalize text-lg'>publish now</p>
            </Button>
          </span>
        </div>
      </form>
    </div>
  );
};

export default PublishNewAppModal;
