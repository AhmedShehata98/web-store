import { atom } from "recoil";

export const accountMenuAtom = atom({
  key: "account-menu",
  default: { showAccountMenu: false },
});
