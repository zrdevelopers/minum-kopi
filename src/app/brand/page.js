export const metadata = {
  title: 'Daftar Cafe Andalan | Minum Kopi',
  description: 'Generated by create next app'
};

import Header from '@/layouts/header';
import Footer from '@/layouts/footer';
import { Container } from '@mui/material';
import { Fragment } from 'react';

const Index = () => {
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
        <h1>Brand Page</h1>
      </Container>
      <Footer />
    </Fragment>
  );
};

export default Index;
