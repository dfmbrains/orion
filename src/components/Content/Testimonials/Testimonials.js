import React from 'react';
import Quotes from "../../../assets/img/home/quotes.png";
import Orenbi from '../../../assets/img/partners/orenbi.png';
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import {Navigation} from "swiper";

const Testimonials = () => {
    return (
        <div>
            <section className="review">
                <div className="review__row">
                    <div className="review__item">
                        <h2 className="review__title">Testimonials</h2>
                        <div className="review__quotes">
                            <img src={Quotes} alt="Quotes"/>
                        </div>
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={30}
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
                                <div className="review__card">
                                    <div className="review__img">
                                        <img src={Orenbi} alt="Orenbi"/>
                                    </div>
                                    <p className="review__subtitle">“The most distinctive features of “Orion-Trans LLC ” is
                                        their business approach, a high staff professionalism and a strong team spirit. This
                                        company is a reliable, responsible and highly qualified partner. “Orenbi Trading LLC
                                        ” totally recommend to the businesses “Orion-Trans LLC” as a reliable and stable
                                        partner.”</p>
                                    <p className="review__position">Orenbi Trading LLC</p>
                                    <h3 className="review__name">Alina Alekseevna Bukreeva</h3>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="review__card">
                                    <div className="review__img">
                                        <img src={Orenbi} alt="Orenbi"/>
                                    </div>
                                    <p className="review__subtitle">“The most distinctive features of “Orion-Trans LLC ” is
                                        their business approach, a high staff professionalism and a strong team spirit. This
                                        company is a reliable, responsible and highly qualified partner. “Orenbi Trading LLC
                                        ” totally recommend to the businesses “Orion-Trans LLC” as a reliable and stable
                                        partner.”</p>
                                    <p className="review__position">Orenbi Trading LLC</p>
                                    <h3 className="review__name">Alina Alekseevna Bukreeva</h3>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="review__card">
                                    <div className="review__img">
                                        <img src={Orenbi} alt="Orenbi"/>
                                    </div>
                                    <p className="review__subtitle">“The most distinctive features of “Orion-Trans LLC ” is
                                        their business approach, a high staff professionalism and a strong team spirit. This
                                        company is a reliable, responsible and highly qualified partner. “Orenbi Trading LLC
                                        ” totally recommend to the businesses “Orion-Trans LLC” as a reliable and stable
                                        partner.”</p>
                                    <p className="review__position">Orenbi Trading LLC</p>
                                    <h3 className="review__name">Alina Alekseevna Bukreeva</h3>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Testimonials;