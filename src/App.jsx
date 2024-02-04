import React from 'react';
import { Navbar } from './components/Navbar';
import { AboutUs } from './pages/AboutUs';
import { OurWork } from './pages/OurWork';
import { MovieDetail } from './components/MovieDetail';
import { GlobalStyle } from './components/GlobalStyles';
import { Layout } from '../Layout';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  BrowserRouter as Router,
  RouterProvider,
} from 'react-router-dom';
import { AnimatedRoutes } from './components/AnimatedRoutes';

/* const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<Layout />}>
        <Route index element={<AboutUs />} />

        <Route path='contact' element={<ContactUs />} />

        <Route path='work'>
          <Route index element={<OurWork />} />
          <Route path=':id' element={<MovieDetail />} />
        </Route>
      </Route>
    </>
  )
); */

function App() {
  return (
    <>
      <Router>
        <AnimatedRoutes />
      </Router>
    </>
  );
}

export default App;
