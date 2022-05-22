import React from 'react';
import {NavLink} from "react-router-dom";
import './footer.scss';
import Logo from '../../assets/img/header/logo.png';
import FacebookImg from '../../assets/img/footer/facebook.png';
import InstagramImg from '../../assets/img/footer/instagram.png';
import LinkedinImg from '../../assets/img/footer/linkedin.png';
import WhatsappImg from '../../assets/img/footer/whatsapp.png';
import TelegramImg from '../../assets/img/footer/telegram.png';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__top">
                    <img className="footer__logo" src={Logo} alt="Logo"/>
                    <div className="footer__row">
                        <ul className="footer__menu">
                            <h3 className="footer__title">Our Divisions</h3>
                            <li>
                                <a className="footer__link" href="/">About US</a>
                            </li>
                            <li>
                                <a className="footer__link" href="/company">Company</a>
                            </li>
                            <li>
                                <a className="footer__link" href="/services">Services</a>
                            </li>
                            <li>
                                <a className="footer__link" href="/clients">Clients & Partners</a>
                            </li>
                            <li>
                                <a className="footer__link" href="/blogs">Blogs</a>
                            </li>
                            <li className="no-margin hiring">
                                <a className="footer__link" href="#">Career<span className="hiring">We Are Hiring</span></a>
                            </li>
                        </ul>
                        <ul className="footer__menu">
                            <h3 className="footer__title">Company Services</h3>
                            <li>
                                <a className="footer__link" href="/services#ourServices">Our Services</a>
                            </li>
                            <li>
                                <a className="footer__link" href="#">Track & Trace</a>
                            </li>
                            <li>
                                <a className="footer__link" href="#">Air Freight</a>
                            </li>
                            <li>
                                <a className="footer__link" href="/services/freight">Rail Freight</a>
                            </li>
                            <li>
                                <a className="footer__link" href="#">Container Freight Transport</a>
                            </li>
                            <li className="no-margin">
                                <NavLink className="footer__link" to="#">Provision Of Rolling Stock</NavLink>
                            </li>
                        </ul>
                        <ul className="footer__menu footer__border">
                            <h3 className="footer__title">Contact Us</h3>
                            <li>
                                <a className="footer__link" href="/contacts">Find us</a>
                            </li>
                            <li className="no-margin">
                                <a className="footer__link" href="/contacts#getintouch">Get In touch</a>
                            </li>
                        </ul>
                        <ul className="footer__menu footer__border">
                            <h3 className="footer__title">Latest News</h3>
                            <li>
                                <a className="footer__link" href="#">Expert Tips</a>
                            </li>
                            <li>
                                <a className="footer__link" href="#">A Sustainable Future</a>
                            </li>
                            <li>
                                <a className="footer__link" href="#">Fresh Start</a>
                            </li>
                            <li>
                                <a className="footer__link" href="#">Clean Spaces</a>
                            </li>
                            <li className="no-margin">
                                <a className="footer__link" href="#">Tips & Strategies</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="footer__bot">
                    <p className="footer__bot_title">Copyright ©2020 All rights reserved oriontrans.kg</p>
                    <div className="footer__bot_contacts">
                        <img src={FacebookImg} alt="FacebookImg"/>
                        <img src={InstagramImg} alt="InstagramImg"/>
                        <img src={LinkedinImg} alt="LinkedinImg"/>
                        <img src={WhatsappImg} alt="WhatsappImg"/>
                        <img src={TelegramImg} alt="TelegramImg"/>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;