import React, { MouseEventHandler } from "react";
import { LuUser } from "react-icons/lu";

const RegisterBtn = ({ onClick }: { onClick?: MouseEventHandler }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="w-12 h-12 flex items-center justify-center rounded-full dark:bg-slate-200 dark:text-slate-700 text-3xl"
    >
      <LuUser />
    </button>
  );
};

export default RegisterBtn;
