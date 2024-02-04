import React from 'react';
import { Navbar } from './src/components/Navbar';
import { Outlet } from 'react-router-dom';
import { GlobalStyle } from './src/components/GlobalStyles';
import { ScrollToTop } from './src/components/ScrollToTop';

export const Layout = () => {
  return (
    <>
      <GlobalStyle />
      <ScrollToTop />
      <Navbar />
      <Outlet />
    </>
  );
};
