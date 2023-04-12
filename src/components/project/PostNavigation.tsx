import { Box, Button, chakra, Input, Switch, VStack } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { BsCaretRightFill } from 'react-icons/bs';

import { usePostContext } from '@/contexts/post.context';
import { useProjectContext } from '@/contexts/project.context';
import { ProjectApi } from '@/services/project.service';

enum TitleType {
  title = 'title',
  id = 'id',
}

interface NavItemProps {
  href?: string;
  label: string;
  subtle?: boolean;
  active?: boolean;
  icon: React.ReactElement;
  endElement?: React.ReactElement;
  children?: React.ReactNode;
}

const PostNavigation = (props: NavItemProps) => {
  const {
    data: { project },
  } = useProjectContext();
  const { post, setPost } = usePostContext();
  const [titleType, setTitleType] = React.useState('id');
  const [textLabel, setTextLabel] = React.useState('');
  const { subtle, children, endElement } = props;

  const switchType = () => {
    if (titleType === TitleType.title) {
      setTitleType(TitleType.id);
    } else {
      setTitleType(TitleType.title);
    }
  };

  useEffect(() => {
    if (titleType === TitleType.title) {
      setTextLabel(post.title || TitleType.title);
    } else {
      setTextLabel(post.idx.toString() || TitleType.id);
    }
  }, [titleType, post]);

  const getNextPost = () => {
    console.log('getNextPost');
    const current = post.idx;
    ProjectApi.getPostByIdx(project.id as string, current + 1).then(
      (postRes) => {
        console.log('post: ', postRes);
        setPost(postRes);
        return postRes;
      }
    );
  };

  const getPrevPost = () => {
    console.log('getPrevPost');
    const current = post.idx;
    if (current === 0) return;
    if (project.name === 'No') return;
    ProjectApi.getPostByIdx(project.id as string, current - 1).then(
      (postRes) => {
        console.log('post: ', postRes);
        setPost(postRes);
        return postRes;
      }
    );
  };

  // return (
  //   <Box>
  //   <strong>Project:</strong> {project}
  //   <Divider orientation="horizontal" margin={2}/>

  //   <Input type="text" placeholder={`Post ${titleType}`} />
  //   <Button size='xs' margin={2}>prev</Button>
  //   <Button size='xs' margin={2}>next</Button>
  //   <Switch colorScheme='teal' onChange={switchType}/>

  // </Box>
  // );

  return (
    <VStack
      w="full"
      px="3"
      py="2"
      align="start"
      userSelect="none"
      rounded="md"
      transition="all 0.2s"
    >
      <Box
        flex="1"
        fontWeight="inherit"
        color={subtle ? 'gray.400' : undefined}
      >
        <chakra.span>Project:</chakra.span> {project.name}
      </Box>
      <Box
        flex="1"
        fontWeight="inherit"
        color={subtle ? 'gray.400' : undefined}
      >
        <Input
          borderColor="gray.500"
          type="text"
          size="sm"
          placeholder={`Post ${textLabel}`}
        />
      </Box>
      <Box>
        <Button
          borderColor="gray.500"
          variant="outline"
          size="xs"
          margin={1}
          onClick={getPrevPost}
          _hover={{ bg: 'gray.500' }}
        >
          prev
        </Button>
        <Button
          borderColor="gray.500"
          variant="outline"
          size="xs"
          margin={1}
          onClick={getNextPost}
          _hover={{ bg: 'gray.500' }}
        >
          next
        </Button>
        <Switch colorScheme="teal" onChange={switchType} />
        <Button
          borderColor="gray.500"
          variant="outline"
          size="xs"
          margin={1}
          _hover={{ bg: 'gray.500' }}
        >
          Get
        </Button>
      </Box>

      {endElement && !children && <Box>{endElement}</Box>}
      {children && <Box fontSize="xs" flexShrink={0} as={BsCaretRightFill} />}
    </VStack>
  );
};

export default PostNavigation;
