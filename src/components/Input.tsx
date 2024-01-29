import clsx from 'clsx';
import React, { InputHTMLAttributes } from 'react';

type InputPropsType = InputHTMLAttributes<HTMLInputElement>;
const Input = ({ className, ...rest }: InputPropsType) => {
  return (
    <input
      {...rest}
      className={`w-full dark:text-white dark:bg-dark-primary-300 px-4 py-3 shadow focus:outline-dark-secondary-200 ${clsx(
        className,
      )}`}
    />
  );
};

export default Input;
