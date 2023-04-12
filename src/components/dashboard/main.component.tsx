import React from 'react';

type IProps = {
  children: React.ReactNode;
};

const DashboardMain = (props: IProps) => {
  return (
    <main className="h-screen overflow-auto px-4 pb-24 md:px-6">
      {props.children}
    </main>
  );
};

export default DashboardMain;
