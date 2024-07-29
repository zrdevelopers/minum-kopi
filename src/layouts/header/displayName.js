'use client';

import React, { Fragment, useState } from 'react';
import { AppBar, Toolbar, Box, Container, Typography } from '@mui/material';
import { IconButton, Menu } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import Drawers from '@/layouts/header/drawer';
import BottomNavigation from '@/layouts/header/bottomNav';

import Menus from '@/layouts/header/components/menu';

const DisplayName = (props) => {
  const { page } = props;
  const pathname = usePathname();
  const theme = useTheme();
  const displayPathname = pathname.startsWith('/') ? pathname.slice(1) : pathname;

  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const { t } = useTranslation('home');

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  return (
    <Fragment>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: theme.palette.background.primary,
          display: { xs: page === 'login' ? 'none' : 'block', sm: 'block', md: 'block' }
        }}
      >
        <Container maxWidth="lg">
          <Toolbar sx={{ padding: 0 }} disableGutters={true}>
            <Box display="flex" flexGrow={1}>
              <Typography
                sx={{
                  fontSize: '1.5rem',
                  fontWeight: '600',
                  textTransform: 'capitalize'
                }}
              >
                {displayPathname}
              </Typography>
            </Box>
            <IconButton
              edge="start"
              color="inherit"
              sx={{ display: { xs: 'block', sm: 'block', md: 'none' }, ml: 2 }}
              className="text-white"
              aria-label="open drawer"
              onClick={handleDrawerToggle}
            >
              <Menu />
            </IconButton>
            <Menus t={t} theme={theme} />
          </Toolbar>
        </Container>
      </AppBar>

      <Drawers
        mobileOpen={mobileOpen}
        handleDrawerTransitionEnd={handleDrawerTransitionEnd}
        handleDrawerClose={handleDrawerClose}
        translation={t}
      />
      <BottomNavigation translation={t} />
    </Fragment>
  );
};

export default DisplayName;
