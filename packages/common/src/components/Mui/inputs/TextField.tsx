import { ForwardedRef, forwardRef } from 'react';
import { TextField, TextFieldProps } from '@mui/material';

const Component = (
  { ...rest }: TextFieldProps,
  ref: ForwardedRef<HTMLDivElement>,
) => {
  return <TextField ref={ref} margin="dense" {...rest} />;
};

export default forwardRef(Component);
