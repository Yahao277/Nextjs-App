/* eslint-disable no-underscore-dangle */
import {
  IconButton,
  Stack,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tooltip,
  Tr,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { BiPause, BiPlay, BiPointer, BiTrash } from 'react-icons/bi';

import { DeleteModal } from '@/components/commons/modal';
import { ShellWithGroupedMenu } from '@/components/ShellWithGroupedMenu/App';
import { PageContent } from '@/components/ShellWithGroupedMenu/PageContent';
import { usePostContext } from '@/contexts/post.context';
import { useProjectContext } from '@/contexts/project.context';
import { useDeleteProjectModal } from '@/hooks/useDeleteProjectModal';
import type { GptProject } from '@/models/gpt-project.model';
import { ProjectApi } from '@/services/project.service';

import type { NextPageWithLayout } from '../_app';

const Configuration: NextPageWithLayout = () => {
  const router = useRouter();
  const {
    data: { project },
    setProject,
    setPosts,
  } = useProjectContext();
  const { setPost } = usePostContext();

  const [projectList, setProjectList] = useState<GptProject[]>([]);
  const {
    isModalOpen,
    projectToDelete,
    openDeleteModal,
    closeDeleteModal,
    deleteProject,
  } = useDeleteProjectModal();

  useEffect(() => {
    console.log('useEffect');
    ProjectApi.getProjectList().then((projects) => {
      setProjectList(projects);
      return projects;
    });
  }, []);

  const select = (item: GptProject) => {
    console.log('select: ', item);
    setProject(item);
    const postsPromise = ProjectApi.getPosts(item.id).then((posts) => {
      console.log('posts: ', posts);
      setPosts(posts);
      return posts;
    });
    const currentPostPromise = ProjectApi.getPostByIdx(item.id, 0).then(
      (post) => {
        console.log('post: ', post);
        setPost(post);
        return post;
      }
    );
    Promise.all([postsPromise, currentPostPromise]).then(() => {
      // redirect to planner
      router.replace('/dashboard/planner');
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

  const deleteOnConfirm = () => {
    setProjectList(projectList.filter((p) => p.id !== projectToDelete?.id));
    deleteProject();
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
                    <Tooltip label="Select" aria-label="select" fontSize={'md'}>
                      <IconButton
                        aria-label="Select"
                        colorScheme="teal"
                        icon={<BiPointer />}
                        size={'sm'}
                        marginRight={2}
                        onClick={() => select(projectItem)}
                      />
                    </Tooltip>
                    <Tooltip label="Start" aria-label="start" fontSize={'md'}>
                      <IconButton
                        aria-label="start"
                        colorScheme="teal"
                        icon={<BiPlay />}
                        size={'sm'}
                        marginRight={2}
                        onClick={() => start(projectItem)}
                      />
                    </Tooltip>
                    <Tooltip label="Stop" aria-label="stop" fontSize={'md'}>
                      <IconButton
                        aria-label="stop"
                        colorScheme="teal"
                        icon={<BiPause />}
                        size={'sm'}
                        marginRight={2}
                        onClick={() => stop(projectItem)}
                      />
                    </Tooltip>
                    <Tooltip label="Delete" aria-label="delete" fontSize={'md'}>
                      <IconButton
                        icon={<BiTrash />}
                        aria-label="Delete"
                        variant="outline"
                        colorScheme="teal"
                        size={'sm'}
                        marginRight={2}
                        onClick={() => openDeleteModal(projectItem)}
                      />
                    </Tooltip>
                  </Td>
                </Tr>
              ))}
          </Tbody>
        </Table>
      </Stack>
      <DeleteModal
        isModalOpen={isModalOpen}
        onClose={closeDeleteModal}
        onConfirm={deleteOnConfirm}
        onCancel={closeDeleteModal}
      />
    </PageContent>
  );
};

Configuration.getLayout = (page) => {
  return <ShellWithGroupedMenu>{page}</ShellWithGroupedMenu>;
};

export default Configuration;
