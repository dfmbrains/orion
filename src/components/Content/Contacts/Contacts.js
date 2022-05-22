import React from 'react';
import './contacts.scss';
import ContactBg from "../../../assets/img/contactuspage.png";
import ServicecComponent from "../ServicesComponent/ServicecComponent";
import FacebookImg from '../../../assets/img/facebook.png';
import LinkedinImg from '../../../assets/img/linkedin.png';
import InstagramImg from '../../../assets/img/instagram.png';

const Contacts = () => {
    return (
        <>
            <section className="partnersClientsHome">
                <h1 className="partnersClientsHome__title">Contact us</h1>
                <div className="partnersClientsHome__image">
                    <img className="img" src={ContactBg} alt="ContactBg"/>
                </div>
            </section>
            <section className="contacts__cards">
                <div className="container">
                    <ServicecComponent/>
                </div>
            </section>
            <section id="getintouch" className="contacts">
                <div className="container">
                    <div className="contacts__row">
                        <div className="contacts__left">
                            <h2 className="contacts__title">Get in touch with us</h2>
                            <p className="contacts__subtitle">We are professional logistics specialists with a passion
                                for quality and efficiency. <br/>
                                We believe in integrity, trust, and continuous improvement. We promise to listen <br/>
                                and provide You with reliable freight forwarding services over the globe.</p>
                            <p className="contacts__support">Support Center 24 / 7</p>
                            <div className="contacts__phones">
                                <a href="tel:+996707567676">+996707567676</a>
                                <a href="tel:+996705006088">+996705006088</a>
                            </div>
                            <div className="contacts__address">
                                <div className="contacts__address_location">
                                    <p className="contacts__address_top">Our Location</p>
                                    <p className="contacts__address_bot">Turusbekova 109/3, <br/> Maximum Business
                                        Center <br/>
                                        Bishkek, Kyrgyzstan</p>
                                </div>
                                <div className="contacts__address_email">
                                    <p className="contacts__address_top">Write to us</p>
                                    <p className="contacts__address_bot">office.oriontrans@gmail.com</p>
                                </div>
                            </div>
                            <div className="contacts__social">
                                <p className="contacts__social_title">
                                    We are on social media
                                </p>
                                <div className="contacts__social_row">
                                    <a href="#">
                                        <img src={LinkedinImg} alt=""/>
                                    </a>
                                    <a href="#">
                                        <img src={InstagramImg} alt=""/>
                                    </a>
                                    <a href="#">
                                        <img src={FacebookImg} alt=""/>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="contacts__right">
                            <form action="https://formsubmit.co/de63add9ee4b5865a65ead13438ae688" method="POST"
                                  className="contacts__form">
                                <input type="hidden" name="_captcha" value="false"/>
                                <input type="hidden" name="_next" value="http://localhost:3000/contacts"/>
                                <div>
                                    <label>
                                        <input placeholder="Name" type="text" name="Имя"/>
                                    </label>
                                    <label>
                                        <input placeholder="Email" type="email" name="Адрес электронной почты"/>
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        <input placeholder="Company Website" type="text" name="Сайт"/>
                                    </label>
                                    <label>
                                        <input placeholder="Phone Number" type="tel" name="Номер телефона"/>
                                    </label>
                                </div>
                                <label>
                                    <textarea placeholder="Message" name="Сообщение"/>
                                </label>
                                <button type="submit" className="contacts__form_btn">Send</button>
                            </form>
                            <p className="contacts__right_subtitle">If we will not get back to you in 10 minutes you
                                will get 5% discount for any service</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contacts;