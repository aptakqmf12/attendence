import { useState, useEffect } from 'react';
import { Container, Pagination } from '@mui/material';
import { GridColDef } from '@mui/x-data-grid';
import DataGrid from '@wooriga/common/src/components/Mui/datagrid/DataGrid';
import DialogModal from './component/modal';
import { getAttendeeList, getAttendee } from '../../api/index';
import { formatDateTime, formatPhoneNumber } from '../../utils';
import { User } from '../../types/index';

import Header from './component/header';
const Page = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [list, setList] = useState<User[]>([]);
  const [modal, setModal] = useState<{ open: boolean; user: User | undefined }>(
    {
      open: false,
      user: undefined,
    },
  );

  const columns: GridColDef[] = [
    { field: 'id', headerName: '번호', width: 50, align: 'center' },
    { field: 'name', headerName: '이름', flex: 1 },
    {
      field: 'birth',
      headerName: '생년월일',
      renderCell: (params) => {
        return formatDateTime(params.row.birth);
      },
      flex: 1,
    },
    {
      field: 'phone',
      headerName: '연락처',
      renderCell: (params) => {
        return formatPhoneNumber(params.row.phone);
      },
      flex: 1,
    },
    {
      field: 'attendance',
      headerName: '참석 예정 유형',
      renderCell: (params) => {
        const attendance = params.row.attendance;
        return attendance.label;
      },
      flex: 1,
    },
    {
      field: '',
      headerName: '변경',
      renderCell: (params) => {
        return (
          <button
            onClick={() => {
              setModal({ open: true, user: params.row });
            }}
          >
            변경
          </button>
        );
      },
      width: 100,
      align: 'center',
    },
  ];

  const handleCloseModal = () => {
    setModal((prev) => ({ ...prev, open: false }));
  };

  const handlePaginationChange = (_, page: number) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    // list 요청
    // setList
  }, [currentPage]);

  useEffect(() => {
    setList([
      {
        id: '1',
        name: '이동주',
        birth: '19630312',
        phone: '01052732287',
        createdAt: '2023.01.12T13:10:00',
        attendance: {
          label: '미정',
          code: 'UNDETERMINED',
        },
      },
      {
        id: '2',
        name: '손미나',
        birth: '19950210',
        phone: '01063591109',
        createdAt: '2023.01.12T13:10:00',
        attendance: {
          label: '미정',
          code: 'UNDETERMINED',
        },
      },
    ]);
  }, []);
  return (
    <Container
      maxWidth="xl"
      sx={{ paddingTop: '24px', paddingBottom: '24px', height: 400 }}
    >
      <Header />

      <DataGrid rows={list} columns={columns} />

      <Pagination
        count={Math.ceil(list.length / 10)}
        page={currentPage}
        onChange={handlePaginationChange}
        shape="rounded"
        showFirstButton
        showLastButton
      />

      {modal.open && modal.user && (
        <DialogModal {...modal.user} handleCloseModal={handleCloseModal} />
      )}
    </Container>
  );
};

export default Page;
