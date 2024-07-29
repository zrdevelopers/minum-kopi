'use client';
import { createTheme } from '@mui/material/styles';

// Define light and dark themes
export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#000000' // '#1976d2',
    },
    secondary: {
      main: '#e27900'
    },
    background: {
      default: '#ffffff',
      primary: '#000000',
      footer: '#efe6da'
    },
    text: {
      default: 'rgb(74 74 74 / var(--tw-bg-opacity))',
      secondary: '#000'
    }
  },
  typography: {
    fontFamily: 'Poppins, sans-serif'
  },
  spacing: 8
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#e27900' // '#90caf9'
    },
    secondary: {
      main: '#e27900' // '#f48fb1'
    },
    background: {
      default: '#000000',
      primary: '#000000',
      footer: '#171717'
    },
    text: {
      default: '#ffffff',
      secondary: '#ffffff'
    }
  },
  typography: {
    fontFamily: 'Poppins, sans-serif'
  },
  spacing: 8
});
