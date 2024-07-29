'use client';
import { useState, useEffect, Fragment } from 'react';
import { Button, Box } from '@mui/material';
import { FmdGood } from '@mui/icons-material';

import Modals from './modals/location';

const Index = (props) => {
  const { t, theme } = props;
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const requestLocationPermission = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });
        },
        (error) => {
          setError(error.message);
        }
      );
    } else {
      setError('Geolocation is not supported by this browser.');
    }
  };

  useEffect(() => {
    requestLocationPermission();
  }, []);

  return (
    <Fragment>
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
            backgroundColor: theme?.palette?.background?.default,
            transition: 'all 0.3s ease-in-out',
            fontSize: '12px',
            color: theme?.palette?.text?.secondary,
            textTransform: 'capitalize',
            '&:hover': {
              textDecoration: 'none',
              backgroundColor: theme?.palette?.secondary?.main,
              border: '1px solid #000'
            }
          }}
          onClick={handleOpen}
        >
          {location && t('Lokasi Sekitar')}
          {error && 'error'}
        </Button>
      </Box>

      <Modals open={open} onClose={handleClose} />
    </Fragment>
  );
};

export default Index;
