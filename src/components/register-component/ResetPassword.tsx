import React, { HTMLAttributes, useEffect, useRef, useState } from 'react';
import { ModalTargetType } from './RegisterModalWrapper';
import { useSetRecoilState } from 'recoil';
import { registerModalAtom } from '@/atoms/register-modal';
import { useOnClickOutside } from 'usehooks-ts';
import OtpInput from 'react-otp-input';
import clsx from 'clsx';
import Logo from '../Logo';

type Props = HTMLAttributes<HTMLFormElement> & {
  setCurrentModal: React.Dispatch<React.SetStateAction<ModalTargetType>>;
};
const ResetPassword = ({ className, setCurrentModal, ...rest }: Props) => {
  const setRegisterModalAtom = useSetRecoilState(registerModalAtom);
  const [otpCode, setOtpCode] = useState('');
  const [email, setEmail] = useState('');
  const [waitCounter, setWaitCounter] = useState(60);
  const [isSentCode, setIsSentCode] = useState(false);
  const modalRef = useRef(null);
  const intervalRef = useRef<NodeJS.Timeout>();

  useOnClickOutside(modalRef, () => setRegisterModalAtom({ isShown: false }));

  const requestOtpCode = () => {
    intervalRef.current = setInterval(() => {
      setWaitCounter((count) => count - 1);
    }, 1000);
    setIsSentCode(true);
  };

  useEffect(() => {
    if (waitCounter <= 0) {
      clearInterval(intervalRef.current);
      setIsSentCode(false);
    }
  }, [waitCounter]);

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
      <h3 className='dark:text-white font-bold capitalize text-lg mt-8 mb-9'>
        type your email address and check your inbox for reset code
      </h3>
      <span className='w-full flex justify-center gap-2 items-center'>
        <input
          type='email'
          name='email'
          id='email'
          onChange={(ev) => setEmail(ev.target.value)}
          value={email}
          readOnly={isSentCode}
          disabled={isSentCode}
          placeholder='enter your email address ...'
          className='w-full dark:text-white dark:bg-dark-primary-300 px-4 py-3 shadow focus:outline-dark-secondary-200'
        />
        <button
          type='button'
          className='dark:bg-dark-secondary-100 px-4 py-3 font-semibold rounded capitalize shrink-0 disabled:dark:bg-dark-primary-300 disabled:dark:text-slate-400'
          onClick={requestOtpCode}
          disabled={email === '' || isSentCode}
        >
          {isSentCode ? `wait: ${waitCounter}` : 'send code'}
        </button>
      </span>
      {isSentCode && (
        <div className='w-full flex flex-col items-start justify-start gap-4 mt-5'>
          <OtpInput
            onChange={setOtpCode}
            value={otpCode}
            renderSeparator={<span className='px-1 text-slate-300'>-</span>}
            containerStyle={'w-full items-center justify-center pt-8'}
            inputStyle={{ width: '15%' }}
            numInputs={6}
            renderInput={(props) => (
              <input
                {...props}
                className='dark:text-white border border-slate-600 dark:bg-dark-primary-300 px-4 py-3 shadow rounded-md focus:outline-dark-secondary-200'
              />
            )}
          />
          <span className='w-full flex flex-col'>
            <input
              type='password'
              name='password'
              id='password'
              placeholder='new password'
              className='w-full dark:text-white dark:bg-dark-primary-300 px-4 py-3 shadow mb-4 focus:outline-dark-secondary-200'
            />
            <button
              type='submit'
              className='w-full py-4 text-lg font-bold capitalize rounded-md dark:bg-dark-secondary-200 mt-8 mb-4 hover:brightness-75'
            >
              send reset password
            </button>
          </span>
        </div>
      )}
      <button
        type='button'
        onClick={() => setCurrentModal('LOGIN')}
        className='underline dark:text-dark-secondary-100 capitalize my-6'
      >
        sign-in to your account
      </button>
    </form>
  );
};

export default ResetPassword;
