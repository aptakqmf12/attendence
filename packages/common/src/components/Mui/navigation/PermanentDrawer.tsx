import { ReactNode } from 'react';
import { CSSObject } from '@emotion/react';
import { Box, Drawer, styled, Theme } from '@mui/material';

interface IPermanentDrawerProps {
  open?: boolean;
  foldedWidth: number;
  unfoldedWidth: number;
  children: ReactNode;
}

const Component = ({
  open,
  foldedWidth,
  unfoldedWidth,
  children,
}: IPermanentDrawerProps) => {
  return (
    <StyledDrawer
      variant="permanent"
      open={open}
      foldedWidth={foldedWidth}
      unfoldedWidth={unfoldedWidth}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
          width: unfoldedWidth,
        }}
      >
        {children}
      </Box>
    </StyledDrawer>
  );
};

const openedMixin = (theme: Theme, width: number): CSSObject => ({
  width,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme, width: number): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `${width}px`,
  [theme.breakpoints.up('sm')]: {
    width: `${width}px`,
  },
});

const StyledDrawer = styled(Drawer, {
  shouldForwardProp: (prop) =>
    prop !== 'open' && prop !== 'foldedWidth' && prop !== 'unfoldedWidth',
})<IPermanentDrawerProps>(({ theme, open, foldedWidth, unfoldedWidth }) => ({
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  // color: theme.palette.text.primary,

  ...(open
    ? openedMixin(theme, unfoldedWidth)
    : closedMixin(theme, foldedWidth)),

  '& .MuiDrawer-paper': {
    backgroundColor: theme.palette.primary.main,
    flex: 1,

    ...(open
      ? openedMixin(theme, unfoldedWidth)
      : closedMixin(theme, foldedWidth)),
  },
}));

export default Component;
