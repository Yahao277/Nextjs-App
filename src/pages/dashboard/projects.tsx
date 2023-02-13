import { ShellWithGroupedMenu } from '@/components/ShellWithGroupedMenu/App';
import { PageContent } from '@/components/ShellWithGroupedMenu/PageContent';
import { PageHeader } from '@/components/ShellWithGroupedMenu/PageHeader';
import React from 'react';

const Projects = () => {
  return (
    <ShellWithGroupedMenu>
      <PageHeader/>
      <PageContent/>
    </ShellWithGroupedMenu>
  );
};

export default Projects;