
import { ShellWithGroupedMenu } from '@/components/ShellWithGroupedMenu/App';
import { PageContent } from '@/components/ShellWithGroupedMenu/PageContent';
import { PageHeader } from '@/components/ShellWithGroupedMenu/PageHeader';
import React from 'react';

const Previewer = () => {
  return (
    <ShellWithGroupedMenu>
      <PageHeader/>
      <PageContent>
        Previewer
      </PageContent>
    </ShellWithGroupedMenu>
  );
};

export default Previewer;