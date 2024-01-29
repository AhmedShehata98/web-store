import Link from 'next/link';
import React, { HTMLAttributes } from 'react';
import ItemImage from './ItemImage';
import ItemTitle from '../ItemTitle';
import ItemRating from '../ItemRating';
import ItemCategory from '../ItemCategory';
import ItemBtn from '../ItemBtn';
import clsx from 'clsx';
import { Url } from 'next/dist/shared/lib/router/router';

type Props = HTMLAttributes<HTMLAnchorElement> & {
  item: IApplication;
  href: Url;
};
const ItemCard = ({ item, className, href, ...rest }: Props) => {
  return (
    <Link
      href={href}
      {...rest}
      className={`w-full flex items-start justify-start gap-8 px-5 py-7 max-md:px-3 max-md:py-5 dark:bg-dark-primary-200 brightness-150 rounded-md shadow-lg transition-transform duration-500 hover:scale-[.99] hover:-translate-y-1.5 ${clsx(
        className,
      )}`}
    >
      <ItemImage iconUrl={item.thumbnail} />
      <div className='flex-1 overflow-x-hidden'>
        <ItemTitle title={item.title} />
        <span className='w-full max-w-full max-md:gap-2 overflow-x-hidden flex items-center justify-start gap-4'>
          <ItemRating ratingCount={0} rating={4} />
          <ItemCategory categoryName={item.category.name} />
        </span>
      </div>
      <ItemBtn className='self-end' />
    </Link>
  );
};

export default ItemCard;
