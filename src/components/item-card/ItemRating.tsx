import React, { HTMLAttributes } from 'react';
import { IoIosStar } from 'react-icons/io';

type Props = HTMLAttributes<HTMLSpanElement> & {
  rating: number;
  ratingCount: number;
};
const ItemRating = ({ rating, ratingCount, ...rest }: Props) => {
  return (
    <span {...rest} className='flex items-center justify-center gap-2'>
      <p className='text-slate-300 '>{rating}</p>
      <span className='text-slate-300'>
        <IoIosStar />
      </span>
      <span className='hidden'>{ratingCount}</span>
    </span>
  );
};

export default ItemRating;
