import DashboardTemplate from '@/components/dashboard/Dashboard.template';
import PreviewerSection from '@/components/dashboard/section/previewer';
import React from 'react';

const Previewer = () => {
  return (
    <DashboardTemplate>
      <PreviewerSection/>
    </DashboardTemplate>
  );
};

export default Previewer;