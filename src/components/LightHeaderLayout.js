import React from 'react';
import Header from "../shared/Header";
import {Outlet} from "react-router-dom";

const LightHeaderLayout = () => {
   return (
       <>
          <Header color={"light"}/>
          <main>
             <Outlet/>
          </main>
       </>
   );
};

export default LightHeaderLayout;