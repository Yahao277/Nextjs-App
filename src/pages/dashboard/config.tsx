/* eslint-disable no-underscore-dangle */
import {
  Button,
  Stack,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tooltip,
  Tr,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import { ShellWithGroupedMenu } from '@/components/ShellWithGroupedMenu/App';
import { PageContent } from '@/components/ShellWithGroupedMenu/PageContent';
import { usePostContext } from '@/contexts/post.context';
import { useProjectContext } from '@/contexts/project.context';
import type { GptProject } from '@/models/gpt-project.model';
import { ProjectApi } from '@/services/project.service';

import type { NextPageWithLayout } from '../_app';

const Configuration: NextPageWithLayout = () => {
  const { project, setProject, setPosts } = useProjectContext();
  const { setPost } = usePostContext();

  const [value, setValue] = useState('Nombre proyecto');
  const [projectList, setProjectList] = useState<GptProject[]>([]);

  useEffect(() => {
    console.log('useEffect');
    ProjectApi.getProjectList().then((projects) => {
      setProjectList(projects);
      return projects;
    });
  }, []);

  // useEffect(() => {
  //   console.log('useEffect project');
  //   if (!project._id) return;
  //   console.log('useEffect project: ', project._id);
  //   ProjectApi.getPosts(project._id).then((posts) => {
  //     setPosts(posts);
  //     return posts;
  //   });
  // }, [project]);

  const select = (item: GptProject) => {
    console.log('select: ', item);
    setProject(item);
    ProjectApi.getPosts(item.id).then((posts) => {
      console.log('posts: ', posts);
      setPosts(posts);
      return posts;
    });
    ProjectApi.getPostByIdx(item.id, 0).then((post) => {
      console.log('post: ', post);
      setPost(post);
      return post;
    });
  };

  const start = (item: GptProject) => {
    console.log('start job: ', item);
    ProjectApi.startJob(item.id).then(() => {
      console.log('project: ', item);
      setProject(item);
      return item;
    });
  };

  const stop = (item: GptProject) => {
    console.log('stop job: ', item);
    ProjectApi.stopJob(item.id).then(() => {
      console.log('project: ', item);
      setProject(item);
      return item;
    });
  };

  return (
    <PageContent>
      Projector Actual: {project.name || 'Selecciona un proyecto'}
      {/* <Stack spacing={3}>
        <Input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          size="sm"
          marginTop={2}
        />
        <Button colorScheme="teal" marginTop={2}>
          Select
        </Button>
      </Stack> */}
      <Stack spacing={4} mt={6} w={1000}>
        <Table variant="simple" size="lg">
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Status</Th>
              <Th>Progress</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {projectList.length > 0 &&
              projectList?.map((projectItem, index) => (
                <Tr key={index}>
                  <Td>{projectItem.name}</Td>
                  <Td>{projectItem.status}</Td>
                  <Td>
                    {`${projectItem.progress?.donePosts}/${projectItem.progress?.totalPosts}`}
                  </Td>
                  <Td>
                    <Tooltip label="Start" aria-label="start" fontSize={'md'}>
                      <Button
                        aria-label="start"
                        colorScheme="teal"
                        size={'sm'}
                        onClick={() => start(projectItem)}
                      >
                        Start
                      </Button>
                    </Tooltip>
                    <Tooltip label="Stop" aria-label="stop" fontSize={'md'}>
                      <Button
                        aria-label="stop"
                        colorScheme="teal"
                        size={'sm'}
                        marginX={2}
                        onClick={() => stop(projectItem)}
                      >
                        Stop
                      </Button>
                    </Tooltip>
                    <Tooltip label="Select" aria-label="select" fontSize={'md'}>
                      <Button
                        aria-label="Select"
                        colorScheme="teal"
                        size={'sm'}
                        onClick={() => select(projectItem)}
                      >
                        Select
                      </Button>
                    </Tooltip>
                  </Td>
                </Tr>
              ))}
          </Tbody>
        </Table>
      </Stack>
    </PageContent>
  );
};

Configuration.getLayout = (page) => {
  return <ShellWithGroupedMenu>{page}</ShellWithGroupedMenu>;
};

export default Configuration;
