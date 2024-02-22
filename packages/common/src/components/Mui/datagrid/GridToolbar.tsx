import { Key } from 'react';
import { ButtonProps, SxProps } from '@mui/material';
import { Theme } from '@mui/system';
import { GridToolbarContainer } from '@mui/x-data-grid';
import Button from '../inputs/Button';

interface IGridToolProps extends ButtonProps {
  key: Key;
}

interface IGridToolbarProps {
  tools: IGridToolProps[];
  containerSx?: SxProps<Theme>;
}

const Component = ({ containerSx, tools }: IGridToolbarProps) => {
  return (
    <GridToolbarContainer
      sx={{ py: 1, gap: 1, justifyContent: 'flex-end', ...containerSx }}
    >
      {tools.map(({ key, ...rest }) => (
        <Button key={key} {...rest} />
      ))}
    </GridToolbarContainer>
  );
};

export default Component;
