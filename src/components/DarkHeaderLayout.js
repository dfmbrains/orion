import ScrollTop from 'components/ScrollTop';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from 'shared/Header';

const DarkHeaderLayout = () => {
  return (
    <>
      <Header color="dark" />
      <main>
        <Outlet />

        <ScrollTop />
      </main>
    </>
  );
};

export default DarkHeaderLayout;
