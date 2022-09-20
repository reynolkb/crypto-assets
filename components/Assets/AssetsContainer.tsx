import { Box, createTheme, ThemeProvider, useMediaQuery } from '@mui/material';
import { Assets } from './Assets';

declare module '@mui/material/styles' {
  interface TypographyVariants {
    body3: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    body3?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    body3: true;
  }
}

const theme = createTheme({
  // palette: {
  //   primary: {
  //     main: '#FFB600',
  //     contrastText: '#000000',
  //   },
  // },
  typography: {
    fontFamily: ['Arial'].join(','),
    body2: {
      '@media (max-width:475px)': {
        fontSize: '12px',
      },
    },
    body3: {
      color: '#62677B',
      fontSize: '14px',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          fontWeight: 700,
          fontSize: '20px',
          textTransform: 'capitalize',
        }),
      },
    },
  },
});

export const AssetsContainer = () => {
  const isSm = useMediaQuery(theme.breakpoints.down('sm'));
  const isMd = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        <Box sx={{ margin: '0 auto', width: '70vw' }}>
          <Assets isSm={isSm} isMd={isMd} />
          <Box sx={{ mt: 4 }}></Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};
