import React from 'react';
import {NavLink} from "react-router-dom";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import {Navigation} from "swiper";
import CompanyBg from "../../../assets/img/team/aboutusbg.png";
import './style/companyHome.scss';
import './style/we.scss';
import './style/countries.scss';
import './style/companyStatistic.scss';
import './style/offer.scss';
import './style/about.scss';
import './style/banner.scss';
import './style/benefits.scss';
import './style/values.scss';
import './style/testimonials.scss';
import './style/companyTeam.scss';
import Tajikistan from '../../../assets/img/company/tajikistan.png';
import Afghanistan from '../../../assets/img/company/afganistan.png';
import Turkmenistan from '../../../assets/img/company/turkmenistan.png';
import Azerbaijan from '../../../assets/img/company/azerbaijan.png';
import Kazakhstan from '../../../assets/img/company/kazakhstan.png';
import China from '../../../assets/img/company/china.png';
import Baltic from '../../../assets/img/company/baltic.png';
import Europe from '../../../assets/img/company/europe.png';
import Iran from '../../../assets/img/company/iran.png';
import Russia from '../../../assets/img/company/russia.png';
import Uzbekistan from '../../../assets/img/company/uzbekistan.png';
import CountriesBg from '../../../assets/img/company/countries.png';
import DotsBg from '../../../assets/img/company/dots_company.png';
import PartnersAndClients from '../../../assets/img/team/partnersandclients.jpg';
import OurTeam from '../../../assets/img/team/ourteam_.jpg';
import Team from '../../../assets/img/team/team.jpg';
import CreditCard from '../../../assets/img/home/creditcard.png';
import Thunder from '../../../assets/img/home/thunder.png';
import Card from '../../../assets/img/home/card.png';
import Headphones from '../../../assets/img/home/headphones.png';
import Efficiency from '../../../assets/img/home/efficiency.png';
import Molot from '../../../assets/img/home/molot.png';
import Honesty from '../../../assets/img/home/trust.png';
import Group from '../../../assets/img/home/group.png';
import Man from '../../../assets/img/home/man.png';
import Orenbi from '../../../assets/img/partners/orenbi.png';
import BesGroup from '../../../assets/img/partners/besgroup.jpg';
import AsiaPetroleum from '../../../assets/img/partners/asiapetroleum.png';
import Anvar from '../../../assets/img/team/anvar.png';
import Ilhom from '../../../assets/img/team/ilhom.png';
import Akim from '../../../assets/img/team/akim.png';
import Madina from '../../../assets/img/team/madina.png';

const Company = () => {
    return (
        <>
            <section className="company__home">
                <h1 className="company__home_title">About us</h1>
                <div className="company__home_image">
                    <img className="img" src={CompanyBg} alt="CompanyBg"/>
                </div>
            </section>
            <section id="company" className="we">
                <h2 className="we__title">We are <span className="we__title_orange">Orion-Trans.</span> <br/>Providing
                    You with the most <br/> actionable Rail
                    Freight Service</h2>
                <p className="we__subtitle">We are professional logistics specialists with a passion for quality and
                    efficiency. We <br/> believe in integrity, trust, and continuous improvement. We promise to listen
                    and <br/>
                    provide You with reliable freight forwarding services over the globe.</p>
            </section>
            <section className="countries">
                <div className="container-small">
                    <h2 className="countries__title">Orion-Trans</h2>
                    <p className="countries__subtitle">Orion-Trans is an international modern company of rail freight
                        forwarding services, based in Kyrgyzstan, Bishkek. We met up to make logistics services in more
                        than 20 nations over the globe and have been operating on the market since 2012, thereby have
                        proved to our clients and partners our level of professionalism in the logistics field. </p>
                    <NavLink to="#" className="countries__btn">Read Our Story</NavLink>
                    <img className="countries__map" src={CountriesBg} alt="Map"/>
                    <h3 className="countries__list">Countries we're carrying out international freight forwarding
                        services:</h3>
                    <Swiper
                        slidesPerView={6}
                        spaceBetween={100}
                        slidesPerGroup={1}
                        loop={true}
                        loopFillGroupWithBlank={true}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className="countries__card">
                                <img src={Russia} alt="Russia"/>
                                <p>Russia</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="countries__card">
                                <img src={Uzbekistan} alt="Uzbekistan"/>
                                <p>Uzbekistan</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="countries__card">
                                <img src={Turkmenistan} alt="Turkmenistan"/>
                                <p>Turkmenistan</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="countries__card">
                                <img src={Kazakhstan} alt="Kazakhstan"/>
                                <p>Kazakhstan</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="countries__card">
                                <img src={Tajikistan} alt="Tajikistan"/>
                                <p>Tajikistan</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="countries__card">
                                <img src={China} alt="China"/>
                                <p>China</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="countries__card">
                                <img src={Afghanistan} alt="Afghanistan"/>
                                <p>Afghanistan</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="countries__card">
                                <img src={Azerbaijan} alt="Azerbaijan"/>
                                <p>Azerbaijan</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="countries__card">
                                <img src={Baltic} alt="Baltic"/>
                                <p>Baltic Countries</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="countries__card">
                                <img src={Europe} alt="Europe"/>
                                <p>Eastern Europe countries</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="countries__card">
                                <img src={Iran} alt="Iran"/>
                                <p>Iran</p>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>
            <section className="company__statistic">
                <div className="container-small">
                    <div className="company__statistic_row">
                        <div className="company__statistic_card">
                            <p className="company__statistic_title">Shipped Tons Per Month</p>
                            <h3 className="company__statistic_subtitle">10,000</h3>
                        </div>
                        <div className="company__statistic_card">
                            <p className="company__statistic_title">Satisfied Clients And PartnersClients</p>
                            <h3 className="company__statistic_subtitle">200+</h3>
                        </div>
                        <div className="company__statistic_card">
                            <p className="company__statistic_title">10+</p>
                            <h3 className="company__statistic_subtitle">10+</h3>
                        </div>
                        <div className="company__statistic_card">
                            <p className="company__statistic_title">Logistics Specialists’ Experience</p>
                            <h3 className="company__statistic_subtitle">8 <span className="small">Years</span></h3>
                        </div>
                    </div>
                </div>
            </section>
            <section className="offer">
                <div className="container-small">
                    <div className="offer__row">
                        <div className="offer__left">
                            <h2 className="offer__title">What we <span className="orange">offer</span></h2>
                            <p className="offer__subtitle">We offer to our clients the most actionable solutions in
                                freight-forwarding services. Our team of professional logistics specialists will develop
                                a plan
                                of the whole transportation arrangement for your business. </p>
                            <p className="offer__subtitle">We will calculate for you all of the necessary rail
                                freight-forwarding tariffs across more than 20 countries, by import, export, transit and
                                internal consignment and find for you a needed rolling stock to ship your cargo.</p>
                            <div className="offer__btns">
                                <a className="offer__btn orange" href="/contacts">Contact Us</a>
                                <a className="offer__btn white" href="/#calculate">Calculate A Rail Tariff</a>
                            </div>
                        </div>
                        <div className="offer__img">
                            <img src={PartnersAndClients} alt="PartnersClients"/>
                        </div>
                    </div>
                </div>
            </section>
            <section className="about">
                <div className="about__top">
                    <div className="container-small">
                        <div className="about__top_row">
                            <div className="about__top_left">
                                <h2 className="about__title">Our <span className="orange">Mission</span></h2>
                                <p className="about__subtitle">To ensure businesses with all the necessary
                                    freight-forwarding services on the market: to be the most secure and trusted
                                    freight-forwarding company for the businesses, and to continuously improve the
                                    quality level of the services and work approach for the sake of the businesses.</p>
                                <h2 className="about__title">Our <span className="orange">Vision</span></h2>
                                <p className="about__subtitle no-margin">We see ourselves as the number one secure
                                    freight-forwarding company on the logistics market, who ensure new innovative
                                    logistics services to our clients and partners and create and develop convenient
                                    workplaces our team.</p>
                            </div>
                            <img className="about__img" src={OurTeam} alt="OurTeam"/>
                        </div>
                    </div>
                </div>
                <div className="about__bot">
                    <div className="container-small">
                        <div className="about__bot_row">
                            <div className="about__bot_left">
                                <h2 className="about__bot_title">Our <span className="orange">Goal</span></h2>
                                <p className="about__bot_subtitle">Efficiently organize and accompany rail freight
                                    transportation, creating a fast, convenient and accessible rail freight.</p>
                                <div className="about__bot_img">
                                    <img className="about__bot_img" src={Team} alt="Team"/>
                                </div>
                            </div>
                            <div className="about__bot_right">
                                <h2 className="about__bot_right-title">Our <span className="orange">objectives</span>
                                </h2>
                                <p className="about__bot_right-subtitle">Create an efficient chain of partnership with
                                    the
                                    railways, transport companies, and other freight-forwarding companies.</p>
                                <p className="about__bot_right-subtitle">Continuously improve the quality level of
                                    professionalism and skills of our team - logistics specialists.</p>
                                <p className="about__bot_right-subtitle">Enhance the quality of customer services and
                                    meet
                                    their requests</p>
                                <p className="about__bot_right-subtitle no-margin">Integrating and developing the modern
                                    innovative
                                    technology to create more efficient and accessible freight-forwarding solutions for
                                    our clients and partners.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="banner">
                <h2 className="banner__title">Why us?</h2>
                <p className="banner__subtitle"><span className="big">200+</span> clients make use of our services for
                    more than <br/> <span className="big">10</span> years, and our
                    partners work with us up to this day.</p>
            </section>
            <section className="benefits">
                <div className="container-small">
                    <h2 className="benefits__title">Our Benefits</h2>
                    <div className="benefits__row">
                        <div className="benefits__card">
                            <img src={CreditCard} alt="CreditCard"/>
                            <h3 className="benefits__card_title">Cost Effective</h3>
                            <p className="benefits__card_subtitle">Competitive and cost-effective rail tariffs amongst
                                freight-forwarding organizations.</p>
                        </div>
                        <div className="benefits__card">
                            <img src={Thunder} alt="Quick Response"/>
                            <h3 className="benefits__card_title">Quick Response</h3>
                            <p className="benefits__card_subtitle">Our team processes service requests in less than 10
                                minutes</p>
                        </div>
                        <div className="benefits__card">
                            <img src={Card} alt="Professional Specialists"/>
                            <h3 className="benefits__card_title">Professional Specialists</h3>
                            <p className="benefits__card_subtitle">Orion-Trans has a high-qualified logistics
                                specialists with more than 8 - 10 years of experience in providing freight-forwarding
                                services.</p>
                        </div>
                        <div className="benefits__card">
                            <img src={Headphones} alt="Headphones"/>
                            <h3 className="benefits__card_title">We Are With You 24/7</h3>
                            <p className="benefits__card_subtitle">Quick response from our logistics specialists on any
                                issue - 24/7</p>
                        </div>
                        <div className="benefits__card">
                            <img src={Efficiency} alt="Efficiency"/>
                            <h3 className="benefits__card_title">Efficiency</h3>
                            <p className="benefits__card_subtitle">Our team’s professionalism will ensure a fast and
                                reliable transport
                                organization.</p>
                        </div>
                        <div className="benefits__card">
                            <img src={Molot} alt="Direct"/>
                            <h3 className="benefits__card_title">Direct Agreements With Railways</h3>
                            <p className="benefits__card_subtitle">We cooperate directly with railways of Kyrgyz
                                Republic and the official railways representatives of Kazakhstan, Uzbekistan,
                                Tadjikistan, Turkmenistan, Russia, Afghanistan and Iran.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="values">
                <div className="container-small">
                    <div className="values__row">
                        <h2 className="values__title">Our Core Values</h2>
                        <div className="values__list">
                            <div className="values__item">
                                <img src={Honesty} alt="Integrity & Honesty"/>
                                <h4 className="values__item_title">Integrity & Honesty</h4>
                            </div>
                            <div className="values__item big">
                                <img src={Headphones} alt="Exceptional Customer Service"/>
                                <h4 className="values__item_title">Exceptional Customer Service</h4>
                            </div>
                            <div className="values__item">
                                <img className="values__item_img" src={Group} alt="Value Our People"/>
                                <h4 className="values__item_title">Value Our People</h4>
                            </div>
                            <div className="values__item">
                                <img src={Man} alt="Continuous Improvement"/>
                                <h4 className="values__item_title">Continuous Improvement</h4>
                            </div>
                            <div className="values__item">
                                <img src={Efficiency} alt="Efficiency"/>
                                <h4 className="values__item_title">Value Teamwork</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="values_image">
                    <img className="img" src={DotsBg} alt="DotsBg"/>
                </div>
            </section>
            <section className="testimonials">
                <div className="container-small">
                    <h2 className="testimonials__title">Testimonials</h2>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={15}
                        slidesPerGroup={1}
                        loop={true}
                        loopFillGroupWithBlank={true}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className="testimonials__card">
                                <div className="testimonials__card_top">
                                    <div className="testimonials__card_img">
                                        <img src={Orenbi} alt="Orenbi"/>
                                    </div>
                                    <div className="testimonials__card_name">
                                        <p className="testimonials__card_subtitle">Orenbi Trading LLC</p>
                                        <h5 className="testimonials__card_title">Alina Alekseevna Bukreeva</h5>
                                    </div>
                                </div>
                                <p className="testimonials__card_descr">“The most distinctive features of “Orion-Trans
                                    LLC ” is their business approach, a high staff professionalism and a strong team
                                    spirit. This company is a reliable, responsible and highly qualified partner.
                                    “Orenbi Trading LLC ” totally recommend to the businesses “Orion-Trans LLC” as a
                                    reliable and stable partner.”
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="testimonials__card">
                                <div className="testimonials__card_top">
                                    <div className="testimonials__card_img">
                                        <img src={BesGroup} alt="BesGroup"/>
                                    </div>
                                    <div className="testimonials__card_name">
                                        <p className="testimonials__card_subtitle">Orenbi Trading LLC</p>
                                        <h5 className="testimonials__card_title">Alina Alekseevna Bukreeva</h5>
                                    </div>
                                </div>
                                <p className="testimonials__card_descr">“The most distinctive features of “Orion-Trans
                                    LLC ” is their business approach, a high staff professionalism and a strong team
                                    spirit. This company is a reliable, responsible and highly qualified partner.
                                    “Orenbi Trading LLC ” totally recommend to the businesses “Orion-Trans LLC” as a
                                    reliable and stable partner.”
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="testimonials__card">
                                <div className="testimonials__card_top">
                                    <div className="testimonials__card_img">
                                        <img src={AsiaPetroleum} alt="AsiaPetroleum"/>
                                    </div>
                                    <div className="testimonials__card_name">
                                        <p className="testimonials__card_subtitle">Orenbi Trading LLC</p>
                                        <h5 className="testimonials__card_title">Alina Alekseevna Bukreeva</h5>
                                    </div>
                                </div>
                                <p className="testimonials__card_descr">“The most distinctive features of “Orion-Trans
                                    LLC ” is their business approach, a high staff professionalism and a strong team
                                    spirit. This company is a reliable, responsible and highly qualified partner.
                                    “Orenbi Trading LLC ” totally recommend to the businesses “Orion-Trans LLC” as a
                                    reliable and stable partner.”
                                </p>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>
            <section className="companyTeam">
                <div className="companyTeam__header">
                    <h2 className="companyTeam__header_title">Meet our Team</h2>
                </div>
                <div className="companyTeam__bot">
                    <div className="container-small">
                        <h3 className="companyTeam__title"><span className="orange">Our team</span> is a crucial value of our
                            company.</h3>
                        <p className="companyTeam__subtitle">They are growth for a company, where each of a team member has its
                            special strong <br/> personal qualities, and willingness to work and create.</p>
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={15}
                            slidesPerGroup={1}
                            loop={true}
                            loopFillGroupWithBlank={true}
                            pagination={{
                                clickable: true,
                            }}
                            navigation={true}
                            modules={[Navigation]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <div className="companyTeam__row">
                                    <div className="companyTeam__card">
                                        <img src={Ilhom} alt="Ilhom"/>
                                        <p className="companyTeam__card_name">Ilhom Abdurasulov</p>
                                        <p className="companyTeam__card_subtitle">Ilhom is a Chief Operating Office. Ilhom joined the </p>
                                        <p className="companyTeam__card_position">Chief Operating Officer</p>
                                    </div>
                                    <div className="companyTeam__card">
                                        <img src={Akim} alt="Akim"/>
                                        <p className="companyTeam__card_name">Akim</p>
                                        <p className="companyTeam__card_subtitle">Ilhom is a Chief Operating Office. Ilhom joined the </p>
                                        <p className="companyTeam__card_position">Container Freight Specialist</p>
                                    </div>
                                    <div className="companyTeam__card">
                                        <img src={Madina} alt="Madina"/>
                                        <p className="companyTeam__card_name">Madina Abdurasulova</p>
                                        <p className="companyTeam__card_subtitle">Ilhom is a Chief Operating Office. Ilhom joined the </p>
                                        <p className="companyTeam__card_position">Digital Marketing Specialist</p>
                                    </div>
                                    <div className="companyTeam__card">
                                        <img src={Anvar} alt="Anvar"/>
                                        <p className="companyTeam__card_name">Anvar Malyanchinov</p>
                                        <p className="companyTeam__card_subtitle">Ilhom is a Chief Operating Office. Ilhom joined the </p>
                                        <p className="companyTeam__card_position">Senior Logistics Specialist</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="companyTeam__row">
                                    <div className="companyTeam__card">
                                        <img src={Ilhom} alt="Ilhom"/>
                                        <p className="companyTeam__card_name">Ilhom Abdurasulov</p>
                                        <p className="companyTeam__card_subtitle">Ilhom is a Chief Operating Office. Ilhom joined the </p>
                                        <p className="companyTeam__card_position">Chief Operating Officer</p>
                                    </div>
                                    <div className="companyTeam__card">
                                        <img src={Akim} alt="Akim"/>
                                        <p className="companyTeam__card_name">Akim</p>
                                        <p className="companyTeam__card_subtitle">Ilhom is a Chief Operating Office. Ilhom joined the </p>
                                        <p className="companyTeam__card_position">Container Freight Specialist</p>
                                    </div>
                                    <div className="companyTeam__card">
                                        <img src={Madina} alt="Madina"/>
                                        <p className="companyTeam__card_name">Madina Abdurasulova</p>
                                        <p className="companyTeam__card_subtitle">Ilhom is a Chief Operating Office. Ilhom joined the </p>
                                        <p className="companyTeam__card_position">Digital Marketing Specialist</p>
                                    </div>
                                    <div className="companyTeam__card">
                                        <img src={Anvar} alt="Anvar"/>
                                        <p className="companyTeam__card_name">Anvar Malyanchinov</p>
                                        <p className="companyTeam__card_subtitle">Ilhom is a Chief Operating Office. Ilhom joined the </p>
                                        <p className="companyTeam__card_position">Senior Logistics Specialist</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Company;