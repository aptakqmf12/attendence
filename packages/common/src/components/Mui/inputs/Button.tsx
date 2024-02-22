import { Button, ButtonProps, CircularProgress } from '@mui/material';
import { ForwardedRef, forwardRef, ReactNode } from 'react';
import { ILinkBehaviorProps } from '../link/LinkBehavior';

export interface IButtonProps extends ButtonProps {
  loading?: boolean;
  loadingIndicator?: ReactNode;
  loadingPosition?: 'start' | 'end' | 'center';
  preventScrollReset?: ILinkBehaviorProps['preventScrollReset'];
  relative?: ILinkBehaviorProps['relative'];
  reloadDocument?: ILinkBehaviorProps['reloadDocument'];
  replace?: ILinkBehaviorProps['replace'];
  state?: ILinkBehaviorProps['state'];
}

const Component = (
  {
    variant = 'contained',
    startIcon,
    endIcon,
    loading,
    loadingIndicator = <CircularProgress color="inherit" size={16} />,
    loadingPosition = 'center',
    children,
    ...rest
  }: IButtonProps,
  ref: ForwardedRef<HTMLButtonElement>,
) => {
  const loadingProps = {
    startIcon:
      loadingPosition === 'start' && loading ? loadingIndicator : startIcon,
    children:
      loadingPosition === 'center' && loading ? loadingIndicator : children,
    endIcon: loadingPosition === 'end' && loading ? loadingIndicator : endIcon,
  };

  return <Button variant={variant} {...loadingProps} {...rest} ref={ref} />;
};

export default forwardRef(Component);
