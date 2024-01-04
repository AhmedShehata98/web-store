import { ROUTES_LIST } from "@/common/routes";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logoPng from "@/assets/logo.png";

const Logo = () => {
  return (
    <Link
      href={ROUTES_LIST.app}
      className="flex gap-5 items-center justify-center"
    >
      <Image
        src={logoPng}
        alt="logo.png"
        className="w-12 h-12 bg-dark-secondary-100 rounded-full p-1 shadow-md"
      />
      <p className="text-slate-300 capitalize text-lg font-semibold">
        web store
      </p>
    </Link>
  );
};

export default Logo;
