import Loadable from 'components/Loadable';
import React, { lazy } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { useRoutes } from 'react-router-dom';
import routes from 'routes';
import SEO from 'seo/SEO';

//swiper
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

const Footer = Loadable(lazy(() => import('shared/Footer')));

function App() {
  const content = useRoutes(routes);

  return (
    <HelmetProvider>
      <SEO />
      {content}
      <Footer />
    </HelmetProvider>
  );
}

export default App;
