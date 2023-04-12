import {
  Box,
  Container,
  Heading,
  Stack,
  useColorModeValue as mode,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import * as React from 'react';

import PostNavigation from '../project/PostNavigation';
import { TabLink } from './TabLink';

const tabElements = [
  {
    name: 'Overview',
    href: '/dashboard/',
  },
  {
    name: 'Previewer',
    href: '/dashboard/previewer/',
  },
  {
    name: 'Configurations',
    href: '/dashboard/config/',
  },
  {
    name: 'Nuevo',
    href: '/dashboard/create/',
  },
];

export const PageHeader = () => {
  const router = useRouter();

  const isCurrent = (href: string) => {
    return router.asPath === href;
  };

  const noRefreshRedirect = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();
    router.replace(e.currentTarget.href);
  };
  return (
    <Box bg={mode('white', 'gray.900')} pt="8" shadow="base" rounded="lg">
      <Container maxW="7xl">
        <Stack direction="row" spacing="4" justify="space-between">
          <Heading size="lg" mb="3" pl="3">
            Projects
          </Heading>
          <PostNavigation />
        </Stack>
        <Stack direction="row" spacing="4">
          {tabElements.map((tab) =>
            isCurrent(tab.href) ? (
              <TabLink
                aria-current="page"
                href={tab.href}
                key={tab.href}
                onClick={noRefreshRedirect}
              >
                {tab.name}
              </TabLink>
            ) : (
              <TabLink
                href={tab.href}
                key={tab.name}
                onClick={noRefreshRedirect}
              >
                {tab.name}
              </TabLink>
            )
          )}
        </Stack>
      </Container>
    </Box>
  );
};
