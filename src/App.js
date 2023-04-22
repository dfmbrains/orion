import React, {useEffect} from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
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
import BlogDetails from "./pages/BlogDetails";
import LightHeaderLayout from "./components/LightHeaderLayout";
import DarkHeaderLayout from "./components/DarkHeaderLayout";
import {useRecoilState} from "recoil";
import {blogRecoil, teamRecoil} from "./recoil";
import {getAllCollection} from "./firebase/firestoreFirebase";
import {blogFirebasePath, teamFirebasePath} from "./helpers/constants";
import {getFileFromFirebase} from "./firebase/fileFirebase";

function App() {
   const [_, setBlogList] = useRecoilState(blogRecoil)
   const [__, setTeam] = useRecoilState(teamRecoil)

   useEffect(() => {
      getAllCollection(blogFirebasePath)
          .then(data => {
             const createdData = data.map(item => {
                return getFileFromFirebase(`${blogFirebasePath}/${item.id}`)
                    .then(files => ({...item, images: files}))
             })
             return Promise.all(createdData)
          })
          .then(createdData => setBlogList(createdData))

      getAllCollection(teamFirebasePath)
          .then(data => {
             const createdData = data.map(member => {
                return getFileFromFirebase(`${teamFirebasePath}/${member.id}`)
                    .then(file => ({...member, photo: file[0]}))
             })
             return Promise.all(createdData)
          })
          .then(createdData => setTeam(createdData))
   }, [])

   return (
       <>
          <Routes>
             <Route element={<LightHeaderLayout/>} path={"/"}>
                <Route element={<Home/>} index/>
                <Route element={<About/>} path={"about"}/>
                <Route element={<Contact/>} path={"contact"}/>
                <Route element={<Clients/>} path={"clients-&-partners"}/>
                <Route element={<Service/>} path={"services"}/>
                <Route element={<ServiceDetails/>} path={"services/:id"}/>
                <Route element={<Blog/>} path={"blog"}/>
             </Route>
             <Route element={<DarkHeaderLayout/>} path={"/"}>
                <Route element={<BlogDetails/>} path={"blog/:id"}/>
             </Route>
          </Routes>

          <Footer/>

          <ScrollTop/>
       </>
   );
}

export default App;