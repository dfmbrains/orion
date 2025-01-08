import ScrollTop from 'components/ScrollTop';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from 'shared/Header';

const LightHeaderLayout = () => {
  return (
    <>
      <Header color="light" />
      <main>
        <Outlet />

        <ScrollTop />
      </main>
    </>
  );
};

export default LightHeaderLayout;
