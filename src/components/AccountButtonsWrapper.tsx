"use client";
import React, { useState } from "react";
import RegisterBtn from "@/components/RegisterBtn";
import AccountMenuWrapper from "./account-menu/AccountMenuWrapper";
import Avatar from "@/components/Avatar";
import { useSetRecoilState } from "recoil";
import { accountMenuAtom } from "@/atoms/account-menu";
import { registerModalAtom } from "@/atoms/register-modal";

function AccountButtonsWrapper() {
  const [isLoggedIn] = useState(false);
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
          username="ahmed shehata"
          isLoading={false}
          isSuccess={true}
          profileImg={"https://picsum.photos/200"}
          onClick={handleShowAccountMenu}
        />
      )}
      <AccountMenuWrapper />
    </>
  );
}

export default AccountButtonsWrapper;
