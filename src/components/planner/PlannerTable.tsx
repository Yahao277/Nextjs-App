import {
  Button,
  IconButton,
  Stack,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tooltip,
  Tr,
  useToast,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { BiCaretRightCircle, BiInfoSquare, BiTrash } from 'react-icons/bi';

// eslint-disable-next-line import/no-named-as-default
import useProjectContext from '@/contexts/project.context';
import type { PostData } from '@/models/project.model';

import EditableCell from './EditableCell';

const PlannerTable = () => {
  const toast = useToast();
  const router = useRouter();
  const { project: projectData, setPosts } = useProjectContext();

  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(100);

  // Logic for displaying current items
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = projectData.posts.slice(indexOfFirstRow, indexOfLastRow);

  // Logic for displaying page numbers
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(projectData.posts.length / rowsPerPage); i++) {
    pageNumbers.push(i);
  }

  const handleEdit = (id: number, field: string, value: string) => {
    const newData = projectData.posts.map((item, position) =>
      position === indexOfFirstRow + id ? { ...item, [field]: value } : item
    );
    setPosts(newData);
    toast({
      title: 'Data updated.',
      status: 'success',
      duration: 2000,
      isClosable: true,
    });
  };

  const handleDelete = (keyword: string) => {
    const newData = projectData.posts.filter(
      (item) => item.keyword !== keyword
    );
    setPosts(newData);
    toast({
      title: 'Data deleted.',
      status: 'success',
      duration: 2000,
      isClosable: true,
    });
  };

  const handleClick = (event: { target: { id: any } }) => {
    setCurrentPage(Number(event.target.id));
  };

  const showPreview = (item: PostData) => {
    console.log('showPreview: ', item.keyword);
    router.replace(`/dashboard/previewer?idx=${item.idx}`);
  };

  const renderPageNumbers = pageNumbers.map((number) => (
    <Button
      key={number}
      id={number}
      onClick={handleClick}
      bg={currentPage === number ? 'blue.500' : 'gray.100'}
      _hover={{ bg: 'blue.500', color: 'white' }}
      color={currentPage === number ? 'white' : 'gray.700'}
      mr={1}
      mb={2}
    >
      {number}
    </Button>
  ));

  return (
    <Stack spacing={4}>
      <Table variant="simple" size="sm">
        <Thead>
          <Tr>
            <Th>Keyword</Th>
            <Th>Title</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {currentRows.map((item, pos) => (
            <Tr key={pos}>
              {projectData.projectType === 'GPT' && (
                <>
                  <Td>
                    <EditableCell
                      submitOnBlur={false}
                      value={item.keyword}
                      onSubmit={(value) => handleEdit(pos, 'keyword', value)}
                    />
                  </Td>
                  <Td>
                    <EditableCell
                      submitOnBlur={false}
                      value={item.title}
                      onSubmit={(value) => handleEdit(pos, 'title', value)}
                    />
                  </Td>
                </>
              )}

              {projectData.projectType === 'SCRAPED' && (
                <>
                  <Td>
                    <EditableCell
                      submitOnBlur={false}
                      value={item.keyword}
                      onSubmit={(value) => handleEdit(pos, 'keyword', value)}
                    />
                  </Td>
                  <Td>
                    <EditableCell
                      submitOnBlur={false}
                      value={item.title}
                      onSubmit={(value) => handleEdit(pos, 'title', value)}
                    />
                  </Td>
                </>
              )}

              <Td>
                <Tooltip
                  label="Show Detail"
                  aria-label="Show detail"
                  fontSize={'sm'}
                >
                  <IconButton
                    aria-label="Detail"
                    icon={<BiInfoSquare />}
                    size={'sm'}
                    mr={2}
                    onClick={() => showPreview(item)}
                  />
                </Tooltip>
                <Tooltip
                  label="Regenerate"
                  aria-label="Regenerate"
                  fontSize={'sm'}
                >
                  <IconButton
                    aria-label="Regenerate"
                    icon={<BiCaretRightCircle />}
                    isDisabled={true}
                    size={'sm'}
                    mr={2}
                    onClick={() => console.log('Generate age')}
                  />
                </Tooltip>
                <Tooltip label="Delete" aria-label="delete" fontSize={'sm'}>
                  <IconButton
                    aria-label="Delete"
                    isDisabled={true}
                    size={'sm'}
                    icon={<BiTrash />}
                    onClick={() => handleDelete(item.keyword)}
                  />
                </Tooltip>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      <Stack direction="row" justifyContent="center">
        {renderPageNumbers}
      </Stack>
    </Stack>
  );
};

export default PlannerTable;
