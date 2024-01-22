import clsx from 'clsx';
import React, { MouseEventHandler, ReactNode } from 'react';
import Avatar from '../Avatar';
import { CiSettings } from 'react-icons/ci';
import { RiProfileLine } from 'react-icons/ri';
import Link from 'next/link';
import { Url } from 'next/dist/shared/lib/router/router';

type Props = {
  className: string;
  email: string | undefined;
  fullName: string | undefined;
  profileImageUrl: string | null;
  isPending: boolean;
  onLogout: MouseEventHandler;
};
function AccountMenu({ className, email, fullName, profileImageUrl, onLogout, isPending }: Props) {
  return (
    <div
      className={`absolute top-full right-6 w-[24rem] flex flex-col items-center justify-center duration-500 transition-all origin-center p-3 dark:bg-dark-primary-300 shadow-lg rounded-md bg-opacity-75 backdrop-blur ${clsx(
        className,
      )}`}
    >
      <div className='w-full flex items-start justify-start gap-5 px-2 py-3 border-b dark:border-neutral-600'>
        <Avatar username='ahmed shehata' isLoading={false} isSuccess={true} profileImg={profileImageUrl!} />
        <span className='flex flex-col items-start justify-start'>
          <p className='font-medium capitalize dark:text-white'>{fullName}</p>
          <small className='font-medium dark:text-slate-400'>{email}</small>
          <button
            type='button'
            onClick={onLogout}
            disabled={isPending}
            className='flex gap-3 dark:text-red-400 mt-2 hover:brightness-125'
          >
            {isPending && (
              <span className='inline-block w-5 h-5 border-2 border-red-400 border-t-transparent rounded-full animate-spin'></span>
            )}
            <p>sign-out</p>
          </button>
        </span>
      </div>
      <ul className='w-full h-full grid grid-flow-row gap-1 mt-2 dark:bg-dark-primary-300'>
        <AccountMenu.MenuLink
          href={'#'}
          icon={
            <span className='text-3xl'>
              <CiSettings />
            </span>
          }
          title='settings'
        />
        <AccountMenu.MenuLink
          href={'#'}
          icon={
            <span className='text-3xl'>
              <RiProfileLine />
            </span>
          }
          title='profile'
        />
      </ul>
    </div>
  );
}
const MenuLink = ({ href, icon, title }: { title: string; href: Url; icon: ReactNode }) => {
  return (
    <li className='w-full dark:text-white text-lg py-2 px-3 rounded-md dark:bg-dark-primary-300 hover:brightness-150'>
      <Link href={href} className='w-full flex items-center justify-start gap-4 '>
        <span className='text-3xl'>{icon}</span>
        <p>{title}</p>
      </Link>
    </li>
  );
};
export default AccountMenu;
AccountMenu.MenuLink = MenuLink;
