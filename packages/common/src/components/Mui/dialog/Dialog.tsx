import { Children, ForwardedRef, forwardRef, isValidElement } from 'react';
import { Dialog, DialogProps, Paper, styled } from '@mui/material';
import DialogTitle from './DialogTitle';

const Component = (props: DialogProps, ref: ForwardedRef<HTMLDivElement>) => {
  const { children, title } = props;

  const hasTitleComponent = Children.toArray(children).some(
    (child) => isValidElement(child) && child?.type === DialogTitle,
  );

  return (
    <Dialog PaperComponent={StyledDialogPaper} {...props} ref={ref}>
      {hasTitleComponent ? (
        children
      ) : (
        <>
          <DialogTitle>{title}</DialogTitle>
          {children}
        </>
      )}
    </Dialog>
  );
};

const StyledDialogPaper = styled(Paper)`
  min-width: 560px;
  border-radius: 10px;
`;

export default forwardRef(Component);
