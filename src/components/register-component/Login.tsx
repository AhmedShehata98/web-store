import React, { HTMLAttributes, useRef } from 'react';
import Logo from '../Logo';
import clsx from 'clsx';
import { useOnClickOutside } from 'usehooks-ts';
import { ModalTargetType } from './RegisterModalWrapper';

type Props = HTMLAttributes<HTMLFormElement> & {
  setCurrentModal: React.Dispatch<React.SetStateAction<ModalTargetType>>;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
  closeModal: () => void;
  error: string;
  isError: boolean;
  inPending: boolean;
};
const Login = ({ onSubmit, closeModal, setCurrentModal, inPending, error, isError, className, ...rest }: Props) => {
  const modalRef = useRef(null);

  useOnClickOutside(modalRef, () => closeModal());

  return (
    <form
      ref={modalRef}
      className={`w-1/4 max-md:w-full max-md:mx-5 max-tablet:w-4/5 flex flex-col items-center justify-center shadow-lg rounded-md dark:bg-dark-primary-200 py-6 px-14 max-md:px-6 ${clsx(
        className,
      )}`}
      {...rest}
      onSubmit={onSubmit}
    >
      <div className='mt-4'>
        <Logo />
      </div>
      <h3 className='dark:text-white font-bold capitalize text-lg mt-8 mb-9'>fill your info and start use web store</h3>
      <input
        type='email'
        name='email'
        id='email'
        placeholder='enter your email address ...'
        className='w-full dark:text-white dark:bg-dark-primary-300 px-4 py-3 shadow mb-4 focus:outline-dark-secondary-200'
      />
      <span className='w-full flex flex-col items-start justify-start'>
        <input
          type='password'
          name='password'
          id='password'
          placeholder='*********'
          className='w-full dark:text-white dark:bg-dark-primary-300 px-4 py-3 shadow mb-1 focus:outline-dark-secondary-200'
        />
        <button
          type='button'
          onClick={() => setCurrentModal('RESET_PASSWORD')}
          className='dark:text-dark-secondary-100 self-end uppercase'
        >
          <small>reset password</small>
        </button>
      </span>
      <span className='w-full h-2 mt-4'>
        {isError && <p className='text-red-500 text-center font-semibold text-sm'>{error}</p>}
      </span>
      <button
        type='submit'
        className='w-full flex items-center justify-center gap-3 py-4 text-lg font-bold capitalize rounded-md dark:bg-dark-secondary-200 mt-8 mb-4 hover:brightness-75'
        disabled={inPending}
      >
        {inPending ? (
          <>
            <span
              className={
                'inline-block w-7 h-7 border-4 dark:border-dark-primary-200 dark:border-l-transparent rounded-full animate-spin'
              }
            ></span>
            sending ...
          </>
        ) : (
          'login'
        )}
      </button>
      <button
        type='button'
        onClick={() => setCurrentModal('SIGN_UP')}
        className='underline dark:text-dark-secondary-100 capitalize mb-6'
      >
        Do you have no account yet? sign up
      </button>
    </form>
  );
};

export default Login;
