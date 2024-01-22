'use client';
import React from 'react';
import RegisterBtn from '@/components/RegisterBtn';
import AccountMenuWrapper from './account-menu/AccountMenuWrapper';
import Avatar from '@/components/Avatar';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { accountMenuAtom } from '@/atoms/account-menu';
import { registerModalAtom } from '@/atoms/register-modal';
import { userDataAtom } from '@/atoms/userData.atom';

function AccountButtonsWrapper() {
  const {
    isLoggedIn,
    isPendingProfileData,
    userData: profileData,
    isSuccessProfileData,
  } = useRecoilValue(userDataAtom);
  const setShowAccountMenu = useSetRecoilState(accountMenuAtom);
  const setRegisterModalAtom = useSetRecoilState(registerModalAtom);

  const handleShowRegisterModal = () => {
    setRegisterModalAtom((curr) => ({ ...curr, isShown: !curr.isShown }));
  };
  const handleShowAccountMenu = () => {
    setShowAccountMenu((curr) => ({ showAccountMenu: !curr.showAccountMenu }));
  };

  return (
    <>
      {!isLoggedIn && <RegisterBtn onClick={handleShowRegisterModal} />}
      {isLoggedIn && (
        <Avatar
          username={profileData?.fullName || 'N A'}
          isLoading={isPendingProfileData}
          isSuccess={isSuccessProfileData}
          profileImg={profileData?.profileImageUrl!}
          onClick={handleShowAccountMenu}
        />
      )}
      <AccountMenuWrapper />
    </>
  );
}

export default AccountButtonsWrapper;
