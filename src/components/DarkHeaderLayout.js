import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from 'shared/Header';

const DarkHeaderLayout = () => {
  return (
    <>
      <Header color="dark" />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default DarkHeaderLayout;
