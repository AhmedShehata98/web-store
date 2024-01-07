"use client";
import { registerModalAtom } from "@/atoms/register-modal";
import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import Login from "./Login";
import Signup from "./Signup";
import clsx from "clsx";

const RegisterModalWrapper = () => {
  const { isShown } = useRecoilValue(registerModalAtom);
  const [currentModal, setCurrentModal] = useState<"LOGIN" | "SIGN_UP">(
    "LOGIN"
  );
  return (
    <div
      className={`fixed top-0 left-0 inset-0 z-30 flex items-center justify-center bg-slate-700 bg-opacity-40 ${clsx(
        { hidden: !isShown }
      )}`}
    >
      {isShown && currentModal === "LOGIN" && (
        <Login setCurrentModal={setCurrentModal} />
      )}
      {isShown && currentModal === "SIGN_UP" && (
        <Signup setCurrentModal={setCurrentModal} />
      )}
    </div>
  );
};

export default RegisterModalWrapper;
