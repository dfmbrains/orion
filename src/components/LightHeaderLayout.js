import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from 'shared/Header';

const LightHeaderLayout = () => {
  return (
    <>
      <Header color="light" />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default LightHeaderLayout;
