'use client';

import * as React from 'react';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';

// import Links from 'next/link';

import ThemeToggleButton from '@/components/MKThemeToggleButton';
import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';
import Links from 'next/link';
import {
  Coffee,
  Storefront,
  LocalOffer,
  Groups,
  Article,
  PlayCircleOutline,
  ConfirmationNumber
} from '@mui/icons-material';

const drawerWidth = 260;

import LanguageSwitcher from '@/layouts/header/languageSwitcher';

import { usePathname } from 'next/navigation';

const Index = (props) => {
  const theme = useTheme();
  const { mobileOpen, handleDrawerTransitionEnd, handleDrawerClose, translation } = props;

  const pathname = usePathname();

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
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      aria-label="mailbox folders"
    >
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Drawer
        // container={container}
        variant="temporary"
        open={mobileOpen}
        onTransitionEnd={handleDrawerTransitionEnd}
        onClose={handleDrawerClose}
        ModalProps={{
          keepMounted: true // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', sm: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
            backgroundColor: theme.palette.background.default
          }
        }}
        anchor="right"
      >
        <Toolbar sx={{ padding: 0 }} disableGutters={true}>
          <Box display="flex" flexGrow={1} justifyContent="center" alignItems="center">
            <Links href="/" style={{ display: 'flex' }}>
              <img
                src="https://placehold.co/103x40/webp"
                // src="https://makan-bang.id/static/images/logos/minimalist_logo.svg"
                alt="minumkopi.id"
                loading="lazy"
              />
            </Links>
          </Box>
        </Toolbar>
        <Toolbar sx={{ padding: 0 }} disableGutters={true}>
          <Box display="flex" flexGrow={1} justifyContent="center" alignItems="center">
            <LanguageSwitcher />
            <ThemeToggleButton />
          </Box>
        </Toolbar>
        <Divider />
        <List>
          <Links
            href="/brand"
            passHref
            style={{ textDecoration: 'none', color: theme.palette.text.secondary }}
          >
            <ListItem disablePadding>
              <ListItemButton
                className={`${pathname === '/brand' ? 'active' : ''}`}
                sx={buttonStyles(pathname === '/brand')}
              >
                <ListItemIcon
                  className={`${pathname === '/brand' ? 'active' : ''}`}
                  sx={buttonStyles(pathname === '/brand')}
                >
                  <Coffee />
                </ListItemIcon>
                <ListItemText primary={translation('Kafe Andalan')} />
              </ListItemButton>
            </ListItem>
          </Links>

          <Links
            href="/promo"
            passHref
            style={{ textDecoration: 'none', color: theme.palette.text.secondary }}
          >
            <ListItem disablePadding>
              <ListItemButton
                className={`${pathname === '/promo' ? 'active' : ''}`}
                sx={buttonStyles(pathname === '/promo')}
              >
                <ListItemIcon
                  className={`${pathname === '/promo' ? 'active' : ''}`}
                  sx={buttonStyles(pathname === '/promo')}
                >
                  <LocalOffer />
                </ListItemIcon>
                <ListItemText primary={translation('Promo')} />
              </ListItemButton>
            </ListItem>
          </Links>

          <Links
            href="/cafe"
            passHref
            style={{ textDecoration: 'none', color: theme.palette.text.secondary }}
          >
            <ListItem disablePadding>
              <ListItemButton
                className={`${pathname === '/cafe' ? 'active' : ''}`}
                sx={buttonStyles(pathname === '/cafe')}
              >
                <ListItemIcon
                  className={`${pathname === '/cafe' ? 'active' : ''}`}
                  sx={buttonStyles(pathname === '/cafe')}
                >
                  <Storefront />
                </ListItemIcon>
                <ListItemText primary={translation('Kafe Terdekat')} />
              </ListItemButton>
            </ListItem>
          </Links>

          <Links
            href="/article"
            passHref
            style={{ textDecoration: 'none', color: theme.palette.text.secondary }}
          >
            <ListItem disablePadding>
              <ListItemButton
                className={`${pathname === '/article' ? 'active' : ''}`}
                sx={buttonStyles(pathname === '/article')}
              >
                <ListItemIcon
                  className={`${pathname === '/article' ? 'active' : ''}`}
                  sx={buttonStyles(pathname === '/article')}
                >
                  <Article />
                </ListItemIcon>
                <ListItemText primary={translation('Artikel')} />
              </ListItemButton>
            </ListItem>
          </Links>

          <Links
            href="/tiktok-video"
            passHref
            style={{ textDecoration: 'none', color: theme.palette.text.secondary }}
          >
            <ListItem disablePadding>
              <ListItemButton
                className={`${pathname === '/tiktok-video' ? 'active' : ''}`}
                sx={buttonStyles(pathname === '/tiktok-video')}
              >
                <ListItemIcon
                  className={`${pathname === '/tiktok-video' ? 'active' : ''}`}
                  sx={buttonStyles(pathname === '/tiktok-video')}
                >
                  <PlayCircleOutline />
                </ListItemIcon>
                <ListItemText primary={translation('Video Minuman')} />
              </ListItemButton>
            </ListItem>
          </Links>

          <Links
            href="/about"
            passHref
            style={{ textDecoration: 'none', color: theme.palette.text.secondary }}
          >
            <ListItem disablePadding>
              <ListItemButton
                className={`${pathname === '/about' ? 'active' : ''}`}
                sx={buttonStyles(pathname === '/about')}
              >
                <ListItemIcon
                  className={`${pathname === '/about' ? 'active' : ''}`}
                  sx={buttonStyles(pathname === '/about')}
                >
                  <Groups />
                </ListItemIcon>
                <ListItemText primary={translation('Tentang Kami')} />
              </ListItemButton>
            </ListItem>
          </Links>

          <Links
            href="/voucher"
            passHref
            style={{ textDecoration: 'none', color: theme.palette.text.secondary }}
          >
            <ListItem disablePadding>
              <ListItemButton
                className={`${pathname === '/voucher' ? 'active' : ''}`}
                sx={buttonStyles(pathname === '/voucher')}
              >
                <ListItemIcon
                  className={`${pathname === '/voucher' ? 'active' : ''}`}
                  sx={buttonStyles(pathname === '/voucher')}
                >
                  <ConfirmationNumber />
                </ListItemIcon>
                <ListItemText primary={translation('Voucher')} />
              </ListItemButton>
            </ListItem>
          </Links>
        </List>
      </Drawer>
    </Box>
  );
};

export default Index;
