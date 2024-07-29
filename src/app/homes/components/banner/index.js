'use client';
import React from 'react';
import { Box } from '@mui/material';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import './banner.scss';

const images = [
  {
    src: 'https://placehold.co/1200x675/webp',
    alt: 'FOTO ARTIS & INFLUENCER'
  },
  {
    src: 'https://placehold.co/1200x675/webp',
    alt: 'FOTO ARTIS & INFLUENCER'
  }
];

const Index = () => {
  return (
    <Box
      sx={{
        width: '100%',
        margin: '0 auto',
        '@media (max-width: 480px)': {
          marginLeft: '-16px',
          width: 'calc(100% + 32px)'
        }
      }}
    >
      <Swiper
        modules={[Pagination]}
        autoplay={{ delay: 5000 }}
        loop={true}
        style={{ height: '100%' }}
        pagination={{ dynamicBullets: true, clickable: true }}
      >
        {images.map((item, index) => (
          <SwiperSlide key={index} style={{ position: 'relative' }}>
            <img
              src={item.src}
              alt={item.alt}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
              loading="lazy"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default Index;
