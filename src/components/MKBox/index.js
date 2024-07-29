import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Links from 'next/link';

const Index = (props) => {
  const { title, subtitle, link, link_title } = props;
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}
    >
      <Box mb={1}>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="body2">{subtitle}</Typography>
      </Box>
      <Links href={link} passHref>
        <Button
          variant="contained"
          size="small"
          sx={{
            borderRadius: '40px',
            fontSize: '0.7rem',
            textTransform: 'capitalize',
            backgroundColor: theme.palette.secondary.main
          }}
        >
          {link_title}
        </Button>
      </Links>
    </Box>
  );
};

export default Index;
