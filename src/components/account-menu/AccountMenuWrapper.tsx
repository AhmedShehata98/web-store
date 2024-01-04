import React, { useState } from "react";
import AccountMenu from "./AccountMenu";
import clsx from "clsx";
import { useRecoilValue } from "recoil";
import { accountMenuAtom } from "@/atoms/account-menu";

function AccountMenuWrapper() {
  const { showAccountMenu } = useRecoilValue(accountMenuAtom);
  return (
    <AccountMenu
      className={clsx({
        "scale-95 translate-y-4 opacity-0 pointer-events-none":
          !showAccountMenu,
      })}
    />
  );
}

export default AccountMenuWrapper;
