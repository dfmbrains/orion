import React from 'react';
import Header from '../shared/Header';
import { Outlet } from 'react-router-dom';

const DarkHeaderLayout = () => {
  return (
    <>
      <Header color={'dark'} />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default DarkHeaderLayout;
