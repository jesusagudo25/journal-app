import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
export const purpleTheme = createTheme({
  palette: {
    primary: {
      main: '#6200EE',
    },
    secondary: {
      main: '#03DAC6',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#f5f5f5',
    },
  },
});
