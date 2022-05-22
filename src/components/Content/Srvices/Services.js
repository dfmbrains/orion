import React from 'react';
import './style/servicesHome.scss';
import './style/business.scss';
import './style/types.scss';
import './style/review.scss';
import Train from "../../../assets/img/home/train.png";
import Vagons from "../../../assets/img/home/vagons.png";
import Containers2 from "../../../assets/img/home/containers2.png";
import UgolContainera from "../../../assets/img/home/ugolcontainera.png";
import Cars from "../../../assets/img/home/cars.png";
import UglyContainerov from "../../../assets/img/home/uglycontainerov.png";
import Containers1 from "../../../assets/img/home/containers1.png";
import Station from "../../../assets/img/home/station.png";
import Logistics from "../../../assets/img/home/companies.png";
import Construction from "../../../assets/img/home/construction.png";
import Bag from "../../../assets/img/home/bag.png";
import Individual from "../../../assets/img/home/indvidual.png";
import Imports from "../../../assets/img/home/imports.png";
import Car from "../../../assets/img/home/car.png";
import Dots from "../../../assets/img/home/dots.png";
import Testimonials from "../Testimonials/Testimonials";
import {useNavigate} from "react-router-dom";
import ServicesForm from "../../ServicesForm/ServicesForm";

const Services = () => {
    const navigate = useNavigate();
    return (
        <>
            <section className="servicesHome">
                <h1 className="servicesHome__title">Services</h1>
                <div className="servicesHome__image">
                    <img className="img" src={Station} alt="Station"/>
                </div>
            </section>
            <section id="ourServices" className="business">
                <div className="container">
                    <div className="business__top">
                        <h2 className="business__title">Service That Lead The <br/> Way To Better <br/> <span
                            className="orange">Business</span></h2>
                        <div className="business__right">
                            <h3 className="business__right_title">Orion-Trans.</h3>
                            <p className="business__right_subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit.
                                Curabitur ac quam tellus. Etiam commodo diam nec tempus sagittis. Aliquam erat volutpat.
                                Suspendisse ultricies lacus et sem tincidunt condimentum. Mauris at sem vel ex luctus
                                pharetra. Sed nec lobortis tellus. Duis eget cons</p>
                        </div>
                    </div>
                    <div className="business__row">
                        <a href="/services/freight" className="business__card">
                            <img src={Train} alt="Train"/>
                            <div className="business__card_descr">
                                <h3 className="business__card_title">Rail Freight Transport</h3>
                                <p className="business__card_subtitle">Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Alias dolore doloribus iure libero non repellat saepe? Accusantium
                                    alias beatae consequuntur ducimus, hic impedit ipsum labore laborum maiores sed unde
                                    ut.</p>
                            </div>
                        </a>
                        <div className="business__card">
                            <img src={Vagons} alt=""/>
                            <div className="business__card_descr">
                                <h3 className="business__card_title">Rail Freight-Forwarding
                                    Services</h3>
                                <p className="business__card_subtitle">Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Alias dolore doloribus iure libero non repellat saepe? Accusantium
                                    alias beatae consequuntur ducimus, hic impedit ipsum labore laborum maiores sed unde
                                    ut.</p>
                            </div>
                        </div>
                        <div className="business__card">
                            <img src={Train} alt=""/>
                            <div className="business__card_descr">
                                <h3 className="business__card_title">Provision Of Rolling Stock</h3>
                                <p className="business__card_subtitle">Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Alias dolore doloribus iure libero non repellat saepe? Accusantium
                                    alias beatae consequuntur ducimus, hic impedit ipsum labore laborum maiores sed unde
                                    ut.</p>
                            </div>
                        </div>
                        <div className="business__card">
                            <img src={Containers2} alt=""/>
                            <div className="business__card_descr">
                                <h3 className="business__card_title">Container Freight Transport</h3>
                                <p className="business__card_subtitle">Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Alias dolore doloribus iure libero non repellat saepe? Accusantium
                                    alias beatae consequuntur ducimus, hic impedit ipsum labore laborum maiores sed unde
                                    ut.</p>
                            </div>
                        </div>
                        <div className="business__card">
                            <img src={UgolContainera} alt=""/>
                            <div className="business__card_descr">
                                <h3 className="business__card_title">Organization Of Multimodal Transport</h3>
                                <p className="business__card_subtitle">Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Alias dolore doloribus iure libero non repellat saepe? Accusantium
                                    alias beatae consequuntur ducimus, hic impedit ipsum labore laborum maiores sed unde
                                    ut.</p>
                            </div>
                        </div>
                        <div className="business__card">
                            <img src={Cars} alt="Cars"/>
                            <div className="business__card_descr">
                                <h3 className="business__card_title">Transportation Escort Services</h3>
                                <p className="business__card_subtitle">Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Alias dolore doloribus iure libero non repellat saepe? Accusantium
                                    alias beatae consequuntur ducimus, hic impedit ipsum labore laborum maiores sed unde
                                    ut.</p>
                            </div>
                        </div>
                        <div className="business__card">
                            <img src={UglyContainerov} alt=""/>
                            <div className="business__card_descr">
                                <h3 className="business__card_title">Export-Import And Transit Rail Rates Payments</h3>
                                <p className="business__card_subtitle">Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Alias dolore doloribus iure libero non repellat saepe? Accusantium
                                    alias beatae consequuntur ducimus, hic impedit ipsum labore laborum maiores sed unde
                                    ut.</p>
                            </div>
                        </div>
                        <div className="business__card">
                            <img src={Containers1} alt=""/>
                            <div className="business__card_descr">
                                <h3 className="business__card_title">Shipping Documents Processing Services</h3>
                                <p className="business__card_subtitle">Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Alias dolore doloribus iure libero non repellat saepe? Accusantium
                                    alias beatae consequuntur ducimus, hic impedit ipsum labore laborum maiores sed unde
                                    ut.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="types">
                <div className="container">
                    <h2 className="types__title">For whom are our <span className="orange">services?</span></h2>
                    <div className="types__row">
                        <div className="types__card">
                            <img src={Logistics} alt="Logistics"/>
                            <h3 className="types__card_title">Logistics Companies </h3>
                            <p className="types__card_subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing
                                elit. Error, molestias!</p>
                        </div>
                        <div className="types__card">
                            <img src={Construction} alt="Construction"/>
                            <h3 className="types__card_title">Construction Companies</h3>
                            <p className="types__card_subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing
                                elit. Magnam, perspiciatis!</p>
                        </div>
                        <div className="types__card">
                            <img src={Bag} alt="Bag"/>
                            <h3 className="types__card_title">Industrial And Manufacturing Enterprises</h3>
                            <p className="types__card_subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing
                                elit. Est, eveniet?</p>
                        </div>
                        <div className="types__card">
                            <img src={Individual} alt="Individual"/>
                            <h3 className="types__card_title">Individual Entrepreneurs</h3>
                            <p className="types__card_subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing
                                elit. Aperiam, nostrum.</p>
                        </div>
                        <div className="types__card">
                            <img src={Imports} alt="Imports"/>
                            <h3 className="types__card_title">Importers And Exporters</h3>
                            <p className="types__card_subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing
                                elit. Error, fuga.</p>
                        </div>
                        <div className="types__card">
                            <img src={Car} alt="Car"/>
                            <h3 className="types__card_title">Car Shippers</h3>
                            <p className="types__card_subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing
                                elit. Aperiam, laboriosam.</p>
                        </div>
                    </div>
                    <div className="types__bot">
                        <h3 className="types__bot_title">To get your service</h3>
                        <ServicesForm/>
                    </div>
                </div>
                <div className="types__bg">
                    <img className="dots" src={Dots} alt="Dots"/>
                </div>
            </section>
            <Testimonials/>
        </>
    );
};

export default Services;