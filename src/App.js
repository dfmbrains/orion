import Loadable from 'components/Loadable';
import React, { lazy } from 'react';
import { useRoutes } from 'react-router-dom';
import routes from 'routes';

//swiper
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import SEO from 'SEO';

const Footer = Loadable(lazy(() => import('shared/Footer')));

function App() {
  const content = useRoutes(routes);

  return (
    <>
      <SEO />
      {content}
      <Footer />
    </>
  );
}

export default App;
