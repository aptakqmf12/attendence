import { useState, useEffect } from 'react';
import { Container } from '@mui/material';
import { GridColDef } from '@mui/x-data-grid';
import DataGrid from '@wooriga/common/src/components/Mui/datagrid/DataGrid';
import { getAttendeeList } from '../../api/index';
import { User } from '../../types/index';

const Page = () => {
  const [list, setList] = useState<User[]>([]);

  const columns: GridColDef[] = [
    { field: 'id', headerName: '번호', width: 50 },
    { field: 'name', headerName: '이름' },
    { field: 'birth', headerName: '생년월일' },
    { field: 'phone', headerName: '연락처' },
    { field: 'test1', headerName: '참석 예정 유형' },
    { field: 'test2', headerName: '변경' },
  ];

  useEffect(() => {
    getAttendeeList().then(() => {});

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
      <DataGrid rows={list} columns={columns} />
    </Container>
  );
};

export default Page;
