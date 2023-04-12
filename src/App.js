import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Header from "./shared/Header";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import ScrollTop from "./components/ScrollTop";
import Footer from "./shared/Footer";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Clients from "./pages/Clients";
import Service from "./pages/Service";
import ServiceDetails from "./pages/ServiceDetails";

function App() {
   return (
       <>
          <Header/>
          <main>
             <Routes>
                <Route element={<Home/>} path={"/"}/>
                <Route element={<About/>} path={"/about"}/>
                <Route element={<Blog/>} path={"/blog"}/>
                <Route element={<Contact/>} path={"/contact"}/>
                <Route element={<Clients/>} path={"/clients-&-partners"}/>
                <Route element={<Service/>} path={"/services"}/>
                <Route element={<ServiceDetails/>} path={"/services/:id"}/>
             </Routes>
          </main>
          <Footer/>

          <ScrollTop/>
       </>
   );
}

export default App;