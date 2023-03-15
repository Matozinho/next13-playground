import { createTheme } from '@mui/material';
import { ptBR } from '@mui/material/locale';

import { error, grey, info, primary, secondary, success } from './pallete';

export const theme = createTheme(
  {
    palette: {
      primary: {
        ...primary,
        main: primary.main,
      },
      grey: {
        ...grey,
      },
      secondary: {
        ...secondary,
        main: secondary.main,
      },
      common: {
        white: '#FFFFFF',
        black: '#000000',
      },
      error: {
        ...error,
        main: error.main,
      },
      info: {
        ...info,
        main: info.dark,
      },
      success: {
        ...success,
        main: success.main,
      },
    },
    spacing: (factor: number) => factor / 10 + 'rem',
    components: {
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            borderRadius: '10px ',
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: '24px ',
            textTransform: 'none',
          },
        },
      }
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
      },
    },
    typography: {
      h1: {
        fontSize: '96px',
        letterSpacing: '-1.5px',
        lineHeight: '116.7%',
        fontWeight: 'Light',
      },
      h2: {
        fontSize: '60px',
        letterSpacing: '-0.5px',
        lineHeight: '120%',
        fontWeight: 'Light',
      },
      h3: {
        fontSize: '48px',
        letterSpacing: '0',
        lineHeight: '116.7%',
        fontWeight: 'Regular',
      },
      h4: {
        fontSize: '32px',
        letterSpacing: '0.25px',
        lineHeight: '123.5%',
        fontWeight: 'Bold',
      },
      h5: {
        fontSize: '24px',
        letterSpacing: '0',
        lineHeight: '120%',
        fontWeight: 'Semi Bold',
      },
      h6: {
        fontSize: '20px',
        letterSpacing: '0.15px',
        lineHeight: '133.4%',
        fontWeight: 'Bold',
      },
      body1: {
        fontSize: '16px',
        lineHeight: '150%',
        letterSpacing: '0.15px',
        fontWeight: 'Regular',
      },
      body2: {
        fontSize: '14px',
        lineHeight: '143%',
        letterSpacing: '0.17px',
        fontWeight: 'Regular',
        color: '#727076',
      },
      subtitle1: {
        fontSize: '16px',
        lineHeight: '175%',
        letterSpacing: '0.15px',
        fontWeight: 'Semi Bold',
      },
      subtitle2: {
        fontSize: '14px',
        lineHeight: '157%',
        letterSpacing: '0.1px',
        fontWeight: 'Semi Bold',
      },
      caption: {
        fontSize: '12px',
        lineHeight: '166%',
        letterSpacing: '0.14px',
        fontWeight: 'Regular',
      },
    },
  },
  ptBR,
);
