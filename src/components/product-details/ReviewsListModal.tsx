import { deleteReview, getAllReviews } from '@/services/reviews.api';
import { useInfiniteQuery, useMutation } from '@tanstack/react-query';
import { usePathname } from 'next/navigation';
import React, { useRef, useState } from 'react';
import ReviewItem from './ReviewItem';
import { useOnClickOutside } from 'usehooks-ts';
import { FaLongArrowAltRight } from 'react-icons/fa';
import SkeletonReviewItem from './SkeletonReviewItem';

type Props = {
  closeModal: () => void;
};
const ReviewsListModal = ({ closeModal }: Props) => {
  const modalRef = useRef<HTMLDivElement | null>(null);
  useOnClickOutside(modalRef, closeModal);
  const pathname = usePathname();
  const [applicationId] = useState(() => pathname.split('/').pop());
  const { mutateAsync: mutateDeleteReview } = useMutation({
    mutationKey: ['delete-review'],
    mutationFn: deleteReview,
  });
  const {
    data: reviewsList,
    isFetched: isFetchedReviews,
    isLoading: isLoadingReview,
    hasNextPage,
    fetchNextPage,
    refetch: refetchReviews,
  } = useInfiniteQuery({
    queryKey: ['reviews'],
    queryFn: ({ pageParam }) => getAllReviews({ applicationId: applicationId as string, limit: 14, page: pageParam }),
    initialPageParam: 1,
    getNextPageParam: function (lastPage, allPages) {
      if (lastPage.hasNext) return allPages.length++;
      return undefined;
    },
  });

  const handleDeleteReview = async (reviewId: string) => {
    await mutateDeleteReview(reviewId, { onSuccess: () => refetchReviews() });
  };

  return (
    <div className='fixed z-30 inset-0 flex items-center justify-center bg-zinc-700 bg-opacity-50'>
      <div
        className='w-1/3 max-sm:w-11/12 max-md:w-10/12 max-tablet:w-3/4 max-lg:w-4/6 max-h-[85dvh] overflow-y-auto flex flex-col items-start justify-start gap-1 p-4 dark:bg-dark-primary-100 rounded-lg shadow-xl'
        ref={modalRef}
      >
        <h3 className='text-white text-3xl capitalize font-medium px-3 '>reviews</h3>
        <ul className='w-full flex flex-col items-start justify-start gap-4 px-2 py-4 mt-4'>
          {isLoadingReview &&
            ['1', '2', '3', '4'].map((i) => <SkeletonReviewItem key={i} elementClassName='dark:bg-dark-primary-400' />)}
          {isFetchedReviews &&
            reviewsList?.pages.map((page: ReviewsResponseType) =>
              page.data.map((review) => (
                <ReviewItem
                  key={review._id}
                  className='dark:!bg-dark-primary-200 shadow-lg px-4 py-2 rounded-md hover:brightness-125'
                  review={{
                    comment: review.comment,
                    rating: review.rate,
                    reviewDate: review.createdAt,
                    reviewUser: review.user,
                  }}
                  handleDelete={() => handleDeleteReview(review._id)}
                />
              )),
            )}
        </ul>
        <div className={`w-full mb-3 items-center justify-center ${hasNextPage ? 'flex' : 'hidden'}`}>
          <button
            type='button'
            className='flex items-center justify-center gap-3 text-slate-400 capitalize hover:brightness-90'
            onClick={() => fetchNextPage()}
          >
            <p>load more</p>
            <FaLongArrowAltRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewsListModal;
