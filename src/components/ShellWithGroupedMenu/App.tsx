import {
  Box,
  Circle,
  Flex,
  Stack,
  useColorModeValue as mode,
} from '@chakra-ui/react';
import * as React from 'react';
import {
  BiBuoy,
  BiCalendar,
  BiCog,
  BiCreditCard,
  BiHome,
  BiPurchaseTagAlt,
  BiRecycle,
  BiRedo,
  BiUserCircle,
  BiWallet,
} from 'react-icons/bi';

import PostNavigation from '../project/PostNavigation';
import { AccountSwitcher } from './AccountSwitcher';
import { NavGroup } from './NavGroup';
import { NavItem } from './NavItem';

export const ShellWithGroupedMenu = (props: { children?: React.ReactNode }) => {
  return (
    <Box height="100vh" overflow="hidden" position="relative">
      <Flex h="full" id="app-container">
        <Box w="64" bg="gray.900" color="white" fontSize="sm">
          <Flex h="full" direction="column" px="4" py="4">
            <AccountSwitcher />
            <Stack spacing="8" flex="1" overflow="auto" pt="8">
              <Stack spacing="1">
                <NavItem active icon={<BiHome />} label="Get Started" />
                <PostNavigation
                  icon={<BiCreditCard />}
                  label="Current Project"
                />
              </Stack>
              <NavGroup label="Gpt">
                <NavItem
                  icon={<BiWallet />}
                  label="Projects Status"
                  href="/dashboard/config/"
                />
                <NavItem
                  icon={<BiRedo />}
                  label="Create"
                  href="/dashboard/create/"
                />
                <NavItem
                  icon={<BiCalendar />}
                  label="Planner"
                  href="/dashboard/planner/"
                />
              </NavGroup>

              <NavGroup label="Scraping">
                <NavItem
                  icon={<BiCreditCard />}
                  label="Overview"
                  href="/dashboard/"
                />
                <NavItem
                  icon={<BiUserCircle />}
                  label="Previewer"
                  href="/dashboard/previewer/"
                />
                <NavItem icon={<BiPurchaseTagAlt />} label="Plans" />
                <NavItem icon={<BiRecycle />} label="Subsription" />
              </NavGroup>
            </Stack>
            <Box>
              <Stack spacing="1">
                <NavItem subtle icon={<BiCog />} label="Settings" />
                <NavItem
                  subtle
                  icon={<BiBuoy />}
                  label="Help & Support"
                  endElement={<Circle size="2" bg="blue.400" />}
                />
              </Stack>
            </Box>
          </Flex>
        </Box>
        <Box bg={mode('gray.100', 'gray.800')} flex="1" p="6" overflow="scroll">
          {props.children}
          {/* <Box
            w="full"
            h="full"
            rounded="lg"
            border="3px dashed currentColor"
            color={mode('gray.200', 'gray.700')}
          /> */}
        </Box>
      </Flex>
    </Box>
  );
};
