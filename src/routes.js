import React from 'react';
import DarkHeaderLayout from './components/DarkHeaderLayout';
import LightHeaderLayout from './components/LightHeaderLayout';
import About from './pages/About';
import Blog from './pages/Blog';
import BlogDetails from './pages/BlogDetails';
import Clients from './pages/Clients';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Service from './pages/Service';
import ServiceDetails from './pages/ServiceDetails';
import PrefetchProvider from './shared/PrefetchProvider';

const routes = [
  {
    element: <PrefetchProvider />,
    children: [
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
    ],
  },
];

export default routes;
