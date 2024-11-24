import React, { useCallback, useEffect } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ScrollTop from './components/ScrollTop';
import Footer from './shared/Footer';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Clients from './pages/Clients';
import Service from './pages/Service';
import ServiceDetails from './pages/ServiceDetails';
import BlogDetails from './pages/BlogDetails';
import LightHeaderLayout from './components/LightHeaderLayout';
import DarkHeaderLayout from './components/DarkHeaderLayout';
import { useSetRecoilState } from 'recoil';
import {
  blogRecoil,
  companyRecoil,
  partnersRecoil,
  reviewsRecoil,
  serviceRecoil,
  teamRecoil,
} from './recoil';
import {
  blogFirebasePath,
  companyFirebasePath,
  partnersFirebasePath,
  reviewsFirebasePath,
  serviceFirebasePath,
  teamFirebasePath,
} from './helpers/constants';
import { getAllCollectionsWithImg } from './helpers/utils';
import {
  getAllCollection,
  getCollectionsByFilter,
} from './firebase/firestoreFirebase';

function App() {
  const setBlogList = useSetRecoilState(blogRecoil);
  const setTeam = useSetRecoilState(teamRecoil);
  const setServiceList = useSetRecoilState(serviceRecoil);
  const setPartnersList = useSetRecoilState(partnersRecoil);
  const setCompany = useSetRecoilState(companyRecoil);
  const setReviews = useSetRecoilState(reviewsRecoil);

  const getAllData = useCallback(async () => {
    try {
      const [
        companyData,
        blogData,
        teamData,
        serviceData,
        partnersData,
        reviewsData,
      ] = await Promise.all([
        getAllCollection(companyFirebasePath),
        getAllCollectionsWithImg(blogFirebasePath, true),
        getAllCollectionsWithImg(teamFirebasePath, false),
        getAllCollectionsWithImg(serviceFirebasePath, false),
        getAllCollectionsWithImg(partnersFirebasePath, false),
        getCollectionsByFilter(reviewsFirebasePath, 'status', true),
      ]);

      setCompany(companyData[0]);
      setBlogList(blogData);
      setTeam(teamData);
      setServiceList(serviceData);
      setPartnersList(partnersData);
      setReviews(reviewsData);
    } catch (error) {
      console.error('Failed to fetch data:', error);
    }
  }, [
    setCompany,
    setBlogList,
    setTeam,
    setServiceList,
    setPartnersList,
    setReviews,
  ]);

  useEffect(() => {
    getAllData().then(() => console.log('data fetched'));
  }, [getAllData]);

  return (
    <>
      <Routes>
        <Route element={<LightHeaderLayout />} path={'/'}>
          <Route element={<Home />} index />
          <Route element={<About />} path={'about'} />
          <Route element={<Contact />} path={'contact'} />
          <Route element={<Clients />} path={'clients-&-partners'} />
          <Route element={<Service />} path={'services'} />
          <Route element={<ServiceDetails />} path={'services/:id'} />
          <Route element={<Blog />} path={'blog'} />
        </Route>
        <Route element={<DarkHeaderLayout />} path={'/'}>
          <Route element={<BlogDetails />} path={'blog/:id'} />
        </Route>
      </Routes>

      <Footer />

      <ScrollTop />
    </>
  );
}

export default App;
