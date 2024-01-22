'use client';
import { userDataAtom } from '@/atoms/userData.atom';
import { getProfileData } from '@/services/user.api';
import { useQuery } from '@tanstack/react-query';
import React, { ReactNode, useEffect } from 'react';
import { useSetRecoilState } from 'recoil';

const UserDataWrapper = ({ children }: { children: ReactNode }) => {
  const setUserData = useSetRecoilState(userDataAtom);
  const {
    data: profileData,
    isPending: isPendingProfileData,
    isSuccess: isSuccessProfileData,
  } = useQuery({
    queryKey: ['user-profile'],
    queryFn: getProfileData,
    retry: 2,
  });

  useEffect(() => {
    if (isSuccessProfileData)
      setUserData({
        isLoggedIn: isSuccessProfileData,
        isPendingProfileData,
        isSuccessProfileData,
        userData: profileData,
      });
  }, [profileData, isSuccessProfileData, isSuccessProfileData]);
  return <>{children}</>;
};

export default UserDataWrapper;
