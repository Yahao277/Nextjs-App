import DashboardTemplate from '@/components/dashboard/Dashboard.template';
import HomeSection from '@/components/dashboard/section/home';
import React from 'react';

const Dashboard = () => {
  return (
    <DashboardTemplate>
      <HomeSection/>
    </DashboardTemplate>
  );
};

export default Dashboard;

