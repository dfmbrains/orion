import React, { lazy } from 'react';
import Loadable from './components/Loadable';
import LightHeaderLayout from './components/LightHeaderLayout';
import DarkHeaderLayout from './components/DarkHeaderLayout';

const Home = Loadable(lazy(() => import('./pages/Home')));
const About = Loadable(lazy(() => import('./pages/About')));
const Contact = Loadable(lazy(() => import('./pages/Contact')));
const Clients = Loadable(lazy(() => import('./pages/Clients')));
const Service = Loadable(lazy(() => import('./pages/Service')));
const ServiceDetails = Loadable(lazy(() => import('./pages/ServiceDetails')));
const Blog = Loadable(lazy(() => import('./pages/Blog')));
const BlogDetails = Loadable(lazy(() => import('./pages/BlogDetails')));

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
