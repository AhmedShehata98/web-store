import React from "react";
import Header from "./header/Header";
import Sidebar from "./sidebar/Sidebar";

type Props = {
  children: React.ReactNode;
};
const PrimaryLayout = ({ children }: Props) => {
  return (
    <main className="w-full h-dvh max-h-dvh flex flex-col items-start justify-start dark:bg-dark-primary-200">
      <Header />
      <section className="w-full h-dvh max-h-dvh overflow-y-auto flex items-start justify-start">
        <Sidebar />
        {children}
      </section>
    </main>
  );
};

export default PrimaryLayout;
