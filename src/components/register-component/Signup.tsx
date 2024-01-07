import Image from "next/image";
import React, { HTMLAttributes, LegacyRef, forwardRef } from "react";
import googleIcon from "@/assets/google.png";
import githubIcon from "@/assets/github.png";
import Logo from "../Logo";
import useClickOutside from "@/hooks/useClickOutside";
import { useSetRecoilState } from "recoil";
import { registerModalAtom } from "@/atoms/register-modal";

type Props = HTMLAttributes<HTMLFormElement> & {
  setCurrentModal: React.Dispatch<React.SetStateAction<"LOGIN" | "SIGN_UP">>;
};
const Signup = forwardRef<HTMLFormElement, Props>(
  ({ setCurrentModal, className, ...rest }, ref) => {
    const setRegisterModalAtom = useSetRecoilState(registerModalAtom);
    let { modalRef } = useClickOutside({
      cb: () => setRegisterModalAtom({ isShown: false }),
    });

    return (
      <form
        ref={modalRef as LegacyRef<HTMLFormElement> | undefined}
        {...rest}
        className={`w-2/3 max-md:w-full max-md:h-[90dvh] max-tablet:w-4/5 max-md:max-h-[90dvh] overflow-y-auto max-md:mx-5 flex flex-col items-center justify-center max-md:justify-start shadow-lg rounded-md dark:bg-dark-primary-200 py-6 px-14 max-tablet:px-8 transition-transform duration-500 ${className}`}
      >
        <span className="py-8">
          <Logo />
        </span>
        <div className="w-full flex max-md:flex-col max-tablet:gap-4">
          <div className="w-1/2 max-md:w-full flex flex-col items-center gap-3">
            <h3 className="text-lg text-white font-bold capitalize py-8 max-tablet:text-center">
              fill sign-up information and create your account .
            </h3>
            <div className="w-full grid grid-cols-1 gap-x-6">
              <span className="w-full flex flex-col items-center justify-center mb-4">
                <input
                  type="text"
                  name="fullName"
                  id="fullName"
                  placeholder="enter your full name"
                  className="w-full dark:text-white dark:bg-dark-primary-300 px-4 py-3 shadow mb-4 focus:outline-dark-secondary-200"
                />
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="enter your email address..."
                  className="w-full dark:text-white dark:bg-dark-primary-300 px-4 py-3 shadow mb-4 focus:outline-dark-secondary-200"
                />
              </span>
              <span className="w-full flex flex-col items-center justify-center mb-4">
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="*********"
                  className="w-full dark:text-white dark:bg-dark-primary-300 px-4 py-3 shadow mb-4 focus:outline-dark-secondary-200"
                />
                <input
                  type="text"
                  name="jobTitle"
                  id="jobTitle"
                  placeholder="enter your job title ..."
                  className="w-full dark:text-white dark:bg-dark-primary-300 px-4 py-3 shadow mb-4 focus:outline-dark-secondary-200"
                />
              </span>
              <span className="flex flex-col items-center justify-center">
                <button
                  type="submit"
                  className="w-full py-4 text-lg font-bold capitalize rounded-md dark:bg-dark-secondary-200 mt-8 mb-4 hover:brightness-75"
                >
                  create account
                </button>
                <button
                  type="button"
                  onClick={() => setCurrentModal("LOGIN")}
                  className="underline dark:text-dark-secondary-100 capitalize mb-6 mx-auto"
                >
                  already have an account ? login
                </button>
              </span>
            </div>
            L
          </div>
          <div className="w-1/2 max-md:w-full flex flex-col items-center justify-center gap-3 self-start">
            <h3 className="text-lg text-white font-bold capitalize py-8 max-tablet:text-center">
              use third party services oAuth providers to sign-up
            </h3>
            <div className="w-full grid grid-cols-1 gap-x-6 px-16 max-md:px-0 max-tablet:px-3">
              <button
                type="button"
                className="w-full flex items-center justify-start gap-4 p-3 rounded-md dark:bg-gray-200 mb-4"
              >
                <Image src={googleIcon} alt="google" />

                <p className="text-black text-lg font-medium capitalize leading-3 m-0 p-0">
                  sign-up with google
                </p>
              </button>
              <button
                type="button"
                className="w-full flex items-center justify-start gap-4 p-3 rounded-md dark:bg-slate-200 mb-4"
              >
                <Image src={githubIcon} alt="github" />
                <p className="text-black text-lg font-medium capitalize leading-3 m-0 p-0">
                  sign-up with github
                </p>
              </button>
            </div>
          </div>
        </div>
      </form>
    );
  }
);

export default Signup;
