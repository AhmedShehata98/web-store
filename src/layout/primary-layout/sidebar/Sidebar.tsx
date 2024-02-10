'use client';
import clsx from 'clsx';
import { Url } from 'next/dist/shared/lib/router/router';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { ReactNode } from 'react';
import { LuHome } from 'react-icons/lu';
import { TbCategory } from 'react-icons/tb';

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <aside className='side-navigation-menu'>
      <ul className='w-full grid grid-flow-row gap-2 p-2'>
        <Sidebar.SidebarLink
          href={'/'}
          isActive={Boolean(pathname.endsWith('/'))}
          icon={
            <span className='text-3xl dark:text-slate-400'>
              <LuHome />
            </span>
          }
          title='home'
        />
        <Sidebar.SidebarLink
          href={'/categories'}
          isActive={Boolean(pathname.endsWith('categories'))}
          icon={
            <span className='text-3xl dark:text-slate-400'>
              <TbCategory />
            </span>
          }
          title={'categories'}
        />
      </ul>
    </aside>
  );
};

const SidebarLink = ({
  href,
  icon,
  isActive,
  title,
}: {
  isActive: boolean;
  title: string;
  href: Url;
  icon: ReactNode;
}) => {
  return (
    <li className='relative w-full h-20 flex items-center justify-center rounded-md overflow-hidden'>
      <span
        className={`absolute inset-0 dark:bg-dark-primary-300 duration-500 transition-all bg-opacity-15 backdrop-blur ${clsx(
          { '-translate-x-full opacity-0': !isActive },
        )}`}
      ></span>
      <Link
        href={href}
        className={`relative w-full flex items-center justify-center gap-1 flex-col z-10 after:duration-500 after:absolute after:left-0 after:content-[''] after:w-1 after:transition-height after:dark:bg-dark-secondary-100 after:rounded-2xl ${clsx(
          isActive ? 'after:h-1/2' : 'after:h-0',
        )}`}
      >
        <span className='text-3xl dark:text-slate-400'>{icon}</span>
        <small className='dark:text-white capitalize'>{title}</small>
      </Link>
    </li>
  );
};
export default Sidebar;

Sidebar.SidebarLink = SidebarLink;
