import { DialogActions, DialogActionsProps, styled } from '@mui/material';

const Component = (props: DialogActionsProps) => {
  return <StyledDialogActions {...props} />;
};

const StyledDialogActions = styled(DialogActions)`
  padding: 40px;
`;

export default Component;
