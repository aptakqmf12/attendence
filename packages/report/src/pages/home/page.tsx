import { useState, useEffect } from 'react';
import { Container, Pagination, Box } from '@mui/material';
import { GridColDef } from '@mui/x-data-grid';
import DataGrid from '@wooriga/common/src/components/Mui/datagrid/DataGrid';
import { Button } from '@wooriga/common/src/components';
import DialogModal from './component/modal';
import { getAttendeeList } from '../../api/index';
import { formatDateTime, formatPhoneNumber } from '../../utils';
import { User } from '../../types/index';
import Typography from '@mui/material/Typography';

const PAGE_PER_SIZE = 10;

const Page = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [list, setList] = useState<User[]>([]);
  const [modal, setModal] = useState<{ open: boolean; user?: User }>({
    open: false,
    user: undefined,
  });

  const columns: GridColDef[] = [
    {
      field: 'id',
      headerName: '번호',
      width: 100,
      align: 'center',
    },
    {
      field: 'name',
      headerName: '이름',
      flex: 1,
    },
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
      field: 'btn',
      headerName: '변경',
      renderCell: (params) => {
        return (
          <Button
            size="small"
            variant="outlined"
            onClick={() => setModal({ open: true, user: params.row })}
          >
            변경
          </Button>
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

  const record = async () => {
    try {
      const res = await getAttendeeList();

      if (res.status === 200) {
        setList(res.data.result);
      }
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    record();
  }, []);

  const filteredList = list
    .sort((after, before) => Number(before.id) - Number(after.id))
    .slice((currentPage - 1) * PAGE_PER_SIZE, currentPage * PAGE_PER_SIZE);

  return (
    <Container maxWidth="xl" style={{ paddingTop: 40 }}>
      <Typography fontSize={24} fontWeight={700} mb={2}>
        참석예정자 정보 조회
      </Typography>

      <Box bgcolor={'#fff'} padding={3}>
        <Typography mb={1}>전체 : {list.length.toLocaleString()}</Typography>
        <Box
          display={'flex'}
          flexDirection={'column'}
          justifyContent={'center'}
          alignItems={'center'}
        >
          <Box sx={{ width: '100%', height: 500 }} mb={2}>
            <DataGrid
              sx={{
                width: '100%',
                height: '100%',
                '.MuiDataGrid-columnHeaders': {
                  textAlign: 'center',
                  backgroundColor: '#F5F6F8',
                },
                '.MuiDataGrid-columnHeaderTitleContainer': {
                  justifyContent: 'center',
                },
              }}
              rows={filteredList}
              columns={columns.map((obj) => ({
                ...obj,
                sortable: false,
                disableColumnMenu: true,
              }))}
              autoHeight={false}
              hideFooter
            />
          </Box>

          <Pagination
            count={Math.ceil(list.length / PAGE_PER_SIZE)}
            page={currentPage}
            onChange={handlePaginationChange}
            shape="rounded"
            showFirstButton
            showLastButton
          />
        </Box>
      </Box>

      {modal.open && modal.user && (
        <DialogModal
          {...modal.user}
          handleCloseModal={handleCloseModal}
          refetchFn={record}
        />
      )}
    </Container>
  );
};

export default Page;
