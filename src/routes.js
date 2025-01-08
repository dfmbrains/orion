import Loadable from 'components/Loadable';
import React, { lazy } from 'react';

import DarkHeaderLayout from './components/DarkHeaderLayout';
import PrefetchProvider from './shared/PrefetchProvider';

const LightHeaderLayout = Loadable(
  lazy(() => import('./components/LightHeaderLayout')),
);

const NotFound = Loadable(lazy(() => import('pages/NotFound')));
const About = Loadable(lazy(() => import('./pages/About')));
const Blog = Loadable(lazy(() => import('./pages/Blog')));
const BlogDetails = Loadable(lazy(() => import('./pages/BlogDetails')));
const Clients = Loadable(lazy(() => import('./pages/Clients')));
const Contact = Loadable(lazy(() => import('./pages/Contact')));
const Home = Loadable(lazy(() => import('./pages/Home')));
const Service = Loadable(lazy(() => import('./pages/Service')));
const ServiceDetails = Loadable(lazy(() => import('./pages/ServiceDetails')));

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
          { element: <NotFound />, path: '*' },
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
