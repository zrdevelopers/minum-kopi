'use client';

import React, { Fragment, useState } from 'react';
import { AppBar, Toolbar, Box, Container } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Links from 'next/link';
import Drawers from '@/layouts/header/drawer';
import BottomNavigation from '@/layouts/header/bottomNav';

import Location from '@/layouts/header/components/location';
import Menus from '@/layouts/header/components/menu';

const Index = (props) => {
  const { page } = props;
  const theme = useTheme();

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
            <Box display="flex" flexGrow={0} sx={{ marginRight: '1rem' }}>
              <Links href="/" passHref style={{ display: 'flex' }}>
                <img
                  src="https://placehold.co/103x40/webp"
                  // src="https://makan-bang.id/static/images/logos/minimalist_logo.svg"
                  alt="makanbang.id"
                  loading="lazy"
                />
              </Links>
            </Box>
            <Location t={t} theme={theme} />
            <IconButton
              edge="start"
              color="inherit"
              sx={{ display: { xs: 'block', sm: 'block', md: 'none' }, ml: 2 }}
              className="text-white"
              aria-label="open drawer"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
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

export default Index;
