'use client';
import React, { Fragment } from 'react';

// import dynamic from 'next/dynamic'
// const Header = dynamic(() => import('@/layouts/header'), { ssr: false })
import Header from '@/layouts/header';
import Footer from '@/layouts/footer';
import { Container } from '@mui/material';

import Banner from '@/app/homes/components/banner';
import MKSearch from '@/components/MKSearch';
import TopCafe from '@/app/homes/components/topCafe';
// import NearbyCafe from '@/app/homes/components/nearbyCafe';
// import NewArticle from '@/app/homes/components/newArticle';
// import DrinkVideos from '@/app/homes/components/drinkVideos';
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
          '@media (max-width: 599px)': {
            paddingTop: '3rem'
          },
          '@media (min-width: 600px)': {
            paddingTop: '4rem'
          }
        }}
      >
        <Banner />
        <MKSearch title={t('Mau minum kopi dimana?')} />
        <TopCafe translation={t} />
        {/* <NearbyCafe /> */}
        {/* <NewArticle /> */}
        {/* <DrinkVideos /> */}
        {/* <FAQ /> */}
      </Container>
      <Footer />
    </Fragment>
  );
};

export default Index;
