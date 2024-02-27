import { useState, useEffect } from 'react';
import { Container, Pagination, Box } from '@mui/material';
import { GridColDef } from '@mui/x-data-grid';
import DataGrid from '@wooriga/common/src/components/Mui/datagrid/DataGrid';
import DialogModal from './component/modal';
import { getAttendeeList } from '../../api/index';
import { formatDateTime, formatPhoneNumber } from '../../utils';
import { User } from '../../types/index';
import Header from './component/header';

const Page = () => {
  const PAGE_PER_SIZE = 10;
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

  const handlePaginationChange = (
    _: React.ChangeEvent<unknown>,
    page: number,
  ) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    getAttendeeList().then((res) => {
      setList(res.data.result);
    });
  }, []);

  const filteredList = list.slice(
    (currentPage - 1) * PAGE_PER_SIZE,
    currentPage * PAGE_PER_SIZE,
  );

  return (
    <Container maxWidth="xl">
      <Header />

      <Box
        display={'flex'}
        flexDirection={'column'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <DataGrid
          style={{ width: '100%' }}
          rows={filteredList}
          columns={columns}
        />

        <Pagination
          count={Math.ceil(list.length / PAGE_PER_SIZE)}
          page={currentPage}
          onChange={handlePaginationChange}
          shape="rounded"
          showFirstButton
          showLastButton
        />
      </Box>

      {modal.open && modal.user && (
        <DialogModal {...modal.user} handleCloseModal={handleCloseModal} />
      )}
    </Container>
  );
};

export default Page;
