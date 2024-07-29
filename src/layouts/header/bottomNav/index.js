'use client';
import React, { Fragment } from 'react';
import { Box, BottomNavigation, BottomNavigationAction } from '@mui/material';

import { Home, Favorite, LocalOffer, Person } from '@mui/icons-material'; //History,

import { useTheme } from '@mui/material/styles';

import { useRouter, usePathname } from 'next/navigation';

export default function BottomNav(props) {
  const { translation } = props;
  const theme = useTheme();
  const pathname = usePathname();
  const router = useRouter();

  const buttonStyles = (isActive) => ({
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
      <Box
        sx={{
          display: { xs: 'block', sm: 'block', md: 'none' },
          width: '100%',
          bottom: 0,
          position: 'fixed',
          transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
          boxShadow:
            'rgba(0, 0, 0, 0.2) 0px 3px 5px -1px, rgba(0, 0, 0, 0.14) 0px 5px 8px 0px, rgba(0, 0, 0, 0.12) 0px 1px 14px 0px'
        }}
      >
        <BottomNavigation showLabels>
          <BottomNavigationAction
            onClick={() => router.push('/')}
            label={translation('home')}
            icon={<Home />}
            className={`${pathname === '/' ? 'active' : ''}`}
            sx={buttonStyles(pathname === '/')}
          />
          <BottomNavigationAction
            onClick={() => router.push('/favorite')}
            label={translation('favorite')}
            icon={<Favorite />}
            className={`${pathname === '/favorite' ? 'active' : ''}`}
            sx={buttonStyles(pathname === '/favorite')}
          />
          <BottomNavigationAction
            onClick={() => router.push('/promo')}
            label={translation('promo')}
            icon={<LocalOffer />}
            className={`${pathname === '/promo' ? 'active' : ''}`}
            sx={buttonStyles(pathname === '/promo')}
          />
          {/* Start Jika sudah login */}
          {/* <BottomNavigationAction
            onClick={() => router.push('/history')}
            label={translation('history')}
            icon={<History />}
            className={`${pathname === '/history' ? 'active' : ''}`}
            sx={buttonStyles(pathname === '/history')}
          /> */}
          {/* End Jika sudah login */}
          <BottomNavigationAction
            onClick={() => router.push('/login')}
            label={translation('login')}
            icon={<Person />}
            className={`${pathname === '/login' ? 'active' : ''}`}
            sx={buttonStyles(pathname === '/login')}
          />
        </BottomNavigation>
      </Box>
    </Fragment>
  );
}
