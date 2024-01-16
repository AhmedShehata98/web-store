import { atom } from 'recoil';

export const userDataAtom = atom<{
  isLoggedIn: boolean;
  isSuccessProfileData: boolean;
  isPendingProfileData: boolean;
  userData: UserType | undefined;
}>({
  key: 'user-data',
  default: {
    isSuccessProfileData: false,
    isPendingProfileData: true,
    isLoggedIn: false,
    userData: undefined,
  },
});
