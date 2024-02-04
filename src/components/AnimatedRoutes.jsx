import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Layout } from '../../Layout';
import { AboutUs } from '../pages/AboutUs';
import { OurWork } from '../pages/OurWork';
import { MovieDetail } from './MovieDetail';

export const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode='wait'>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Layout />}>
          <Route index element={<AboutUs />} />

          <Route path='work'>
            <Route index element={<OurWork />} />
            <Route path=':id' element={<MovieDetail />} />
          </Route>
        </Route>
      </Routes>
    </AnimatePresence>
  );
};
