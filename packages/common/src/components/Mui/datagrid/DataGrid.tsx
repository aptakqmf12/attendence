import { styled } from '@mui/material';
import { DataGrid, DataGridProps } from '@mui/x-data-grid';
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';

/**
 * @description
 * DataGrid의 경우 최대한 clean한 상태로 유지하는것을 추천 드립니다. wrapper를 사용해 기능을 건드리기 시작하면 많은 버그가 발생할 가능성이 있습니다.
 * pagination의 경우 해당 페이지 내에서 구현하기 바랍니다. 현재 UI와 맞지 않습니다.
 */

const Component = function (extraProps: DataGridProps) {
  const props: DataGridProps = {
    ...extraProps,
    slots: { ...extraProps.slots, booleanCellTrueIcon: PanoramaFishEyeIcon },
  };

  return <StyledDataGrid {...props} />;
};

const StyledDataGrid = styled(DataGrid)(({ theme }) => ({
  WebkitFontSmoothing: 'auto',
  letterSpacing: 'normal',
  border: 0,
  color: theme.palette.text.secondary,
  ...theme.typography.subtitle1,

  '& .MuiDataGrid-columnHeaders': {
    backgroundColor: theme.palette.background.default,
    border: 0,
    color: theme.palette.text.primary,
  },

  // '& .MuiDataGrid-columnsContainer': {
  //   backgroundColor: theme.palette.background.default,
  // },
  // '& .MuiDataGrid-columnsContainer, .MuiDataGrid-cell': {
  //   borderBottom: `1px solid ${theme.palette.divider}`,
  // },

  '& .MuiDataGrid-cell': {
    // color:
    //   theme.palette.mode === 'light'
    //     ? 'rgba(0,0,0,.85)'
    //     : 'rgba(255,255,255,0.65)',
  },

  '& .MuiPaginationItem-root': {
    borderRadius: 0,
  },

  // '& .MuiDataGrid-virtualScroller::-webkit-scrollbar': {
  //   width: '0.4em',
  // },
  //
  // '& .MuiDataGrid-virtualScroller::-webkit-scrollbar-track': {
  //   background: '#f1f1f1',
  // },
  //
  // '& .MuiDataGrid-virtualScroller::-webkit-scrollbar-thumb': {
  //   borderRadius: '8px',
  //   backgroundColor: '#d8d8d8',
  // },
  //
  // '& .MuiDataGrid-virtualScroller::-webkit-scrollbar-thumb:hover': {
  //   background: '#b7b7b7',
  // },
}));

export default Component;
