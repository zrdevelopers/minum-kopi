'use client';
import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const Index = (props) => {
  const { page } = props;
  const theme = useTheme();
  const currentYear = new Date().getFullYear(); // Get current year dynamically

  return (
    <Box
      component="footer"
      sx={{
        padding: theme.spacing(2),
        backgroundColor: theme.palette.background.footer,
        textAlign: 'center',
        marginTop: 'auto',
        color: theme.palette.text.default,
        display: { xs: page === 'login' ? 'none' : 'block', sm: 'block', md: 'block' }
      }}
    >
      <Typography variant="body2">© minumkopi.id {currentYear}</Typography>
    </Box>
  );
};

export default Index;
