import React, { HTMLAttributes } from 'react';
import { Rating } from '@smastrom/react-rating';
import { FaTrashCan } from 'react-icons/fa6';
import { useRecoilValue } from 'recoil';
import { userDataAtom } from '@/atoms/userData.atom';

type Props = HTMLAttributes<HTMLLIElement> & {
  review: {
    rating: number;
    comment: string;
    reviewDate: string;
    reviewUser: Partial<UserType>;
  };
  handleDelete: () => void;
};
const ReviewItem = ({ review, handleDelete, className, ...rest }: Props) => {
  const { rating, comment, reviewDate, reviewUser } = review;
  const { userData } = useRecoilValue(userDataAtom);
  return (
    <li {...rest} className={`w-full flex flex-col items-start justify-start px-3 py-4 ${className}`}>
      <Rating value={rating} transition='colors' className='mb-3 !w-28' />
      <div className='w-full flex flex-col items-start justify-start gap-1'>
        <p className={`font-medium dark:text-slate-100 overflow-y-hidden ${comment.length > 350 ? 'h-16' : 'h-auto'}`}>
          {comment}
        </p>
        <div className='w-full flex items-center justify-between py-2 gap-5'>
          <span className='flex items-center justify-center gap-5'>
            <p className='text-slate-400 font-medium capitalize text-sm'>{reviewUser.fullName}</p>
            <time className='dark:text-slate-400 text-sm' dateTime={reviewDate}>
              {Intl.DateTimeFormat('EN-EG', { dateStyle: 'medium' }).format(new Date(reviewDate))}
            </time>
          </span>
          <span className='flex items-center justify-center gap-3'>
            {userData?._id === reviewUser._id && (
              <button
                className='text-red-500 p-3 rounded-full hover:bg-red-400 hover:bg-opacity-30'
                onClick={handleDelete}
              >
                <FaTrashCan />
              </button>
            )}
          </span>
        </div>
      </div>
    </li>
  );
};

export default ReviewItem;
