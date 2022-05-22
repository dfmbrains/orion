import React from 'react';
import HomePage from "./Content/Home/HomePage";
import {Routes, Route} from 'react-router-dom';
import Company from "./Content/Company/Company";
import Services from "./Content/Srvices/Services";
import ScrollUp from "./ScrollUp/ScrollUp";
import PartnersClients from "./Content/ClientsPartners/PartnersClients";
import Blogs from "./Content/Blogs/Blogs";
import Contacts from "./Content/Contacts/Contacts";
import FreightTransportation from "./Content/ServicesTypes/FreightTransportation";
import BlogsItems from './Content/BlogItems/BlogItems';
import Layout from "./Layout/Layout";
import Footer from "./Footer/Footer";

const Main = () => {
    return (
        <>
            <ScrollUp/>
            <Routes>
                <Route path='/blogs/freight' element={<BlogsItems/>}/>
                <Route path="/" element={<Layout/>}>
                    <Route path='' element={<HomePage/>}/>
                    <Route path='company' element={<Company/>}/>
                    <Route path='services' element={<Services/>}/>
                    <Route path='clients' element={<PartnersClients/>}/>
                    <Route path='blogs' element={<Blogs/>}/>
                    <Route path='contacts' element={<Contacts/>}/>
                    <Route path='services/freight' element={<FreightTransportation/>}/>
                </Route>
            </Routes>
            <Footer/>
        </>
    );
};

export default Main;