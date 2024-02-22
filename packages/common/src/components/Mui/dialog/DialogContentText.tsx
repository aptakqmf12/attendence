import {
  DialogContentText,
  DialogContentTextProps,
  styled,
} from '@mui/material';

const StyledDialogContentText = styled(DialogContentText)``;

const Component = (props: DialogContentTextProps) => {
  return <StyledDialogContentText {...props} />;
};

export default Component;
