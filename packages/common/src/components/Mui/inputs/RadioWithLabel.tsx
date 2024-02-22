import { ForwardedRef, ReactNode, forwardRef } from 'react';
import { FormControlLabel, Radio, RadioProps } from '@mui/material';

export interface IFormControlRadioProps extends RadioProps {
  label?: ReactNode;
}

const Component = (
  { label, ...rest }: IFormControlRadioProps,
  ref: ForwardedRef<IFormControlRadioProps>,
) => {
  return (
    <FormControlLabel ref={ref} control={<Radio {...rest} />} label={label} />
  );
};

export default forwardRef(Component);
