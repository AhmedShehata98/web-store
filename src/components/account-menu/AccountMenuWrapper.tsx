import React from 'react';
import AccountMenu from './AccountMenu';
import clsx from 'clsx';
import { useRecoilValue, useRecoilState, useSetRecoilState } from 'recoil';
import { accountMenuAtom } from '@/atoms/account-menu';
import { userDataAtom } from '@/atoms/userData.atom';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { logout } from '@/services/auth.api';

function AccountMenuWrapper() {
  const [{ showAccountMenu }, setShowAccountMenu] = useRecoilState(accountMenuAtom);
  const { userData } = useRecoilValue(userDataAtom);
  const { mutateAsync: mutateLogout, isPending: isPendingLogout } = useMutation({
    mutationKey: ['logout'],
    mutationFn: logout,
  });
  const queryClient = useQueryClient();
  const setUserData = useSetRecoilState(userDataAtom);
  const handleLogout = () => {
    logout().then(() => {
      queryClient.invalidateQueries({ queryKey: ['user-profile'] });
      setUserData({ isLoggedIn: false, isPendingProfileData: false, isSuccessProfileData: false, userData: undefined });
      setShowAccountMenu({ showAccountMenu: false });
    });
  };
  return (
    <AccountMenu
      className={clsx({
        'scale-95 translate-y-4 opacity-0 pointer-events-none': !showAccountMenu,
      })}
      fullName={userData?.fullName}
      profileImageUrl={userData?.profileImageUrl!}
      email={userData?.email}
      onLogout={handleLogout}
      isPending={isPendingLogout}
    />
  );
}

export default AccountMenuWrapper;
