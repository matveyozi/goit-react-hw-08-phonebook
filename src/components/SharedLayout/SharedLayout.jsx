import React from 'react';
import { Outlet } from 'react-router-dom';

import { Suspense } from 'react';
import Container from 'components/Container/Container';
import Header from 'components/Header/Header';



const SharedLayout = () => {
  return (
    <Container>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default SharedLayout;