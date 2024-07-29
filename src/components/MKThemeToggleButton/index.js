import React from 'react';
import { Button } from '@mui/material';
import { useTheme } from '@/components/MKThemeToggleButton/themeContext';

import { LightModeTwoTone, DarkModeTwoTone } from '@mui/icons-material';

const Index = () => {
  const { toggleTheme, mode, theme } = useTheme();

  return (
    <Button onClick={toggleTheme} variant="text" sx={{ color: theme.palette.secondary.main }}>
      {mode === 'light' ? <DarkModeTwoTone /> : <LightModeTwoTone />}
    </Button>
  );
};

export default Index;
