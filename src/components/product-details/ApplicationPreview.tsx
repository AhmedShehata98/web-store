import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { IoMdStar } from 'react-icons/io';
import { IoLink } from 'react-icons/io5';
import { IoGitCompareSharp } from 'react-icons/io5';

type Props = {
  thumbnail: string;
  name: string;
  developer: UserType;
  demoUrl: string;
  repoUrl: string;
  category: string;
  rating: number;
  ratingCount: number;
  isLoading: boolean;
};
const ApplicationPreview = ({
  isLoading,
  demoUrl,
  category,
  developer,
  name,
  rating,
  ratingCount,
  repoUrl,
  thumbnail,
}: Props) => {
  return (
    <div className='h-full min-h-full w-1/3 max-lg:w-full flex flex-col items-center justify-center dark:bg-dark-primary-200 dark:brightness-150 py-14 px-6 max-md:px-3 shadow-lg rounded-md'>
      {isLoading && (
        <span className='inline-block w-48 h-48 max-md:w-56 mb-4 pb-2 dark:bg-dark-primary-400 animate-pulse'></span>
      )}
      {!isLoading && <ApplicationThumbnail thumbnail={thumbnail} />}
      {isLoading && (
        <span className='flex flex-col gap-2 text-center mb-4'>
          <h3 className='inline-block w-48 h-6 dark:bg-dark-primary-400 animate-pulse'></h3>
          <h3 className='inline-block w-36 h-6 dark:bg-dark-primary-400 animate-pulse'></h3>
        </span>
      )}
      {!isLoading && (
        <span className='flex flex-col gap-2 text-center mb-4'>
          <h3 className='text-4xl text-white capitalize'>{name}</h3>
          <span className='flex items-center justify-center gap-3'>
            {developer.profileImageUrl && (
              <Image
                src={developer.profileImageUrl}
                width={32}
                height={32}
                alt={`${developer.fullName}-image`}
                className='w-8 object-cover object-center rounded-full overflow-hidden'
              />
            )}
            <p className='capitalize text-sky-400'>{developer.fullName}</p>
          </span>
        </span>
      )}
      {!isLoading && (
        <span className='w-full flex flex-col items-center justify-center gap-4 mb-8 mt-6 py-3'>
          <Link
            target='_blank'
            href={demoUrl}
            className='w-1/3 max-sm:w-11/12 flex items-center justify-center gap-3 dark:bg-dark-secondary-100 px-3 py-2 rounded-md capitalize font-medium transition-transform duration-500 cursor-pointer hover:brightness-125 hover:scale-95'
          >
            live demo
            <span className='text-2xl'>
              <IoLink />
            </span>
          </Link>
          <Link
            target='_blank'
            href={repoUrl}
            className='w-1/3 max-sm:w-11/12 flex items-center justify-center gap-3 border dark:border-cyan-500 dark:text-cyan-500 px-3 py-2 rounded-md capitalize font-medium transition-transform duration-500 cursor-pointer hover:brightness-125 hover:scale-95'
          >
            repository
            <span className='text-2xl'>
              <IoGitCompareSharp />
            </span>
          </Link>
        </span>
      )}
      {isLoading && (
        <span className='w-full flex flex-col items-center justify-center gap-4 mb-8 mt-6 py-3'>
          <span className='w-1/3 max-sm:w-11/12 flex items-center justify-center gap-3 dark:bg-dark-primary-400 px-3 py-2 rounded-md animate-pulse'></span>
          <span className='w-1/3 max-sm:w-11/12 flex items-center justify-center gap-3 border dark:bg-dark-primary-400 px-3 py-2 rounded-md animate-pulse'></span>
        </span>
      )}
      {!isLoading && (
        <div className='flex items-center justify-center gap-1 mb-4 divide-x'>
          <AverageRating averageRating={`${rating}`} />
          <RatingCount count={`${ratingCount}`} />
        </div>
      )}
      {!isLoading && (
        <span className='flex mt-3 px-8 py-2 rounded-full dark:bg-dark-primary-400 dark:bg-opacity-80 text-lg shadow-xl font-medium capitalize dark:text-slate-300'>
          <p>{category}</p>
        </span>
      )}
    </div>
  );
};

export default ApplicationPreview;
ApplicationPreview.ApplicationThumbnail = ApplicationThumbnail;
ApplicationPreview.AverageRating = AverageRating;
ApplicationPreview.RatingCount = RatingCount;

function ApplicationThumbnail({ thumbnail }: { thumbnail: string }) {
  return (
    <figure className='w-48 max-md:w-56 mb-4 pb-2'>
      <Image
        src={thumbnail}
        alt=''
        width={128}
        height={128}
        className='!w-full object-cover rounded-md aspect-square'
      />
    </figure>
  );
}
function AverageRating({ averageRating }: { averageRating: string }) {
  return (
    <span className='w-28 px-5 flex items-center justify-center flex-col gap-2'>
      <span className='flex items-center justify-center text-white gap-0'>
        <p className='text-xl font-bold'>{averageRating}</p>
        <span className='text-orange-500 text-3xl'>
          <IoMdStar />
        </span>
      </span>
      <p className='text-slate-400 capitalize'>average</p>
    </span>
  );
}
function RatingCount({ count }: { count: string }) {
  return (
    <span className='w-28 px-5 flex items-center flex-col gap-2'>
      <p className='text-xl text-white font-bold'>{count}</p>
      <p className='capitalize text-slate-400'>rating</p>
    </span>
  );
}
