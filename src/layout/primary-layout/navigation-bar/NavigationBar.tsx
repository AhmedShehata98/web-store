import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import React from "react";
import { LuHome } from "react-icons/lu";
import { TbCategory } from "react-icons/tb";

const NavigationBar = () => {
  return (
    <div className="fixed bottom-0 w-full z-40 dark:bg-dark-primary-100 px-4 py-3">
      <ul className="w-full flex items-center justify-center gap-4">
        <li className="flex items-center justify-center">
          <NavigationBar.NavigationLink
            href={"/"}
            title="home"
            icon={<LuHome />}
          />
        </li>
        <li className="flex items-center justify-center">
          <NavigationBar.NavigationLink
            href={"/categories"}
            title="categories"
            icon={<TbCategory />}
          />
        </li>
      </ul>
    </div>
  );
};

type navLinkProps = {
  href: Url;
  title: string;
  icon: React.ReactNode;
};
const NavigationLink = ({ href, icon, title }: navLinkProps) => {
  return (
    <Link
      href={href}
      className="flex flex-col justify-center items-center gap-1"
    >
      <span className="flex items-center justify-center w-14 h-14 rounded-full text-4xl dark:bg-dark-secondary-100">
        {icon}
      </span>
      <small className="dark:text-white capitalize text-center leading-3">
        {title}
      </small>
    </Link>
  );
};

export default NavigationBar;
NavigationBar.NavigationLink = NavigationLink;
