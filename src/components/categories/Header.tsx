import React, { SelectHTMLAttributes } from 'react';
import { IoFilterSharp } from 'react-icons/io5';
import { IoIosArrowDown } from 'react-icons/io';
import clsx from 'clsx';
import Button from '../Button';

type Props = {
  title: string;
  isShownFiltersMenu?: boolean;
  FilterBtn?: React.ReactNode;
  FiltersMenu?: React.ReactNode;
  isLoadingTitle: boolean;
  isFetchedTitle: boolean;
};
const Header = ({
  isShownFiltersMenu = false,
  isLoadingTitle,
  isFetchedTitle,
  title,
  FiltersMenu,
  FilterBtn,
}: Props) => {
  return (
    <div className='w-full flex flex-col px-2 py-6'>
      <div className='w-full flex items-center justify-between gap-4'>
        {isLoadingTitle && (
          <span className='inline-block max-md:w-3/4 w-36 h-6 dark:bg-dark-primary-200 brightness-150 shadow-md rounded-md animate-pulse'></span>
        )}
        {isFetchedTitle && <h3 className='text-3xl font-semibold capitalize dark:text-slate-200 px-3'>{title}</h3>}
        {FilterBtn}
      </div>
      {isShownFiltersMenu && FiltersMenu}
    </div>
  );
};

export default Header;
Header.FilterBtn = FilterBtn;
Header.SelectItem = SelectItem;
Header.FiltersMenu = FiltersMenu;

function FilterBtn({ isToggled = false, onClick }: { isToggled: boolean; onClick: React.MouseEventHandler }) {
  return (
    <button
      type='button'
      className='w-fit h-14 flex items-center justify-center gap-5 rounded-md hover:bg-dark-primary-400 px-3'
      onClick={onClick}
    >
      <span className='inline-block text-2xl dark:text-slate-100 px-1'>
        <IoFilterSharp />
      </span>
      <p className='text-slate-100 text-2xl capitalize'>filter</p>
      <span
        className={`inline-block text-2xl dark:text-slate-100 px-2 ms-4 transition-transform duration-500 ${clsx({
          'rotate-180': isToggled,
        })}`}
      >
        <IoIosArrowDown />
      </span>
    </button>
  );
}

type SelectItemProps = SelectHTMLAttributes<HTMLSelectElement> & {
  children: React.ReactNode;
};
function SelectItem({ children, className, ...rest }: SelectItemProps) {
  return (
    <select
      {...rest}
      className={`w-full bg-dark-primary-400 dark:text-slate-200 capitalize shadow rounded-lg border border-transparent px-4 py-3 focus:outline-none focus:border-dark-secondary-200 ${clsx(
        className,
      )}`}
    >
      {children}
    </select>
  );
}

function FiltersMenu({ children }: { children: React.ReactNode }) {
  return (
    <div className='w-full dark:bg-dark-primary-200 dark:brightness-150 shadow-md rounded-lg px-7 py-10 mt-8'>
      <div className='w-full flex items-center justify-start gap-5 pb-5'>{children}</div>
      <Button type='reset' className='dark:!bg-dark-primary-400 dark:!text-slate-300 rounded-md px-6 py-3 mt-3'>
        reset all{' '}
      </Button>
    </div>
  );
}
