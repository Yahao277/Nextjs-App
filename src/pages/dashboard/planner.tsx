import type { ReactElement } from 'react';

import KeywordPlanner from '@/components/planner';
import { ShellWithGroupedMenu } from '@/components/ShellWithGroupedMenu/App';
import { PageContent } from '@/components/ShellWithGroupedMenu/PageContent';

import type { NextPageWithLayout } from '../_app';

const Planner: NextPageWithLayout = () => {
  return (
    <PageContent>
      <KeywordPlanner />
    </PageContent>
  );
};

Planner.getLayout = (page: ReactElement) => {
  return <ShellWithGroupedMenu>{page}</ShellWithGroupedMenu>;
};

export default Planner;
