import React, { createContext, useState, useMemo, useContext, useEffect } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { lightTheme, darkTheme } from '@/app/theme';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);
import '../../../i18n';

export const ThemeProviderWrapper = ({ children }) => {
  const [mode, setMode] = useState('light');

  useEffect(() => {
    // Initialize the theme mode from localStorage if it exists
    const savedMode = typeof window !== 'undefined' ? localStorage.getItem('themeMode') : null;
    if (savedMode) {
      setMode(savedMode);
    }
  }, []);

  const theme = useMemo(() => (mode === 'light' ? lightTheme : darkTheme), [mode]);

  const toggleTheme = () => {
    setMode((prevMode) => {
      const newMode = prevMode === 'light' ? 'dark' : 'light';
      if (typeof window !== 'undefined') {
        localStorage.setItem('themeMode', newMode); // Update localStorage
      }
      return newMode;
    });
  };

  return (
    <ThemeContext.Provider value={{ toggleTheme, mode, theme }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
