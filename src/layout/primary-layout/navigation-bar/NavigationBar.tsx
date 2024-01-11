'use client';
import { ROUTES_LIST } from '@/common/routes';
import clsx from 'clsx';
import { Url } from 'next/dist/shared/lib/router/router';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { LuHome } from 'react-icons/lu';
import { TbCategory } from 'react-icons/tb';

const NavigationBar = () => {
  const pathname = usePathname();
  return (
    <div className='mobile-navigation-bar'>
      <ul className='w-full flex items-center justify-center gap-4'>
        <li className='flex items-center justify-center'>
          <NavigationBar.NavigationLink
            href={ROUTES_LIST.app}
            title='home'
            icon={<LuHome />}
            isActive={Boolean(pathname)}
          />
        </li>
        <li className='flex items-center justify-center'>
          <NavigationBar.NavigationLink
            href={ROUTES_LIST.categories}
            title='categories'
            icon={<TbCategory />}
            isActive={pathname.endsWith(ROUTES_LIST.categories)}
          />
        </li>
      </ul>
    </div>
  );
};

type navLinkProps = {
  href: Url;
  title: string;
  icon: React.ReactNode;
  isActive: boolean;
};
const NavigationLink = ({ isActive, href, icon, title }: navLinkProps) => {
  return (
    <Link href={href} className='relative flex flex-col justify-center items-center w-16 h-16 gap-1 rounded-md'>
      <span className='flex items-center justify-center rounded-full text-3xl dark:text-slate-400'>{icon}</span>
      <small className='max-w-full overflow-hidden truncate px-1 dark:text-white capitalize text-center leading-3'>
        {title}
      </small>
      <span
        className={`absolute inset-0 dark:bg-gray-700 shadow-md dark:bg-opacity-25 rounded-md transition-all duration-500 ${clsx(
          { 'opacity-0 translate-y-3': !isActive },
        )}`}
      ></span>
      <span
        className={`absolute z-[5] left-1/2 -translate-x-1/2 bottom-0 w-1/2 h-1 dark:bg-dark-secondary-200 dark:bg-opacity-25 rounded-xl transition-all duration-500 ${clsx(
          { 'opacity-0 translate-y-3': !isActive },
        )}`}
      ></span>
    </Link>
  );
};

export default NavigationBar;
NavigationBar.NavigationLink = NavigationLink;
