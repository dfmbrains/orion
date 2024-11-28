import React from 'react';
import { useRoutes } from 'react-router-dom';

//components
import ScrollTop from './components/ScrollTop';
import Footer from './shared/Footer';
import routes from './routes';

//swiper
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function App() {
  const content = useRoutes(routes);

  return (
    <>
      {content}
      <Footer />
      <ScrollTop />
    </>
  );
}

export default App;
