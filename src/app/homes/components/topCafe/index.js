'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

import {
  Box,
  Grid,
  Typography,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Skeleton
} from '@mui/material';
import MKbox from '@/components/MKBox';

const Index = (props) => {
  const { translation } = props;
  const [dataTopCafe, setDataTopCafe] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getDataTopCafe = async () => {
    setIsLoading(true);
    setTimeout(() => {
      setDataTopCafe([
        {
          name: 'Mie Ayam Muntjul',
          image: 'https://placehold.co/100x100/webp',
          link: '/mie-ayam-muntjul'
        }
      ]);
      setIsLoading(false);
    }, 3000);
  };

  useEffect(() => {
    getDataTopCafe();
  }, []);

  return (
    <Box sx={{ marginBottom: '12px' }}>
      <MKbox
        title={translation('Kafe Andalan')}
        subtitle={translation('Lihat kafe rekomendasi di sekitarmu')}
        link="/brand"
        link_title={translation('Lihat Semua')}
      />
      <Grid item spacing={2} xs={12}>
        <Box
          sx={{
            overflowX: 'auto',
            display: 'flex',
            paddingTop: '8px',
            paddingBottom: '16px',
            whiteSpace: 'nowrap'
          }}
        >
          {isLoading
            ? Array.from({ length: 7 }).map((_, idx) => (
                <a key={idx}>
                  <Card
                    sx={{
                      maxWidth: 345,
                      minWidth: '168px',
                      marginRight: '16px',
                      marginLeft: '2px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      position: 'relative'
                    }}
                    elevation={1}
                  >
                    <CardActionArea>
                      <Skeleton variant="rectangular" height={100} sx={{ marginTop: '16px' }} />
                      <CardContent>
                        <Box
                          sx={{
                            display: '-webkit-box',
                            WebkitLineClamp: '2',
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden'
                          }}
                        >
                          <Skeleton variant="text" sx={{ fontSize: '1rem', marginBottom: '0' }} />
                        </Box>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </a>
              ))
            : dataTopCafe.map((item, idx) => (
                <Link
                  href={`/brand/${idx + 1}`}
                  key={item?.id || idx}
                  passHref
                  style={{ textDecoration: 'none' }}
                >
                  <Card
                    sx={{
                      maxWidth: 345,
                      marginRight: '16px',
                      marginLeft: '2px',
                      display: 'flex',
                      WebkitBoxPack: 'justify',
                      justifyContent: 'space-between',
                      flexDirection: 'column',
                      position: 'relative'
                    }}
                    elevation={1}
                  >
                    <CardActionArea>
                      <CardMedia
                        loading="lazy"
                        sx={{
                          objectFit: 'contain',
                          marginTop: '16px'
                        }}
                        component="img"
                        height={100}
                        image={item?.image}
                        alt={item?.name}
                      />
                      <CardContent>
                        <Box
                          sx={{
                            display: '-webkit-box',
                            WebkitLineClamp: '2',
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden'
                          }}
                        >
                          <Typography
                            gutterBottom
                            variant="h5"
                            sx={{
                              marginBottom: '0',
                              fontSize: {
                                xs: '0.875rem',
                                sm: '1rem'
                              },
                              fontWeight: '600',
                              textAlign: 'center'
                            }}
                          >
                            {item?.name}
                          </Typography>
                        </Box>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Link>
              ))}
        </Box>
      </Grid>
    </Box>
  );
};

export default Index;
