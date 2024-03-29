import { Url } from 'next/dist/shared/lib/router/router';
import Link from 'next/link';
import React, { HTMLAttributes } from 'react';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

type Props = HTMLAttributes<HTMLDivElement> & {
  title: string;
  href: Url;
  linkClassName?: string;
};
const SectionHeading = ({ linkClassName, className, href, title, ...rest }: Props) => {
  return (
    <div className={`w-full flex items-center justify-start mb-3 mt-10 px-2 group ${className}`} {...rest}>
      <Link href={href} className={`flex items-center justify-center gap-3 ${linkClassName}`}>
        <p className='text-2xl dark:text-white capitalize max-md:text-xl'>{title}</p>
        <span className='text-3xl dark:text-dark-secondary-100 transition-transform group-hover:translate-x-4'>
          <MdOutlineKeyboardArrowRight />
        </span>
      </Link>
    </div>
  );
};

export default SectionHeading;
