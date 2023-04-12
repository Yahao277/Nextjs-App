import {
  Box,
  Button,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  ListItem,
  UnorderedList,
} from '@chakra-ui/react';
import type { ReactElement } from 'react';
import React from 'react';
import { BiDownload, BiPlay } from 'react-icons/bi';

import ButtonWithLoading from '@/components/commons/ButtonWithLoading';
import { ShellWithGroupedMenu } from '@/components/ShellWithGroupedMenu/App';
import { PageContent } from '@/components/ShellWithGroupedMenu/PageContent';

import type { NextPageWithLayout } from '../_app';

// const Dashboard = () => {
//   return (
//     <DashboardTemplate>
//       <HomeSection/>
//     </DashboardTemplate>
//   );
// };

const StageDivider = (props: { children?: JSX.Element | string }) => {
  return (
    <Flex w="100%" justifyContent="center" mb="2%" mt={4}>
      {props.children}
    </Flex>
  );
};

const StageForm = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  const handleButtonClick: () => Promise<any> = async () => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');
    const data = await response.json();
    console.log(data);
    return true;
  };
  return (
    <Box maxWidth="600px" p={6} m="10px auto" as="form">
      <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
        Stages
      </Heading>
      <StageDivider> Stage1: Upload Csv File </StageDivider>
      <FormControl mt="2%">
        <FormLabel htmlFor="email" fontWeight={'normal'}>
          Original Csv file:
        </FormLabel>
        <Input id="csv-file" type="file" />
      </FormControl>
      <StageDivider> Stage2: Extract Links </StageDivider>
      <Flex>
        <FormControl mr="5%">
          <ButtonWithLoading
            onButtonClick={handleButtonClick}
            variant={'solid'}
            size={'sm'}
            mr={4}
            colorScheme="blue"
            id="amazon-links"
            aria-label="Extract Amazon links"
            leftIcon={<BiDownload />}
          >
            Extract amazon links
          </ButtonWithLoading>{' '}
          done
        </FormControl>

        <FormControl mr="5%">
          <Button
            variant={'solid'}
            colorScheme="blue"
            size={'sm'}
            mr={4}
            id="interlinks"
            aria-label="Extract Interlinks"
            leftIcon={<BiDownload />}
          >
            Extract Interlinks
          </Button>
          done
        </FormControl>

        <FormControl mr="5%">
          <Button
            variant={'solid'}
            size={'sm'}
            mr={4}
            colorScheme="blue"
            id="images"
            aria-label="Extract Images"
            leftIcon={<BiDownload />}
          >
            Extract Images
          </Button>
          done
        </FormControl>
      </Flex>
      <StageDivider> Stage3: Upload Links </StageDivider>
      <FormControl mr="5%">
        <FormLabel htmlFor="upload-amazon-links" fontWeight={'normal'}>
          Upload amazon links
        </FormLabel>
        <Input id="upload-amazon-links" type="file" />
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="upload-interlinks" fontWeight={'normal'}>
          Upload Interlinks
        </FormLabel>
        <Input id="upload-interlinks" type="file" />
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="upload-images" fontWeight={'normal'}>
          Upload Images
        </FormLabel>
        <Input id="upload-images" type="file" />
      </FormControl>
      <StageDivider> Stage4: Curate </StageDivider>
      <Button
        variant={'solid'}
        size={'md'}
        mr={4}
        p={4}
        colorScheme="teal"
        id="curate"
        aria-label="Curate"
        leftIcon={<BiPlay />}
      >
        Start Curate
      </Button>
      done
      <Flex mt={10}>
        <FormControl mr="5%">
          <FormLabel htmlFor="first-name" fontWeight={'normal'}>
            First name
          </FormLabel>
          <Input id="csv-file" type="file" />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="last-name" fontWeight={'normal'}>
            Last name
          </FormLabel>
          <Input id="last-name" placeholder="First name" />
        </FormControl>
      </Flex>
      <FormControl mt="2%">
        <FormLabel htmlFor="email" fontWeight={'normal'}>
          Email address
        </FormLabel>
        <Input id="email" type="email" />
        <FormHelperText>{"We'll never share your email."}</FormHelperText>
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="password" fontWeight={'normal'} mt="2%">
          Password
        </FormLabel>
        <InputGroup size="md">
          <Input
            pr="4.5rem"
            type={show ? 'text' : 'password'}
            placeholder="Enter password"
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? 'Hide' : 'Show'}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
    </Box>
  );
};

const Dashboard: NextPageWithLayout = () => {
  return (
    <PageContent>
      <StageForm />
      Overview:
      <UnorderedList>
        <ListItem>Actual Stage: </ListItem>
        <ListItem>
          Actual Pending Actions:
          <UnorderedList>
            <ListItem>1. </ListItem>
            <ListItem>2. </ListItem>
            <ListItem>3. </ListItem>
          </UnorderedList>
        </ListItem>
      </UnorderedList>
    </PageContent>
  );
};

Dashboard.getLayout = (page: ReactElement) => {
  return <ShellWithGroupedMenu>{page}</ShellWithGroupedMenu>;
};

export default Dashboard;
