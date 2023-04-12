import React from 'react';

import { ShellWithGroupedMenu } from '@/components/ShellWithGroupedMenu/App';
import { PageContent } from '@/components/ShellWithGroupedMenu/PageContent';
import { PageHeader } from '@/components/ShellWithGroupedMenu/PageHeader';

const Projects = () => {
  return (
    <ShellWithGroupedMenu>
      <PageHeader />
      <PageContent />
    </ShellWithGroupedMenu>
  );
};

export default Projects;
