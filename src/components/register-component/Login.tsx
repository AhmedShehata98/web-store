import React, { HTMLAttributes, useRef, useState } from 'react';
import Logo from '../Logo';
import clsx from 'clsx';
import { useOnClickOutside } from 'usehooks-ts';
import { useSetRecoilState } from 'recoil';
import { registerModalAtom } from '@/atoms/register-modal';
import { ModalTargetType } from './RegisterModalWrapper';

type Props = HTMLAttributes<HTMLFormElement> & {
  setCurrentModal: React.Dispatch<React.SetStateAction<ModalTargetType>>;
};
const Login = ({ setCurrentModal, className, ...rest }: Props) => {
  const setRegisterModalAtom = useSetRecoilState(registerModalAtom);
  const modalRef = useRef(null);

  useOnClickOutside(modalRef, () => setRegisterModalAtom({ isShown: false }));

  return (
    <form
      ref={modalRef}
      className={`w-1/4 max-md:w-full max-md:mx-5 max-tablet:w-4/5 flex flex-col items-center justify-center shadow-lg rounded-md dark:bg-dark-primary-200 py-6 px-14 max-md:px-6 ${clsx(
        className,
      )}`}
      {...rest}
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
      <button
        type='submit'
        className='w-full py-4 text-lg font-bold capitalize rounded-md dark:bg-dark-secondary-200 mt-8 mb-4 hover:brightness-75'
      >
        login
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
