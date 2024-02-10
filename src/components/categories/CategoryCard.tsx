import { Url } from 'next/dist/shared/lib/router/router';
import Link from 'next/link';
import React from 'react';
import { TbCategory2 } from 'react-icons/tb';

type Props = {
  category: ICategory;
  href: Url;
};
const CategoryCard = ({ category: { description, name }, href }: Props) => {
  return (
    <li>
      <Link
        href={href || '#'}
        className='flex items-center justify-start gap-5 p-5 rounded-md border border-dark-primary-400 dark:bg-dark-primary-100 shadow-lg hover:dark:bg-dark-primary-400 transition-transform duration-500 hover:-translate-y-3'
      >
        <span className='text-4xl dark:bg-dark-secondary-200 px-6 py-6 rounded-md shadow-md'>
          <TbCategory2 />
        </span>
        <span className='flex flex-col gap-2'>
          <h4 className='dark:text-slate-100 text-xl capitalize font-semibold mb-4 mt-1'>{name}</h4>
          <small className='inline-block dark:text-slate-300 capitalize font-medium h-10 overflow-hidden'>
            {description}
          </small>
        </span>
      </Link>
    </li>
  );
};

export default CategoryCard;
