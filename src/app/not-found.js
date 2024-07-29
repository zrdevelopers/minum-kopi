'use client';

import Link from 'next/link';

import Header from '@/layouts/header';
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
        <div style={{ textAlign: 'center', padding: '50px' }}>
          <h1>404 - Page Not Found</h1>
          <p>Sorry, the page you are looking for does not exist.</p>
          <Link href="/" legacyBehavior>
            Go back to the homepage
          </Link>
        </div>
      </Container>
    </Fragment>
  );
};

export default Index;
