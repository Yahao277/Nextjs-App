import {
  Avatar,
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Stack,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import type { ReactNode } from 'react';
import { BiBookAdd, BiDownload, BiFilterAlt } from 'react-icons/bi';
import { FiMenu, FiPlus } from 'react-icons/fi';

import BulkEditModal from './modals/BulkEditModal';
import FilterModal from './modals/FilterModal';

const Links = ['Dashboard TODO', 'Projects TODO', 'Team TODO'];

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}
  >
    {children}
  </Link>
);

const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isOpenBulkModal,
    onOpen: onOpenBulkModal,
    onClose: onCloseBulkModal,
  } = useDisclosure();
  const {
    isOpen: isOpenFilterModal,
    onOpen: onOpenFilterModal,
    onClose: onCloseFilterModal,
  } = useDisclosure();

  const handleClickFilter = () => {
    if (isOpenFilterModal) {
      onCloseFilterModal();
    } else {
      onOpenFilterModal();
    }
  };

  const handleClickBulkAdd = () => {
    if (isOpenBulkModal) {
      onCloseBulkModal();
    } else {
      onOpenBulkModal();
    }
  };
  const handleClickBulkEdit = () => {
    if (isOpenBulkModal) {
      onCloseBulkModal();
    } else {
      onOpenBulkModal();
    }
  };
  const onClearFilter = () => {
    // TODO: clear filter
    onCloseFilterModal();
  };

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <FiMenu /> : <BiBookAdd />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box>Name/Type</Box>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}
            >
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <Button
              variant={'solid'}
              colorScheme={'teal'}
              size={'sm'}
              mr={4}
              onClick={handleClickFilter}
              leftIcon={<BiFilterAlt />}
            >
              Filter
            </Button>
            <Button
              variant={'solid'}
              colorScheme={'teal'}
              size={'sm'}
              mr={4}
              onClick={handleClickBulkAdd}
              leftIcon={<FiPlus />}
            >
              Bulk Add
            </Button>
            <Button
              variant={'solid'}
              colorScheme={'teal'}
              size={'sm'}
              mr={4}
              onClick={handleClickBulkEdit}
              leftIcon={<FiPlus />}
            >
              Bulk Edit
            </Button>
            <Button
              variant={'solid'}
              colorScheme={'teal'}
              size={'sm'}
              mr={4}
              leftIcon={<BiDownload />}
            >
              Export
            </Button>
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}
              >
                <Avatar
                  size={'sm'}
                  src={
                    'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                  }
                />
              </MenuButton>
              <MenuList>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem>Link 3</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}

        <BulkEditModal
          isOpen={isOpenBulkModal}
          onOpen={onOpenBulkModal}
          onClose={onCloseBulkModal}
        />
        <FilterModal
          isOpen={isOpenFilterModal}
          onOpen={onOpenFilterModal}
          onClose={onCloseFilterModal}
          onClearFilter={onClearFilter}
        />
      </Box>
    </>
  );
};

export default NavBar;
