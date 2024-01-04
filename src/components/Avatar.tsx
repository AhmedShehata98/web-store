import Image from "next/image";
import React, { MouseEventHandler } from "react";

type Props = {
  username: string;
  profileImg: string | null;
  isLoading: boolean;
  isSuccess: boolean;
  onClick?: MouseEventHandler;
};
function Avatar({ isLoading, isSuccess, profileImg, username }: Props) {
  const getNameChars = (username: string): string => {
    if (username.trim().indexOf(" ") === -1) {
      return username.trim().split(" ")[0].charAt(0).toUpperCase();
    } else {
      const name = {
        first: "",
        last: "",
      };
      name.first = username.trim().split(" ")[0].charAt(0).toUpperCase();
      name.last = username.trim().split(" ")[1].charAt(0).toUpperCase();
      return `${name.first}${name.last}`;
    }
  };
  return (
    <button
      type="button"
      className="w-12 h-12 flex items-center justify-center"
    >
      {isSuccess && profileImg === null && (
        <div className="w-full h-full flex items-center justify-center rounded-full overflow-hidden dark:bg-dark-secondary-100 dark:text-white font-bold text-xl">
          {getNameChars(username)}
        </div>
      )}
      {isSuccess && profileImg !== null && (
        <figure className="w-full h-full rounded-full overflow-hidden">
          <Image
            width={48}
            height={48}
            src={profileImg}
            alt="profileImg"
            className="max-w-full object-cover object-center"
          />
        </figure>
      )}
      {isLoading && (
        <div className="w-full h-full rounded-full overflow-hidden dark:bg-slate-500 animate-pulse"></div>
      )}
    </button>
  );
}

export default Avatar;
