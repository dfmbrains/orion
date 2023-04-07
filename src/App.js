import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Header from "./shared/Header";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import ScrollTop from "./components/ScrollTop";

function App() {
   return (
       <>
          <Header/>
          <main>
             <Routes>
                <Route element={<Home/>} path={"/"}/>
             </Routes>
          </main>
          <ScrollTop/>
       </>
   );
}

export default App;