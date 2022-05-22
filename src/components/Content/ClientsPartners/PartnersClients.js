import React, {useState} from 'react';
import Hands from "../../../assets/img/partners/hands.png";
import './style/partnersHome.scss';
import './style/partnersClients.scss';
import Testimonials from "../Testimonials/Testimonials";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import {Navigation} from "swiper";
import PGCImg from '../../../assets/img/pgc.png';
import UkrailsTrans from '../../../assets/img/ukrailtrans.png';
import Ilm from '../../../assets/img/ilm.png';
import GlobusImg from '../../../assets/img/globus.png';
import KumtorImg from '../../../assets/img/kumtor.png';
import WondernetImg from '../../../assets/img/wondernet.png';

const PartnersClients = () => {
    const [content, setContent] = useState('clients');
    return (
        <>
            <section className="partnersClientsHome">
                <div className="container">
                    <h1 className="partnersClientsHome__title">Clients & Partners</h1>
                    <div className="partnersClientsHome__image">
                        <img className="img" src={Hands} alt="Hands"/>
                    </div>
                </div>
            </section>
            <section className="partnersClients__nav">
                <p onClick={() => setContent('clients')} className={content === 'clients' ? "partnersClients__link orange" : 'partnersClients__link'}>Clients.</p>
                <p onClick={() => setContent('partners')} className={content === 'partners' ? "partnersClients__link orange" : 'partnersClients__link'}>Partners.</p>
                <a href="#testimonials" className="partnersClients__link yakor">Testimonials.</a>
            </section>
            {
                content === 'clients'
                    ? <section className="partnersClients">
                        <h2 className="partnersClients__title">We Work With The <br/> Best <span
                            className="orange">Clients.</span>
                        </h2>
                        <p className="partnersClients__subtitle">The use of railroads and trains to convey cargo on land is
                            known as
                            rail freight transport. Rail transport is popular, especially in continents with extensive
                            journey
                            durations, such as China, Russia, the United States and Europe. Freight trains can transport a
                            variety of cargo, including freight containers, automobiles, cattle, grains, coal, minerals and
                            metals. Bulk goods, standardized shipping containers, or particularly constructed carriages for
                            a
                            specific sort of freight can all be transported by freight trains. Rail freight travels far more
                            quickly than ocean freight. It costs more than sea freight, but less than air freight. Moving
                            high-value industrial products like automobiles, electronics, and computer equipment, as well as
                            promotional items, by train is ideal.</p>
                        <div className="partnersClients__row">
                            <Swiper
                                slidesPerView={6}
                                spaceBetween={30}
                                slidesPerGroup={3}
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
                                    <div className="partnersClients__card">
                                        <div className="partnersClients__img">
                                            <img src={UkrailsTrans} alt="PGC"/>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="partnersClients__card">
                                        <div className="partnersClients__img">
                                            <img src={Ilm} alt="Shyngar"/>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="partnersClients__card">
                                        <div className="partnersClients__img">
                                            <img src={GlobusImg} alt="Kumtor"/>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="partnersClients__card">
                                        <div className="partnersClients__img">
                                            <img src={PGCImg} alt="Globus"/>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="partnersClients__card">
                                        <div className="partnersClients__img">
                                            <img src={KumtorImg} alt="BesGroup"/>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="partnersClients__card">
                                        <div className="partnersClients__img">
                                            <img src={WondernetImg} alt="AsiaPetroleum"/>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </section>
                    : content === 'partners'
                    ? <section className="partnersClients">
                        <h2 className="partnersClients__title">We Work With The <br/> Best <span
                            className="orange">Partners.</span>
                        </h2>
                        <p className="partnersClients__subtitle">The use of railroads and trains to convey cargo on land
                            is known as
                            rail freight transport. Rail transport is popular, especially in continents with extensive
                            journey
                            durations, such as China, Russia, the United States and Europe. Freight trains can transport
                            a
                            variety of cargo, including freight containers, automobiles, cattle, grains, coal, minerals
                            and
                            metals. Bulk goods, standardized shipping containers, or particularly constructed carriages
                            for a
                            specific sort of freight can all be transported by freight trains. Rail freight travels far
                            more
                            quickly than ocean freight. It costs more than sea freight, but less than air freight.
                            Moving
                            high-value industrial products like automobiles, electronics, and computer equipment, as
                            well as
                            promotional items, by train is ideal.</p>
                        <div className="partnersClients__row">
                            <Swiper
                                slidesPerView={6}
                                spaceBetween={30}
                                slidesPerGroup={3}
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
                                    <div className="partnersClients__card">
                                        <div className="partnersClients__img">
                                            <img src={UkrailsTrans} alt="PGC"/>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="partnersClients__card">
                                        <div className="partnersClients__img">
                                            <img src={Ilm} alt="Shyngar"/>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="partnersClients__card">
                                        <div className="partnersClients__img">
                                            <img src={GlobusImg} alt="Kumtor"/>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="partnersClients__card">
                                        <div className="partnersClients__img">
                                            <img src={PGCImg} alt="Globus"/>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="partnersClients__card">
                                        <div className="partnersClients__img">
                                            <img src={KumtorImg} alt="BesGroup"/>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="partnersClients__card">
                                        <div className="partnersClients__img">
                                            <img src={WondernetImg} alt="AsiaPetroleum"/>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </section>
                    : ''
            }
            <section className="partnersClients__testimonials" id="testimonials">
                <Testimonials/>
            </section>
        </>
    );
};

export default PartnersClients;