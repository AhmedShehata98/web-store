import Link from 'next/link';
import React, { HTMLAttributes, forwardRef } from 'react';
import ItemTitle from '../ItemTitle';
import ItemRating from '../ItemRating';
import ItemBtn from '../ItemBtn';
import clsx from 'clsx';
import ItemImage from './ItemImage';
import { Url } from 'next/dist/shared/lib/router/router';

type Props = HTMLAttributes<HTMLAnchorElement> & {
  item: Partial<IApplication>;
  href: Url;
};
const VItemCard = forwardRef<HTMLAnchorElement, Props>(function VItemCard({ item, href, className, ...rest }, ref) {
  const { thumbnail, title, review } = item;

  return (
    <Link
      ref={ref}
      href={href}
      {...rest}
      className={`w-full dark:bg-dark-primary-200 brightness-150 rounded-lg shadow-lg group ${clsx(className)}`}
    >
      <ItemImage iconUrl={thumbnail as string} />
      <div className='px-4 py-5'>
        <ItemTitle title={title as string} />
        <span className='flex items-center justify-between mt-6'>
          <ItemRating rating={0} ratingCount={review?.length || 0} />
          <ItemBtn />
        </span>
      </div>
    </Link>
  );
});

export default VItemCard;
