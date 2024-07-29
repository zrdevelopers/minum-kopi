'use client';

import React, { Fragment, useState } from 'react';
import { AppBar, Toolbar, Button, Box, Container, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Home, Favorite, LocalOffer, Groups, Person, FmdGood } from '@mui/icons-material'; //History,

import { useTheme } from '@mui/material/styles';

import Links from 'next/link';

import Drawers from '@/layouts/header/drawer';
import ThemeToggleButton from '@/components/MKThemeToggleButton';

import { usePathname } from 'next/navigation';
import LanguageSwitcher from '@/layouts/header/languageSwitcher';

import { useTranslation } from 'react-i18next';
import BottomNavigation from '@/layouts/header/bottomNav';

const Index = (props) => {
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

  const buttonStyles = (isActive) => ({
    color: '#fff',
    '&.active': {
      color: theme.palette.secondary.main
    },
    '&:hover': {
      textDecoration: 'none',
      color: theme.palette.secondary.main
    },
    ...(isActive && {
      color: theme.palette.secondary.main
    })
  });

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
            {pathname === '/' || pathname === '/login' ? (
              <Fragment>
                <Box display="flex" flexGrow={0} sx={{ marginRight: '1rem' }}>
                  <Links href="/" style={{ display: 'flex' }}>
                    <img
                      src="https://placehold.co/103x40/webp"
                      // src="https://makan-bang.id/static/images/logos/minimalist_logo.svg"
                      alt="makanbang.id"
                      loading="lazy"
                    />
                  </Links>
                </Box>
                <Box display="flex" flexGrow={1}>
                  <Button
                    variant="outlined"
                    startIcon={<FmdGood />}
                    // loading
                    // loadingIndicator="Loading…"
                    sx={{
                      borderRadius: '40px',
                      minWidth: '60px',
                      border: '0.1px solid rgba(200, 200, 200, 0.5)',
                      backgroundColor: theme.palette.background.default,
                      transition: 'all 0.3s ease-in-out',
                      fontSize: '12px',
                      color: theme.palette.text.secondary,
                      textTransform: 'capitalize',
                      '&:hover': {
                        textDecoration: 'none',
                        backgroundColor: theme.palette.secondary.main,
                        border: '1px solid #000'
                      }
                    }}
                  >
                    {t('Lokasi Sekitar')}
                  </Button>
                </Box>
              </Fragment>
            ) : (
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
            )}
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
            <Box
              display="flex"
              alignItems="center"
              sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}
            >
              <Links href="/" passHref>
                <Button
                  startIcon={<Home />}
                  className={`${pathname === '/' ? 'active' : ''}`}
                  sx={buttonStyles(pathname === '/')}
                  variant="text"
                >
                  {t('home')}
                </Button>
              </Links>
              <Links href="/favorite" passHref>
                <Button
                  startIcon={<Favorite />}
                  className={`${pathname === '/favorite' ? 'active' : ''}`}
                  sx={buttonStyles(pathname === '/favorite')}
                  variant="text"
                >
                  {t('favorite')}
                </Button>
              </Links>
              <Links href="/promo" passHref>
                <Button
                  startIcon={<LocalOffer />}
                  className={`${pathname === '/promo' ? 'active' : ''}`}
                  sx={buttonStyles(pathname === '/promo')}
                  variant="text"
                >
                  {t('promo')}
                </Button>
              </Links>
              <Links href="/about" passHref>
                <Button
                  startIcon={<Groups />}
                  className={`${pathname === '/about' ? 'active' : ''}`}
                  sx={buttonStyles(pathname === '/about')}
                  variant="text"
                >
                  {t('tentang')}
                </Button>
              </Links>
              {/* Start Jika sudah login */}
              {/* <Links href="/history" passHref>
                <Button
                  startIcon={<History />}
                  className={`${pathname === '/history' ? 'active' : ''}`}
                  sx={buttonStyles(pathname === '/history')}
                  variant="text"
                >
                  {t('history')}
                </Button>
              </Links> */}
              {/* End Jika sudah login */}
              <Links href="/login" passHref>
                <Button
                  startIcon={<Person />}
                  className={`${pathname === '/login' ? 'active' : ''}`}
                  sx={buttonStyles(pathname === '/login')}
                  variant="text"
                >
                  {t('login')}
                </Button>
              </Links>
              <LanguageSwitcher />
              <ThemeToggleButton />
            </Box>
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
