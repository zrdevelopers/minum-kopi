'use client';
import React, { forwardRef } from 'react';
import {
  Dialog,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Grid,
  Paper,
  Card,
  CardActionArea,
  CardContent,
  SvgIcon,
  Box,
  Slide
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import RadioButtonUncheckedRoundedIcon from '@mui/icons-material/RadioButtonUncheckedRounded';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Location = (props) => {
  const { open, onClose } = props;

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm" TransitionComponent={Transition}>
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" flexGrow={1} flex>
            Pilih Area
          </Typography>
          <IconButton edge="start" color="inherit" onClick={onClose} aria-label="close">
            <CloseIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box sx={{ mt: 8, p: 2 }}>
        <Grid container spacing={1.5}>
          <Grid item xs={12}>
            <Paper elevation={0} variant="outlined">
              <Card>
                <CardActionArea disabled>
                  <CardContent>
                    <SvgIcon color="primary">
                      <RadioButtonUncheckedRoundedIcon />
                    </SvgIcon>
                    <Typography variant="body1" gutterBottom>
                      Lokasi Sekitar
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Paper>
            <Typography variant="body1" mt={2}>
              Silahkan izinkan lokasi untuk menggunakan fitur lokasi sekitar
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Paper elevation={2} variant="outlined">
              <Card>
                <CardActionArea>
                  <CardContent>
                    <SvgIcon color="primary">
                      <CheckCircleRoundedIcon />
                    </SvgIcon>
                    <Typography variant="body1" gutterBottom>
                      JABODETABEK
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Dialog>
  );
};

export default Location;
