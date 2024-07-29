import { Button, Box } from '@mui/material';
import Links from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Favorite, LocalOffer, Groups, Person } from '@mui/icons-material'; //History,
import ThemeToggleButton from '@/components/MKThemeToggleButton';
import LanguageSwitcher from '@/layouts/header/languageSwitcher';

const Index = (props) => {
  const { t, theme } = props;
  const pathname = usePathname();

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
  );
};

export default Index;
