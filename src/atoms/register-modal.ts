import { atom } from "recoil";

export const registerModalAtom = atom({
  key: "register-modal",
  default: {
    isShown: false,
  },
});
