import { createTheme, PaletteMode, Theme } from '@mui/material';
import { koKR as coreKoKR } from '@mui/material/locale';
import { koKR as dataGridKoKR } from '@mui/x-data-grid/locales';
import LinkBehavior from '../../components/Mui/link/LinkBehavior';

// https://mui.com/material-ui/customization/palette/
const commonTheme = {
  // tonalOffset, contrast threshold goes here
  typography: {
    fontFamily:
      '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: '700',
    },
    h2: {
      fontSize: '2.25rem',
      fontWeight: '700',
    },
    h3: {
      fontSize: '2rem',
      fontWeight: '700',
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: '700',
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: '700',
    },
    h6: {
      fontSize: '1.125rem',
      fontWeight: '700',
    },
  },
  shape: { borderRadius: 10 },
  components: {
    // MuiButton: {
    //   styleOverrides: {
    //     contained: {
    //       boxShadow: 'none',
    //     },
    //   },
    //   variants: [
    //     {
    //       props: { size: 'large' },
    //       style: {
    //         fontSize: '16px',
    //         fontStyle: 'normal',
    //         fontWeight: '400',
    //         lineHeight: '100%',
    //         padding: '18px 68px',
    //         borderRadius: '8px',
    //       },
    //     },
    //     {
    //       props: { size: 'extraSmall' },
    //       style: {
    //         fontSize: '16px',
    //         fontStyle: 'normal',
    //         fontWeight: '400',
    //         lineHeight: '100%',
    //         padding: '6px 12px',
    //         borderRadius: '6px',
    //         minWidth: 0,
    //       },
    //     },
    //     {
    //       props: { size: 'mini' },
    //       style: {
    //         fontSize: '14px',
    //         fontStyle: 'normal',
    //         fontWeight: '400',
    //         lineHeight: '100%',
    //         padding: '4px 8px',
    //         borderRadius: '6px',
    //         minWidth: 0,
    //       },
    //     },
    //   ],
    // },

    MuiAppBar: {
      styleOverrides: {
        root: {
          height: 60,
          minHeight: 60,
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          height: 60,
          minHeight: 60,
        },
        regular: {
          height: 60,
          minHeight: 60,
        },
      },
    },

    MuiTextField: {
      styleOverrides: {
        root: {
          padding: 0,
          '& .MuiInputBase-root': {
            borderRadius: '7px',
          },
        },
      },
    },

    MuiList: { styleOverrides: { root: { padding: 0 } } },

    MuiListItem: { styleOverrides: { root: { padding: 0 } } },

    MuiDialogTitle: {
      styleOverrides: {
        root: ({ theme }: { theme: Theme }) => theme.typography.h4,
      },
    },

    MuiButtonBase: {
      defaultProps: {
        LinkComponent: LinkBehavior,
      },
    },

    MuiLink: {
      defaultProps: {
        component: LinkBehavior,
      },
    },
  },

  // breakpoints: {
  //   values: {
  //     xs: 0,
  //     sm: 600,
  //     md: 900,
  //     lg: 1200,
  //     xl: 1536,
  //   },
  // },
};

const lightTheme = createTheme({
  palette: {
    mode: 'light',

    primary: {
      main: '#006dd0',
    },

    error: { main: '#df3f49' },

    background: {
      default: '#f5f6f8',
    },
  },
  components: {
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          color: 'red',
        },
      },
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',

    primary: {
      main: '#539eff',
    },

    error: {
      main: '#ff3d3f',
    },
  },
});

export const getTheme = (mode: PaletteMode) =>
  createTheme(
    mode === 'light' ? lightTheme : darkTheme,
    commonTheme,
    coreKoKR,
    dataGridKoKR,
  );
