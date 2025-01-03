import HashAutoScroll from 'components/Layouts/HashAutoScroll';
import ScrollTop from 'components/ScrollTop';
import React from 'react';
import { useRoutes } from 'react-router-dom';
import routes from 'routes';
import Footer from 'shared/Footer';

//swiper
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

function App() {
  const content = useRoutes(routes);

  return (
    <HashAutoScroll>
      {content}
      <Footer />
      <ScrollTop />
    </HashAutoScroll>
  );
}

export default App;
