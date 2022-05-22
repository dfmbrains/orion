import React, {useState} from 'react';
import Blogsbg from "../../../assets/img/home/blogsbg.png";
import Port from "../../../assets/img/home/port.png";
import Truck from "../../../assets/img/home/truck.png";
import Sklad from "../../../assets/img/home/sklad.png";
import './blogs.scss';
import BlogsSidebar from "../../BlogsSidebar/BlogsSidebar";
import BlogsCard from "../../BlogsCard/BlogsCard";
import {useNavigate} from "react-router-dom";

const Blogs = () => {
    const navigate = useNavigate();

    return (
        <main>
            <section className="partnersClientsHome">
                <h1 className="partnersClientsHome__title">Blogs & News</h1>
                <div className="partnersClientsHome__image">
                    <img className="img" src={Blogsbg} alt="Blogsbg"/>
                </div>
            </section>
            <section className="blogs">
                <div className="container">
                    <div className="blogs__row">
                        <div className="blogs__left">
                            <a href="/blogs/freight" className="blogs__left_item">
                                <BlogsCard/>
                            </a>
                            <div className="blogs__left_item">
                                <div className="blogs__left_card">
                                    <img src={Truck} alt="Truck"/>
                                    <div className="blogs__left_card-bot">
                                        <div className="blogs__left_card-date">
                                            <p className="blogs__left_card-day">01</p>
                                            <p> Dec</p>
                                        </div>
                                        <div className="blogs__left_card-right">
                                            <div>
                                                <p className="blogs__left_card-name">Logistic</p>
                                                <h3 className="blogs__left_card-title">Interesting Logistics Facts</h3>
                                                <p className="blogs__left_card-subtitle">10 Reasons why rail freight transport
                                                    is so important right now</p>
                                            </div>
                                            <button className="blogs__left_card-btn">Read More</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="blogs__left_item">
                                <div className="blogs__left_card">
                                    <img src={Sklad} alt="Sklad"/>
                                    <div className="blogs__left_card-bot">
                                        <div className="blogs__left_card-date">
                                            <p className="blogs__left_card-day">01</p>
                                            <p> Dec</p>
                                        </div>
                                        <div className="blogs__left_card-right">
                                            <div>
                                                <p className="blogs__left_card-name">Logistic</p>
                                                <h3 className="blogs__left_card-title">Logistics News</h3>
                                                <p className="blogs__left_card-subtitle">In search of stability, profit and
                                                    demand: How Coal Transporting works in different countries</p>
                                            </div>
                                            <button className="blogs__left_card-btn">Read More</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="blogs__left_item">
                                <div className="blogs__left_card">
                                    <img src={Port} alt="Port"/>
                                    <div className="blogs__left_card-bot">
                                        <div className="blogs__left_card-date">
                                            <p className="blogs__left_card-day">01</p>
                                            <p> Dec</p>
                                        </div>
                                        <div className="blogs__left_card-right">
                                            <div>
                                                <p className="blogs__left_card-name">Transportation</p>
                                                <h3 className="blogs__left_card-title">Everything About Freight
                                                    Transportation </h3>
                                                <p className="blogs__left_card-subtitle">International Rail Freight: Everything
                                                    you need to know about Rail Freight </p>
                                            </div>
                                            <button className="blogs__left_card-btn">Read More</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="blogs__left_item">
                                <div className="blogs__left_card">
                                    <img src={Truck} alt="Truck"/>
                                    <div className="blogs__left_card-bot">
                                        <div className="blogs__left_card-date">
                                            <p className="blogs__left_card-day">01</p>
                                            <p> Dec</p>
                                        </div>
                                        <div className="blogs__left_card-right">
                                            <div>
                                                <p className="blogs__left_card-name">Logistic</p>
                                                <h3 className="blogs__left_card-title">Interesting Logistics Facts</h3>
                                                <p className="blogs__left_card-subtitle">10 Reasons why rail freight transport
                                                    is so important right now</p>
                                            </div>
                                            <button className="blogs__left_card-btn">Read More</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="blogs__left_item">
                                <div className="blogs__left_card">
                                    <img src={Sklad} alt="Sklad"/>
                                    <div className="blogs__left_card-bot">
                                        <div className="blogs__left_card-date">
                                            <p className="blogs__left_card-day">01</p>
                                            <p> Dec</p>
                                        </div>
                                        <div className="blogs__left_card-right">
                                            <div>
                                                <p className="blogs__left_card-name">Logistic</p>
                                                <h3 className="blogs__left_card-title">Logistics News</h3>
                                                <p className="blogs__left_card-subtitle">In search of stability, profit and
                                                    demand: How Coal Transporting works in different countries</p>
                                            </div>
                                            <button className="blogs__left_card-btn">Read More</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <BlogsSidebar/>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Blogs;