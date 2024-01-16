'use client';
import { registerModalAtom } from '@/atoms/register-modal';
import React, { useState } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import Login from './Login';
import Signup from './Signup';
import clsx from 'clsx';
import ResetPassword from './ResetPassword';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { login, requestResetPassword, resetPassword, signup } from '@/services/auth.api';
import { userDataAtom } from '@/atoms/userData.atom';

export type ModalTargetType = 'LOGIN' | 'SIGN_UP' | 'RESET_PASSWORD';
const RegisterModalWrapper = () => {
  const [{ isShown }, setRegisterModalAtom] = useRecoilState(registerModalAtom);
  const queryClient = useQueryClient();
  const setUserData = useSetRecoilState(userDataAtom);
  const [currentModal, setCurrentModal] = useState<ModalTargetType>('LOGIN');
  const {
    mutateAsync: mutateLogin,
    isPending: inPendingLogin,
    isError: isErrorLogin,
    error: errorLogin,
  } = useMutation({
    mutationKey: ['login'],
    mutationFn: login,
  });
  const {
    mutateAsync: mutateSignup,
    isPending: isPendingSignup,
    error: errorSignup,
    isError: isErrorSignup,
  } = useMutation({
    mutationKey: ['sign-up'],
    mutationFn: signup,
  });
  const { mutateAsync: mutateRequestResetPassword, isPending: isPendingRequestResetPassword } = useMutation({
    mutationKey: ['request-reset-password'],
    mutationFn: requestResetPassword,
  });
  const {
    mutateAsync: mutateResetPassword,
    isPending: isPendingResetPassword,
    isSuccess: isSuccessResetPassword,
  } = useMutation({
    mutationKey: ['reset-password'],
    mutationFn: resetPassword,
  });

  const handleLoginSubmit = async (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    const fd = new FormData(ev.currentTarget);
    const data = {
      email: `${fd.get('email')}`,
      password: `${fd.get('password')}`,
    };

    await mutateLogin(data, {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['user-profile'] });
        setRegisterModalAtom({ isShown: false });
        setUserData((currVal) => ({ ...currVal, isLoggedIn: true }));
      },
    });
  };

  const handleSignUpSubmit = async (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    const fd = new FormData(ev.currentTarget);
    const data = {
      email: `${fd.get('email')}`,
      password: `${fd.get('password')}`,
      fullName: `${fd.get('fullName')}`,
      jobTitle: `${fd.get('jobTitle')}`,
    };
    await mutateSignup(data, {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['user-profile'] });
        setRegisterModalAtom({ isShown: false });
        setUserData((currVal) => ({ ...currVal, isLoggedIn: true }));
      },
    });
  };

  const handleRequestResetPassword = async (email: string): Promise<boolean> => {
    const reqPasswordOtp = await mutateRequestResetPassword(email);
    console.log(reqPasswordOtp);
    return Boolean(reqPasswordOtp);
  };

  const handleResetPassword = async (password: string, otpCode: string) => {
    await mutateResetPassword({ newPassword: password, otpCode: otpCode });
  };

  return (
    <div
      className={`fixed top-0 left-0 inset-0 z-30 flex items-center justify-center bg-slate-700 bg-opacity-40 ${clsx({
        hidden: !isShown,
      })}`}
    >
      {isShown && currentModal === 'RESET_PASSWORD' && (
        <ResetPassword
          setCurrentModal={setCurrentModal}
          closeModal={() => setRegisterModalAtom({ isShown: false })}
          onResetPasswordRequest={(email) => handleRequestResetPassword(email)}
          onResetPassword={handleResetPassword}
          isPending={isPendingResetPassword}
          isSuccess={isSuccessResetPassword}
        />
      )}
      {isShown && currentModal === 'LOGIN' && (
        <Login
          setCurrentModal={setCurrentModal}
          closeModal={() => setRegisterModalAtom({ isShown: false })}
          onSubmit={handleLoginSubmit}
          error={errorLogin?.message!}
          isError={isErrorLogin}
          inPending={inPendingLogin}
        />
      )}
      {isShown && currentModal === 'SIGN_UP' && (
        <Signup
          setCurrentModal={setCurrentModal}
          closeModal={() => setRegisterModalAtom({ isShown: false })}
          onSubmit={handleSignUpSubmit}
          error={errorSignup?.message!}
          isError={isErrorSignup}
          inPending={isPendingSignup}
        />
      )}
    </div>
  );
};

export default RegisterModalWrapper;
