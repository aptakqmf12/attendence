import { ReactNode, useCallback, useLayoutEffect, useState } from 'react';
import {
  Collapse,
  CollapseProps,
  ListItemIconProps,
  ListItemTextProps,
  ListItemText,
  styled,
} from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import ListItemButton from './ListItemButton';
import ListItemIcon from './ListItemIcon';

interface ICollapseListItemProps extends CollapseProps {
  ListItemIconProps?: ListItemIconProps;
  ListItemTextProps?: ListItemTextProps;
  expandLessIcon?: ReactNode;
  expandMoreIcon?: ReactNode;
}

const Component = ({
  ListItemIconProps,
  ListItemTextProps,
  expandLessIcon = <ExpandLess />,
  expandMoreIcon = <ExpandMore />,
  in: inProp,
  ...rest
}: ICollapseListItemProps) => {
  const [open, setOpen] = useState(inProp);

  const handleClick = useCallback(() => {
    setOpen((state) => !state);
  }, []);

  useLayoutEffect(() => {
    setOpen(inProp);
  }, [inProp]);

  return (
    <>
      <ListItemButton onClick={handleClick}>
        <StyledListItemIcon {...ListItemIconProps} />
        <ListItemText {...ListItemTextProps} />
        {open ? expandLessIcon : expandMoreIcon}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit {...rest} />
    </>
  );
};

const StyledListItemIcon = styled(ListItemIcon)`
  color: inherit;
`;

export default Component;
