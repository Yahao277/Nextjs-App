// @ts-nocheck
/* eslint-disable no-plusplus */
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
import { useCallback, useMemo } from 'react';
import { BiCaretRightCircle, BiInfoSquare, BiTrash } from 'react-icons/bi';
import { usePagination, useTable } from 'react-table';

// eslint-disable-next-line import/no-named-as-default
import useProjectContext from '@/contexts/project.context';
import type { PostData } from '@/models/project.model';

import EditableCell from './EditableCell';

const PlannerTable = () => {
  const toast = useToast();
  const router = useRouter();
  const {
    data: { project: projectData, posts },
    setPosts,
  } = useProjectContext();

  const handleEdit = useCallback((id: number, field: string, value: string) => {
    const newData = posts.map((item, position) =>
      position === indexOfFirstRow + id ? { ...item, [field]: value } : item
    );
    // setPosts(newData);
    toast({
      title: 'Data updated.',
      status: 'success',
      duration: 2000,
      isClosable: true,
    });
  }, []);

  const handleDelete = useCallback((keyword: string) => {
    const newData = posts.filter((item) => item.keyword !== keyword);
    // setPosts(newData);
    toast({
      title: 'Data deleted.',
      status: 'success',
      duration: 2000,
      isClosable: true,
    });
  }, []);

  const showPreview = useCallback((item: PostData) => {
    console.log('showPreview: ', item.keyword);
    router.replace(`/dashboard/previewer?idx=${item.idx}`);
  }, []);

  const columns = useMemo(
    () => [
      {
        Header: 'Keyword',
        accessor: 'keyword',
        Cell: ({ value, row: { index } }) => (
          <EditableCell
            isDisabled={true}
            submitOnBlur={false}
            value={value}
            onSubmit={(newValue) => handleEdit(index, 'keyword', newValue)}
          />
        ),
      },
      {
        Header: 'Title',
        accessor: 'title',
        Cell: ({ value, row: { index } }) => (
          <EditableCell
            isDisabled={true}
            submitOnBlur={false}
            value={value}
            onSubmit={(newValue) => handleEdit(index, 'title', newValue)}
          />
        ),
      },
      {
        Header: 'Status',
        accessor: 'status',
        Cell: ({ value, row: { _index } }) => <div>{value}</div>,
      },
      {
        Header: 'Actions',
        accessor: 'actions',
        Cell: ({ row: { original } }) => (
          <>
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
                onClick={() => showPreview(original)}
              />
            </Tooltip>
            <Tooltip label="Regenerate" aria-label="Regenerate" fontSize={'sm'}>
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
                onClick={() => handleDelete(original.keyword)}
              />
            </Tooltip>
          </>
        ),
      },
    ],
    [handleEdit, handleDelete, showPreview]
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data: posts,
      initialState: { pageIndex: 0, pageSize: 100 },
    },
    usePagination
  );

  return (
    <Stack spacing={4}>
      <Table variant="simple" size="sm" {...getTableProps()}>
        <Thead>
          {headerGroups.map((headerGroup, i) => (
            <Tr {...headerGroup.getHeaderGroupProps()} key={i}>
              {headerGroup.headers.map((column, j) => (
                <Th {...column.getHeaderProps()} key={j}>
                  {column.render('Header')}
                </Th>
              ))}
            </Tr>
          ))}
        </Thead>
        <Tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <Tr {...row.getRowProps()} key={i}>
                {row.cells.map((cell, j) => (
                  <Td {...cell.getCellProps()} key={j}>
                    {cell.render('Cell')}
                  </Td>
                ))}
              </Tr>
            );
          })}
        </Tbody>
      </Table>
      <Stack direction="row" justifyContent="center">
        <Button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {'<<'}
        </Button>{' '}
        <Button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {'<'}
        </Button>{' '}
        <Button onClick={() => nextPage()} disabled={!canNextPage}>
          {'>'}
        </Button>{' '}
        <Button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {'>>'}
        </Button>{' '}
        <span>
          Page{' '}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{' '}
        </span>
        <select
          value={pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value));
          }}
        >
          {[100, 200, 300].map((pgSize) => (
            <option key={pgSize} value={pgSize}>
              Show {pgSize}
            </option>
          ))}
        </select>
      </Stack>
    </Stack>
  );
};

export default PlannerTable;
