import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronLeft, faChevronRight} from "@fortawesome/free-solid-svg-icons";
import BlogsSidebar from "../../BlogsSidebar/BlogsSidebar";
import RedTrain from '../../../assets/img/jp-valery-345C6j2jaKA-unsplash.png';
import BlogsCard from "../../BlogsCard/BlogsCard";
import Subscribe from "../../Subscribe/Subscribe";
import './blogItems.scss';
import HeaderDark from "../../HeaderDark/HeaderDark";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import {Navigation} from "swiper";
import Ilhom from "../../../assets/img/team/ilhom.png";
import Akim from "../../../assets/img/team/akim.png";
import Madina from "../../../assets/img/team/madina.png";
import Anvar from "../../../assets/img/team/anvar.png";

const BlogItems = () => {
    return (
        <>
            <HeaderDark/>
            <main>
                <section className="blogsItems">
                    <div className="container">
                        <div className="blogsItems__row">
                            <div className="blogsItems__left">
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
                                        <img className="blogsItems__left_img" src={RedTrain} alt="RedTrain"/>
                                    </SwiperSlide>
                                </Swiper>
                                <p className="blogsItems__date">August 9, 2021 / Technology</p>
                                <h2 className="blogsItems__title">Everything About Freight Transportation</h2>
                                <p className="blogsItems__subtitle">International Rail Freight: Everything You Need To
                                    Know
                                    About <br/> Rail Freight</p>
                                <div className="blogsItems__content">
                                    <div className="blogsItems__content_card">
                                        <h3>Rail Transportation: An Overview</h3>
                                        <p>The use of railroads and trains to convey cargo on land is known as rail
                                            freight
                                            transport. Rail transport is popular, especially in continents with
                                            extensive
                                            journey
                                            durations, such as China, Russia, the United States and Europe. Freight
                                            trains can
                                            transport a variety of cargo, including freight containers, automobiles,
                                            cattle,
                                            grains,
                                            coal, minerals and metals. Bulk goods, standardized shipping containers, or
                                            particularly
                                            constructed carriages for a specific sort of freight can all be transported
                                            by
                                            freight
                                            trains. Rail freight travels far more quickly than ocean freight. It costs
                                            more than
                                            sea
                                            freight, but less than air freight. Moving high-value industrial products
                                            like
                                            automobiles, electronics, and computer equipment, as well as promotional
                                            items, by
                                            train
                                            is ideal. </p>
                                    </div>
                                    <div className="blogsItems__content_card">
                                        <h3>Benefits Of Choosing Rail Freight Transport</h3>
                                        <p>While we consider energy use, rail freight might be one of the most efficient
                                            models
                                            of
                                            transportation. Six times lower than the road to be precise, especially for
                                            transporting
                                            goods over vast distances. It makes good economic and environmental sense:
                                            freight
                                            rails
                                            generate roughly 95% lower carbon emissions than airplanes and nearly 80% to
                                            100%
                                            lower
                                            emissions than comparable road transport. Being environmentally friendly
                                            transportation
                                            follows the latest trends in modern society, thus rail freight logistics
                                            will always
                                            be
                                            supported. In addition, there are fewer accidents on railroads than on
                                            roadways. </p>
                                    </div>
                                    <div className="blogsItems__content_card">
                                        <h3>Latest Freight Trends</h3>
                                        <p>In order to demonstrate the significance and exposure of the rail freight
                                            let’s take
                                            a
                                            look at the numbers. There are 1.1 million kilometers of train
                                            tracks in the world. The United States takes the lion's share of this,
                                            accounting
                                            for 32
                                            percent. Then there's Asia with 30% and Europe with 24%.
                                            Last year's statistics demonstrate that rail freight traffic is increasing
                                            globally.
                                            In
                                            Europe and Turkey alone, commodities traveled 3.1 billion ton-
                                            kilometers by rail in 2019. In Asia/Oceania and the Middle East this figure
                                            was
                                            about
                                            3.5 billion ton-kilometers. The role of freight transportation
                                            has even increased during the pandemic. COVID-19 had a mixed influence on
                                            the rail
                                            freight business, with regions such as North and South
                                            America seeing a fall in rail freight traffic while Asia and Europe
                                            witnessed a
                                            spike,
                                            which is a considerable benefit for our company and region
                                            we operate. The regional share of rail freight is likely to grow
                                            significantly in
                                            the
                                            long run. Along with this, more investment, infrastructure
                                            expansion, and technology implementation to digitize rail freight are
                                            expected.</p>
                                    </div>
                                </div>
                                <div className="blogsItems__btns">
                                    <button type="button" className="blogsItems__btn">
                                        <FontAwesomeIcon className="blogsItems__btn_icon" icon={faChevronLeft}/>
                                        <p>Prev</p>
                                    </button>
                                    <button type="button" className="blogsItems__btn">
                                        <p>Next</p>
                                        <FontAwesomeIcon className="blogsItems__btn_icon" icon={faChevronRight}/>
                                    </button>
                                </div>
                                <div className="blogsItems__posts">
                                    <h2 className="blogsItems__posts_title">Related Posts</h2>
                                    <div className="blogsItems__posts_row">
                                        <BlogsCard/>
                                        <BlogsCard/>
                                    </div>
                                </div>
                            </div>
                            <BlogsSidebar/>
                        </div>
                    </div>
                    <Subscribe/>
                </section>
            </main>
        </>
    );
};

export default BlogItems;