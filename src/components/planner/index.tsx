import { Box } from '@chakra-ui/react';

import NavBar from './NavBar';
import PlannerTable from './PlannerTable';

const KeywordPlanner = () => {
  return (
    <>
      <NavBar />
      <Box p={4}>
        <PlannerTable />
      </Box>
    </>
  );
};

export default KeywordPlanner;
