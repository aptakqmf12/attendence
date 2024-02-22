import { ListItemButton, ListItemButtonProps, styled } from '@mui/material';
import { ILinkBehaviorProps } from '../link/LinkBehavior';

interface IListItemButtonProps extends ListItemButtonProps {
  href?: ILinkBehaviorProps['href'];
  preventScrollReset?: ILinkBehaviorProps['preventScrollReset'];
  relative?: ILinkBehaviorProps['relative'];
  reloadDocument?: ILinkBehaviorProps['reloadDocument'];
  replace?: ILinkBehaviorProps['replace'];
  state?: ILinkBehaviorProps['state'];
}

const Component = ({ ...rest }: IListItemButtonProps) => {
  return <StyledListItemButton {...rest} />;
};

const StyledListItemButton = styled(ListItemButton)`
  padding: 12px;
`;

export default Component;
