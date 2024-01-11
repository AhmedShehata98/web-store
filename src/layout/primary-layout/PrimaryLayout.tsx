import React from 'react';
import Header from './header/Header';
import Sidebar from './sidebar/Sidebar';
import NavigationBar from './navigation-bar/NavigationBar';

type Props = {
  children: React.ReactNode;
};
const PrimaryLayout = ({ children }: Props) => {
  return (
    <main className='main-app'>
      <Header />
      <section className='section-wrapper'>
        <Sidebar />
        {children}
      </section>
      <NavigationBar />
    </main>
  );
};

export default PrimaryLayout;
