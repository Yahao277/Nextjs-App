import { ShellWithGroupedMenu } from '@/components/ShellWithGroupedMenu/App';
import { PageContent } from '@/components/ShellWithGroupedMenu/PageContent';
import { PageHeader } from '@/components/ShellWithGroupedMenu/PageHeader';
import React from 'react';

// const Dashboard = () => {
//   return (
//     <DashboardTemplate>
//       <HomeSection/>
//     </DashboardTemplate>
//   );
// };

const Dashboard = () => {
  return (
    <ShellWithGroupedMenu>
      <PageHeader/>
      <PageContent>
        Hello Dashboard
      </PageContent>
    </ShellWithGroupedMenu>
  );
};

export default Dashboard;

