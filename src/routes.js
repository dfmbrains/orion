import React from 'react';
import LightHeaderLayout from './components/LightHeaderLayout';
import DarkHeaderLayout from './components/DarkHeaderLayout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Clients from './pages/Clients';
import Service from './pages/Service';
import ServiceDetails from './pages/ServiceDetails';
import Blog from './pages/Blog';
import BlogDetails from './pages/BlogDetails';

const routes = [
  {
    element: <LightHeaderLayout />,
    children: [
      { element: <Home />, path: '/' },
      { element: <About />, path: '/about' },
      { element: <Contact />, path: '/contact' },
      { element: <Clients />, path: '/clients-&-partners' },
      { element: <Service />, path: '/services' },
      { element: <ServiceDetails />, path: '/services/:id' },
      { element: <Blog />, path: '/blog' },
    ],
  },
  {
    element: <DarkHeaderLayout />,
    children: [{ element: <BlogDetails />, path: '/blog/:id' }],
  },
];

export default routes;
