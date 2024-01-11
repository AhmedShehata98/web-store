import React from 'react';
import Search from './Search';
import Logo from '@/components/Logo';
import AccountButtonsWrapper from '@/components/AccountButtonsWrapper';

const Header = () => {
  return (
    <header className='relative z-30 w-full h-max py-4 px-5 flex items-center justify-between max-md:flex-wrap max-md:gap-3 dark:bg-dark-primary-100 shadow-md'>
      <Logo />
      <Search />
      <AccountButtonsWrapper />
    </header>
  );
};

export default Header;
