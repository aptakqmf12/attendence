import { ListItemIconProps, ListItemIcon, styled } from '@mui/material';

interface IListItemIconProps extends ListItemIconProps {}

const Component = ({ ...rest }: IListItemIconProps) => {
  return <StyledListItemIcon {...rest} />;
};

const StyledListItemIcon = styled(ListItemIcon)`
  color: inherit;
  min-width: 36px;
`;

export default Component;
