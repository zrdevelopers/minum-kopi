'use client';
import React, { Fragment } from 'react';

// import dynamic from 'next/dynamic'
// const Header = dynamic(() => import('@/layouts/header'), { ssr: false })
import Header from '@/layouts/header';
import Footer from '@/layouts/footer';
import { Container, Box } from '@mui/material';

import Banner from '@/app/homes/components/banner';
import MKSearch from '@/components/MKSearch';
import TopCafe from '@/app/homes/components/topCafe';
import NearbyCafe from '@/app/homes/components/nearbyCafe';
import NewArticle from '@/app/homes/components/newArticle';
import DrinkVideos from '@/app/homes/components/drinkVideos';
// import FAQ from '@/app/homes/components/faq';

import { useTranslation } from 'react-i18next';

const Index = () => {
  const { t } = useTranslation('home');

  return (
    <Fragment>
      <Header />
      <Container
        maxWidth="lg"
        sx={{
          paddingTop: { xs: '3rem', sm: '4rem' }
        }}
      >
        <Box sx={{ paddingBottom: '40px' }}>
          <Banner />
          <MKSearch title={t('Mau minum kopi dimana?')} />
          <TopCafe translation={t} />
          <NearbyCafe translation={t} />
          <NewArticle translation={t} />
          <DrinkVideos translation={t} />
          {/* <FAQ translation={t} /> */}
        </Box>
      </Container>
      <Footer />
    </Fragment>
  );
};

export default Index;
