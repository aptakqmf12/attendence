import { DialogContent, DialogContentProps, styled } from '@mui/material';

const Component = (props: DialogContentProps) => {
  return <StyledDialogContent {...props} />;
};

const StyledDialogContent = styled(DialogContent)`
  padding: 0 40px;
`;

export default Component;
