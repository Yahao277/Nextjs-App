import React from 'react';
import HomeSection from './section/home';

type IProps = {
  children: React.ReactNode;
};

const DashboardMain = (props: IProps) => {
  return (
    <main className="h-screen px-4 pb-24 overflow-auto md:px-6">
      {props.children}
    </main>
  );
}

export default DashboardMain;