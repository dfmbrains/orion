import Loadable from 'components/Loadable';
import About from 'pages/About';
import Blog from 'pages/Blog';
import BlogDetails from 'pages/BlogDetails';
import Clients from 'pages/Clients';
import Contact from 'pages/Contact';
import Home from 'pages/Home';
import NotFound from 'pages/NotFound';
import Service from 'pages/Service';
import ServiceDetails from 'pages/ServiceDetails';
import React, { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import SettingsWrapper from 'wrappers/SettingsWrapper';
import LightHeaderLayout from './components/LightHeaderLayout';

const DarkHeaderLayout = Loadable(
  lazy(() => import('./components/DarkHeaderLayout')),
);

const routes = [
  { element: <Navigate to="/en/home" replace />, path: '/' },
  {
    element: <SettingsWrapper />,
    path: '/:lang',
    children: [
      {
        element: <LightHeaderLayout />,
        children: [
          { element: <Home />, path: 'home' },
          { element: <About />, path: 'about' },
          { element: <Contact />, path: 'contact' },
          { element: <Clients />, path: 'clients-&-partners' },
          { element: <Service />, path: 'services' },
          { element: <ServiceDetails />, path: 'services/:id' },
          { element: <Blog />, path: 'blog' },
          { element: <NotFound />, path: '*' },
        ],
      },
      {
        element: <DarkHeaderLayout />,
        children: [{ element: <BlogDetails />, path: 'blog/:id' }],
      },
    ],
  },
];

export default routes;
