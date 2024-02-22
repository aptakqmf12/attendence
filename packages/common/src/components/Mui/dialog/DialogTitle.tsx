import { DialogTitle, DialogTitleProps, styled } from '@mui/material';

const Component = (props: DialogTitleProps) => {
  return <StyledDialogTitle {...props} />;
};

const StyledDialogTitle = styled(DialogTitle)`
  padding: 40px;
  text-align: center;
`;

export default Component;
