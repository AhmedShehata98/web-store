'use client';
import React, { FormEvent, useState } from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { FaStar } from 'react-icons/fa6';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import Portal from '../Portal';
import AddReviewModal from './AddReviewModal';
import ReviewItem from './ReviewItem';
import { useRecoilValue } from 'recoil';
import { userDataAtom } from '@/atoms/userData.atom';
import { useMutation, useQuery } from '@tanstack/react-query';
import { addNewReview, deleteReview, getRecentReviews } from '@/services/reviews.api';
import { usePathname } from 'next/navigation';
import ReviewsListModal from './ReviewsListModal';
import SkeletonReviewItem from './SkeletonReviewItem';

// type Props = {
//   isLoading: boolean;
// };
const ReviewAndRating = () => {
  const pathName = usePathname();
  const [applicationId] = useState<string | undefined>(() => pathName.split('/').pop());

  const [rate, setRate] = useState(1);
  const { isLoggedIn, userData } = useRecoilValue(userDataAtom);
  const [isShownReviewModal, setIsShownReviewModal] = useState(false);
  const [isShownAddReviewModal, setIsShownAddReviewModal] = useState(false);
  const {
    data: recentReview,
    isLoading: isLoadingRecentReview,
    isFetched: isFetchedRecentReview,
    refetch: refetchRecentReview,
  } = useQuery({
    queryKey: ['recent-review', applicationId],
    queryFn: () => getRecentReviews(applicationId as string),
  });
  const { mutateAsync: mutateAsyncAddReview, isPending: isPendingAddReview } = useMutation({
    mutationKey: ['add-review'],
    mutationFn: addNewReview,
  });
  const { mutateAsync: mutateDeleteReview } = useMutation({
    mutationKey: ['delete-review'],
    mutationFn: deleteReview,
  });
  const handleOpenReviewModal = () => {
    setIsShownReviewModal(true);
  };

  const handleAddReview = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();

    const fd = new FormData(ev.currentTarget);
    const data: ReviewFormType = {
      comment: fd.get('comment') as string,
      rate,
      user: userData?._id as string,
    };

    if (!applicationId) throw new Error(`Application id retrieved is: ${applicationId}`);

    mutateAsyncAddReview(
      { itemId: applicationId, reviewForm: data },
      {
        onSuccess: () => {
          setIsShownAddReviewModal(false);
        },
      },
    );
  };

  const handleDeleteReview = async (reviewId: string) => {
    await mutateDeleteReview(reviewId, { onSuccess: () => refetchRecentReview() });
  };

  return (
    <div className='w-full flex flex-col items-start rounded-lg mb-5 dark:bg-dark-primary-200 shadow-lg dark:brightness-150 divide-y dark:divide-slate-600'>
      <span className='w-full flex items-center justify-between gap-4 py-4 px-6'>
        <h3 className='capitalize dark:text-white text-xl font-medium m-0'>ratings and review</h3>
        <button type='button' className='flex items-center justify-end max-md:w-14 text-4xl text-white w-28 group'>
          <span className='group-hover:translate-x-3 transition-transform'>
            <MdKeyboardArrowRight />
          </span>
        </button>
      </span>
      <RatingLevels rate={4.2} rateCount={1407} />
      {isLoggedIn && (
        <div className='w-full flex items-center justify-between max-md:flex-col gap-4 px-8 py-6 !border-t-transparent'>
          <Rating value={rate} onChange={setRate} style={{ width: 140 }} />
          <button
            type='button'
            className='px-3 py-2 dark:bg-dark-primary-400 dark:brightness-150 shadow-lg rounded-md dark:text-white capitalize'
            onClick={() => setIsShownAddReviewModal(true)}
          >
            write a review
          </button>
        </div>
      )}
      <div className='w-3/5 px-4'>
        {isLoadingRecentReview && (
          <SkeletonReviewItem className='border border-slate-700' elementClassName='!bg-dark-primary-400' />
        )}
        {isFetchedRecentReview && recentReview && (
          <ReviewItem
            review={{
              comment: recentReview.comment,
              rating: recentReview.rate,
              reviewDate: recentReview.createdAt,
              reviewUser: {
                ...recentReview.user,
              },
            }}
            handleDelete={() => handleDeleteReview(recentReview._id)}
          />
        )}
        <button
          type='button'
          className='px-3 py-2 mb-4 text-dark-secondary-200 uppercase font-medium underline'
          onClick={handleOpenReviewModal}
        >
          see all reviews
        </button>
      </div>
      {isShownAddReviewModal && (
        <Portal id='modal'>
          <AddReviewModal
            closeModal={() => setIsShownAddReviewModal(false)}
            setRate={setRate}
            rate={rate}
            isPending={isPendingAddReview}
            onSubmit={handleAddReview}
          />
        </Portal>
      )}
      {isShownReviewModal && (
        <Portal id='modal'>
          <ReviewsListModal closeModal={() => setIsShownReviewModal(false)} />
        </Portal>
      )}
    </div>
  );
};

export default ReviewAndRating;

type RatingLevelsType = {
  rateCount: number;
  rate: number;
};
function RatingLevels({ rate, rateCount }: RatingLevelsType) {
  return (
    <div className='w-full flex max-md:flex-col gap-10 px-8 py-4 max-md:px-3'>
      <span className='flex flex-col gap-3 items-center justify-center'>
        <h2 className='dark:text-white text-6xl font-semibold capitalize'>{rate}</h2>
        <p className='dark:text-slate-400 uppercase'>{rateCount} ratings</p>
      </span>
      <ul className='grid grid-flow-row gap-1'>
        <li className='flex items-center justify-center gap-5'>
          <span className='flex items-center justify-center gap-2 text-2xl text-orange-600'>
            <p className='text-sm dark:text-white'>5</p>
            <FaStar />
          </span>
          <span className='flex items-center justify-start w-56 h-3 rounded-lg bg-orange-400 bg-opacity-35'>
            <span className='h-full flex bg-orange-600 rounded-lg' style={{ width: `75%` }}></span>
          </span>
        </li>
        <li className='flex items-center justify-center gap-5'>
          <span className='flex items-center justify-center gap-2 text-2xl text-orange-600'>
            <p className='text-sm dark:text-white'>4</p>
            <FaStar />
          </span>
          <span className='flex items-center justify-start w-56 h-3 rounded-lg bg-orange-400 bg-opacity-35'>
            <span className='h-full flex bg-orange-600 rounded-lg' style={{ width: `70%` }}></span>
          </span>
        </li>
        <li className='flex items-center justify-center gap-5'>
          <span className='flex items-center justify-center gap-2 text-2xl text-orange-600'>
            <p className='text-sm dark:text-white'>3</p>
            <FaStar />
          </span>
          <span className='flex items-center justify-start w-56 h-3 rounded-lg bg-orange-400 bg-opacity-35'>
            <span className='h-full flex bg-orange-600 rounded-lg' style={{ width: `62%` }}></span>
          </span>
        </li>
        <li className='flex items-center justify-center gap-5'>
          <span className='flex items-center justify-center gap-2 text-2xl text-orange-600'>
            <p className='text-sm dark:text-white'>2</p>
            <FaStar />
          </span>
          <span className='flex items-center justify-start w-56 h-3 rounded-lg bg-orange-400 bg-opacity-35'>
            <span className='h-full flex bg-orange-600 rounded-lg' style={{ width: `35%` }}></span>
          </span>
        </li>
        <li className='flex items-center justify-center gap-5'>
          <span className='flex items-center justify-center gap-2 text-2xl text-orange-600'>
            <p className='text-sm dark:text-white'>1</p>
            <FaStar />
          </span>
          <span className='flex items-center justify-start w-56 h-3 rounded-lg bg-orange-400 bg-opacity-35'>
            <span className='h-full flex bg-orange-600 rounded-lg' style={{ width: `15%` }}></span>
          </span>
        </li>
      </ul>
    </div>
  );
}
