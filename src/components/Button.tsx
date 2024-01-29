import clsx from 'clsx';
import React, { ButtonHTMLAttributes } from 'react';
import { CgSpinner } from 'react-icons/cg';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  isLoading?: boolean;
  loadingMessage?: string;
  children: React.ReactNode;
};
const Button = ({ children, loadingMessage, isLoading = false, className, ...rest }: Props) => {
  return (
    <button
      className={`px-4 py-2 flex items-center justify-center gap-4 dark:text-slate-900 dark:bg-dark-secondary-200 font-semibold text-lg capitalize ${clsx(
        { 'bg-opacity-75 pointer-events-none': isLoading },
        className,
      )}`}
      {...rest}
    >
      {isLoading ? (
        <span className='flex items-center justify-center gap-3'>
          <span className='text-3xl animate-spin'>
            <CgSpinner />
          </span>
          {loadingMessage && <p>{loadingMessage}</p>}
        </span>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
