import React, {useState} from "react";
import HomeBgFirst from '../../../assets/img/home/bg.png';
import HomeBgSecond from '../../../assets/img/home/main2.jpg';
import HomeBgThird from '../../../assets/img/home/main3.jpg';
import HomeBgFourth from '../../../assets/img/home/main4.jpg';
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {Autoplay, Pagination, Navigation} from "swiper";
import './style/home.scss';
import './style/containerFreight.scss';
import './style/rates.scss';
import './style/services.scss';
import './style/clients.scss';
import './style/statistics.scss';
import './style/team.scss';
import './style/posts.scss';
import './style/subscribe.scss';
import ContainerImg from '../../../assets/img/home/containerFreight.png';
import Dots from '../../../assets/img/home/dots.png';
import DotsMini from '../../../assets/img/home/dotsmini.png';
import Triangle from '../../../assets/img/home/triangle.png';
import Planet from '../../../assets/img/home/planet.png';
import Bluebg from '../../../assets/img/home/bluebg.png';
import Railway from '../../../assets/img/containers/coveredwagon.jpg';
import Company from '../../../assets/img/home/greenlightslogo.png';
import ClientsBg from '../../../assets/img/home/clientsbg.png';
import Altynbek from '../../../assets/img/team/altynbek.png';
import Anvar from '../../../assets/img/team/anvar.png';
import Ilhom from '../../../assets/img/team/ilhom.png';
import Akim from '../../../assets/img/team/akim.png';
import Madina from '../../../assets/img/team/madina.png';
import Office from '../../../assets/img/team/office.jpg';
import Port from '../../../assets/img/home/port.png';
import Sklad from '../../../assets/img/home/sklad.png';
import Truck from '../../../assets/img/home/truck.png';
import Arrow from '../../../assets/img/home/arrow.png';
import ServicecComponent from "../ServicesComponent/ServicecComponent";
import Subscribe from "../../Subscribe/Subscribe";
import {useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";

const HomePage = () => {
    const [member, setMember] = useState('altynbek');
    const pagination = {
        clickable: true,
    };
    const navigate = useNavigate();

    const {t} = useTranslation();
    return (
        <>
            <section className="main">
                <Swiper navigation={true}
                        autoplay={{
                            delay: 6500,
                            disableOnInteraction: false,
                        }}
                        modules={[Autoplay, Navigation]}
                        loop={true}
                        className="mySwiper">
                    <SwiperSlide>
                        <div className="home">
                            <div className="home__descr">
                                <h1 className="home__descr_title">{t('homeTitle1')}</h1>
                                <p className="home__descr_subtitle">{t('homeSubtitle1')}</p>
                            </div>
                            <div className="home__row">
                                <p className="home__types orange">{t('headerMenuItem2List3')}</p>
                                <p className="home__types">{t('headerMenuItem2List1')}</p>
                                <p className="home__types">{t('headerMenuItem2List5')}</p>
                                <p className="home__types">{t('headerMenuItem2List2')}</p>
                            </div>
                            <div className="home__image">
                                <img className="img" src={HomeBgFirst} alt="HomePage"/>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="home">
                            <div className="home__descr">
                                <h1 className="home__descr_title">{t('homeTitle2')}</h1>
                                <p className="home__descr_subtitle">{t('homeSubtitle2')}</p>
                            </div>
                            <div className="home__row">
                                <p className="home__types">{t('headerMenuItem2List3')}</p>
                                <p className="home__types orange">{t('headerMenuItem2List1')}</p>
                                <p className="home__types">{t('headerMenuItem2List5')}</p>
                                <p className="home__types">{t('headerMenuItem2List2')}</p>
                            </div>
                            <div className="home__image">
                                <img className="img" src={HomeBgSecond} alt="HomePage"/>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="home">
                            <div className="home__descr">
                                <h1 className="home__descr_title">{t('homeTitle3')}</h1>
                                <p className="home__descr_subtitle">{t('homeSubtitle3')}</p>
                            </div>
                            <div className="home__row">
                                <p className="home__types">{t('headerMenuItem2List3')}</p>
                                <p className="home__types">{t('headerMenuItem2List1')}</p>
                                <p className="home__types orange">{t('headerMenuItem2List5')}</p>
                                <p className="home__types">{t('headerMenuItem2List2')}</p>
                            </div>
                            <div className="home__image">
                                <img className="img" src={HomeBgThird} alt="HomePage"/>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="home">
                            <div className="home__descr">
                                <h1 className="home__descr_title">{t('homeTitle4')}</h1>
                                <p className="home__descr_subtitle">{t('homeSubtitle4')}</p>
                            </div>
                            <div className="home__row">
                                <p className="home__types">{t('headerMenuItem2List3')}</p>
                                <p className="home__types">{t('headerMenuItem2List1')}</p>
                                <p className="home__types">{t('headerMenuItem2List5')}</p>
                                <p className="home__types orange">{t('headerMenuItem2List2')}</p>
                            </div>
                            <div className="home__image">
                                <img className="img" src={HomeBgFourth} alt="HomePage"/>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </section>
            <section className="containerFreight">
                <div className="container-big">
                    <div className="containerFreight__row">
                        <div className="containerFreight__img">
                            <img src={ContainerImg} alt="ContainerImg"/>
                        </div>
                        <div className="containerFreight__descr">
                            <h2 className="containerFreight__descr_title">{t('homeContainerTitle')}</h2>
                            <h3 className="containerFreight__descr_yellow">{t('homeContainerSubtitle')}</h3>
                            <p className="containerFreight__descr_subtitle">{t('homeContainerDescription')}</p>
                            <button type="button" className="containerFreight__descr_btn">{t('buttonMore')}</button>
                        </div>
                        <div className="containerFreight__card">
                            <h2 className="containerFreight__card_title">{t('homeContainerListTitle')}</h2>
                            <p className="containerFreight__card_subtitle">{t('headerMenuItem2List2')}</p>
                            <p className="containerFreight__card_subtitle">{t('headerMenuItem2List5')}</p>
                            <p className="containerFreight__card_subtitle">{t('headerMenuItem2List3')}</p>
                            <p className="containerFreight__card_subtitle no-margin">{t('more')}</p>
                        </div>
                    </div>
                </div>
                <div className="containerFreight__bg">
                    <img src={Triangle} alt="Triangle"/>
                    <img className="dots" src={Dots} alt="Dots"/>
                </div>
            </section>
            <section className="rates">
                <div className="container">
                    <div className="rates__row">
                        <div className="rates__card">
                            <h2 className="rates__card_title">{t('homeCalculateTitle')}</h2>
                            <p className="rates__card_subtitle">{t('homeCalculateSubtitle')}</p>
                            <p className="rates__card_subtitle no-margin">{t('homeCalculateList')}</p>
                            <div className="rates__card_list">
                                <Swiper
                                    slidesPerView={3}
                                    slidesPerGroup={1}
                                    loop={true}
                                    loopFillGroupWithBlank={true}
                                    pagination={{
                                        clickable: true,
                                    }}
                                    navigation={true}
                                    modules={[Navigation]}
                                    className="mySwiper"
                                    breakpoints={{
                                        576: {
                                            spaceBetween: 20,
                                        },
                                        375: {
                                            spaceBetween: 10,
                                        }
                                    }}
                                >
                                    <SwiperSlide>
                                        <div className="swiper__row">
                                            <p className="rates__card_list-item white">{t('homeCalculateCountry1')}</p>
                                            <p className="rates__card_list-item white">{t('homeCalculateCountry2')}</p>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="swiper__row">
                                            <p className="rates__card_list-item white">{t('homeCalculateCountry3')}</p>
                                            <p className="rates__card_list-item white">{t('homeCalculateCountry4')}</p>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="swiper__row">
                                            <p className="rates__card_list-item white">{t('homeCalculateCountry5')}</p>
                                            <p className="rates__card_list-item white">{t('homeCalculateCountry6')}</p>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="swiper__row">
                                            <p className="rates__card_list-item white">{t('homeCalculateCountry7')}</p>
                                            <p className="rates__card_list-item white">{t('homeCalculateCountry8')}</p>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="swiper__row">
                                            <p className="rates__card_list-item white">{t('homeCalculateCountry9')}</p>
                                            <p className="rates__card_list-item white">{t('homeCalculateCountry10')}</p>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                                <img className="rates__card_list-img" src={DotsMini} alt="DotsMini"/>
                            </div>
                        </div>
                        <div id={"calculate"} className="rates__calculate">
                            <p className="rates__calculate_title">{t('homeCalculateTitle2')}</p>
                            <form action="" className="rates__calculate_form">
                                <div className="rates__calculate_form-first">
                                    <label className="rates__calculate_lbl">
                                        <input placeholder={t('homeCalculateInput1')} type="text"
                                               className="rates__calculate_input"/>
                                    </label>
                                    <span className="arrow"><img src={Arrow} alt="Arrow"/></span>
                                    <label className="rates__calculate_lbl">
                                        <input placeholder={t('homeCalculateInput2')} type="text"
                                               className="rates__calculate_input"/>
                                    </label>
                                </div>
                                <div className="rates__calculate_form-row">
                                    <label className="rates__calculate_lbl">
                                        <input placeholder={t('homeCalculateInput3')} type="text"
                                               className="rates__calculate_input"/>
                                    </label>
                                    <label className="rates__calculate_lbl">
                                        <input placeholder={t('homeCalculateInput4')} type="text"
                                               className="rates__calculate_input"/>
                                    </label>
                                </div>
                                <div className="rates__calculate_form-row">
                                    <label className="rates__calculate_lbl">
                                        <input placeholder={t('homeCalculateInput5')} type="text"
                                               className="rates__calculate_input"/>
                                    </label>
                                    <label className="rates__calculate_lbl">
                                        <input placeholder={t('homeCalculateInput6')} type="text"
                                               className="rates__calculate_input"/>
                                    </label>
                                </div>
                                <div className="rates__calculate_form-row">
                                    <label className="rates__calculate_lbl">
                                        <input placeholder={t('homeCalculateInput7')} type="text" className="rates__calculate_input"/>
                                    </label>
                                    <label className="rates__calculate_lbl">
                                        <input placeholder={t('homeCalculateInput8')} type="text"
                                               className="rates__calculate_input"/>
                                    </label>
                                </div>
                                <div className="rates__calculate_form-row">
                                    <label className="rates__calculate_lbl">
                                        <input placeholder={t('homeCalculateInput9')} type="tel"
                                               className="rates__calculate_input"/>
                                    </label>
                                    <label className="rates__calculate_lbl">
                                        <input placeholder={t('homeCalculateInput10')} type="email"
                                               className="rates__calculate_input"/>
                                    </label>
                                </div>
                                <button type="button" className="rates__calculate_btn">{t('homeCalculateButton')}</button>
                                <p className="rates__calculate_subtitle">{t('homeCalculateDescription')}</p>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="rates__bg">
                    <img className="planet" src={Planet} alt="Planet"/>
                    <img className="bluebg" src={Bluebg} alt="Bluebg"/>
                </div>
            </section>
            <section className="services">
                <div className="container">
                    <div className="services__top">
                        <Swiper pagination={pagination} clickable={true} loop={true} modules={[Pagination, Navigation]}
                                className="mySwiper">
                            <SwiperSlide>
                                <div className="services__row">
                                    <div className="services__left">
                                        <h2 className="services__title">{t('homeProvisionTitle')}</h2>
                                        <p className="services__subtitle">{t('homeProvisionSubtitle')}</p>
                                        <button className="services__btn">{t('buttonOurServices')}</button>
                                    </div>
                                    <img className="services__img" src={Railway} alt="railway carriage"/>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <ServicecComponent/>
                </div>
            </section>
            <section className="clients">
                <div className="container">
                    <div className="clients__card">
                        <h2 className="clients__title">{t('homeClientsTitle')}</h2>
                        <p className="clients__subtitle">{t('homeClientsSubtitle')}</p>
                        <div className="clients__client">
                            <div className="clients__client_img">
                                <div className="block">
                                    <img className="company" src={Company} alt="Company"/>
                                </div>
                            </div>
                            <div className="clients__client_name">
                                <p className="clients__client_subtitle">{t('homeClientsDescription')}</p>
                                <p className="clients__client_title">Greenlights LLP</p>
                            </div>
                        </div>
                        <button className="clients__btn">{t('buttonReadOthers')}</button>
                    </div>
                </div>
                <div className="clients__bg">
                    <img className="bg" src={ClientsBg} alt="ClientsBg"/>
                </div>
            </section>
            <section className="statistics">
                <div className="container">
                    <div className="statistics__row">
                        <div className="statistics__card">
                            <p className="statistics__title">{t('homeStatisticItem1')}</p>
                            <h3 className="statistics__subtitle">10,000</h3>
                        </div>
                        <div className="statistics__card">
                            <p className="statistics__title">{t('homeStatisticItem2')}</p>
                            <h3 className="statistics__subtitle">10+</h3>
                        </div>
                        <div className="statistics__card">
                            <p className="statistics__title">{t('homeStatisticItem3')}</p>
                            <h3 className="statistics__subtitle">10 <span className="small">{t('year')}</span></h3>
                        </div>
                        <div className="statistics__card">
                            <p className="statistics__title">{t('homeStatisticItem4')}</p>
                            <h3 className="statistics__subtitle">8 <span className="small">{t('year')}</span></h3>
                        </div>
                    </div>
                </div>
            </section>
            <section className="team">
                <div className="container">
                    <div className="team__card">
                        <div className="team__left">
                            <h2 className="team__title">{t('homeTeamTitle')}</h2>
                            {
                                member === "altynbek"
                                    ? <div className="team__member">
                                        <div className="team__member_row">
                                            <img src={Altynbek} alt="Altynbek" className="team__member_img"/>
                                            <div className="team__member_descr">
                                                <p className="team__member_position">{t('homeTeamPosition1')}</p>
                                                <p className="team__member_name">{t('homeTeamName1')}</p>
                                            </div>
                                        </div>
                                        <p className="team__subtitle">{t('homeTeamSubtitle1')}</p>
                                    </div>
                                    : member === "ilhom"
                                    ? <div className="team__member">
                                        <div className="team__member_row">
                                            <img src={Ilhom} alt="Ilhom" className="team__member_img"/>
                                            <div className="team__member_descr">
                                                <p className="team__member_position">{t('homeTeamPosition2')}</p>
                                                <p className="team__member_name">{t('homeTeamName2')}</p>
                                            </div>
                                        </div>
                                        <p className="team__subtitle">Ilhom is our senior logistics manager &
                                            specialist, with a
                                            wealth of knowledge and experience in this sphere/ He is specialising in
                                            managing the
                                            whole logistics process and will make sure that your cargo will be shipped
                                            with no delays and
                                            successful. </p>
                                    </div>
                                    : member === "anvar"
                                        ? <div className="team__member">
                                            <div className="team__member_row">
                                                <img src={Anvar} alt="Anvar" className="team__member_img"/>
                                                <div className="team__member_descr">
                                                    <p className="team__member_position">{t('homeTeamPosition4')}</p>
                                                    <p className="team__member_name">{t('homeTeamName4')}</p>
                                                </div>
                                            </div>
                                            <p className="team__subtitle">Altynbek is our senior logistics manager &
                                                specialist, with a
                                                wealth of knowledge and experience in this sphere/ He is specialising in
                                                managing the
                                                whole logistics process and will make sure that your cargo will be
                                                shipped with no delays and
                                                successful. </p>
                                        </div>
                                        : member === "akim"
                                            ? <div className="team__member">
                                                <div className="team__member_row">
                                                    <img src={Akim} alt="Akim" className="team__member_img"/>
                                                    <div className="team__member_descr">
                                                        <p className="team__member_position">{t('homeTeamPosition5')}</p>
                                                        <p className="team__member_name">{t('homeTeamName5')}</p>
                                                    </div>
                                                </div>
                                                <p className="team__subtitle">Altynbek is our senior logistics manager &
                                                    specialist, with a
                                                    wealth of knowledge and experience in this sphere/ He is
                                                    specialising in managing the
                                                    whole logistics process and will make sure that your cargo will be
                                                    shipped with no delays and
                                                    successful. </p>
                                            </div>
                                            : ''
                            }
                            <button className="team__card_btn">{t('buttonMore')}</button>
                        </div>
                        <div className="team__right">
                            <img src={Office} alt="Office"/>
                        </div>
                    </div>
                    <div className="team__bot">
                        <h3 className="team__bot_title">{t('homeTeamTitle2')}</h3>
                        <Swiper
                            spaceBetween={30}
                            slidesPerGroup={1}
                            navigation={true}
                            modules={[Navigation]}
                            loop={true}
                            className="mySwiper"
                            breakpoints={{
                                1400: {
                                    slidesPerView: 4,
                                },
                                996: {
                                    slidesPerView: 3,
                                    spaceBetween: 20,
                                },
                                576: {
                                    slidesPerView: 2,
                                }
                            }}
                        >
                            <SwiperSlide>
                                <div onClick={() => setMember('ilhom')} className="team__bot_card">
                                    <img src={Ilhom} alt="Ilhom"/>
                                    <div className="team__bot_card-row">
                                        <p className="team__bot_card-position">{t('homeTeamPosition2')}</p>
                                        <p className="team__bot_card-name">{t('homeTeamName2')}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div onClick={() => setMember('anvar')} className="team__bot_card">
                                    <img src={Anvar} alt="Anvar"/>
                                    <div className="team__bot_card-row">
                                        <p className="team__bot_card-position">{t('homeTeamPosition4')}</p>
                                        <p className="team__bot_card-name">{t('homeTeamName4')}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div onClick={() => setMember('akim')} className="team__bot_card">
                                    <div className="team__bot_card-circle">
                                        <img src={Akim} alt="Akim"/>
                                    </div>
                                    <div className="team__bot_card-row">
                                        <p className="team__bot_card-position">{t('homeTeamPosition5')}</p>
                                        <p className="team__bot_card-name">{t('homeTeamName5')}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div onClick={() => setMember('altynbek')} className="team__bot_card">
                                    <div className="team__bot_card-circle">
                                        <img src={Madina} alt="Madina"/>
                                    </div>
                                    <div className="team__bot_card-row">
                                        <p className="team__bot_card-position">{t('homeTeamPosition6')}</p>
                                        <p className="team__bot_card-name">{t('homeTeamName6')}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </section>
            <section className="posts">
                <div className="container">
                    <h2 className="posts__title">{t('homeBlogsTitle')}</h2>
                    <div className="posts__row">
                        <div className="posts__card">
                            <img className="posts__card_img" src={Port} alt="Port"/>
                            <div className="posts__card_row">
                                <div className="posts__card_date">
                                    <p className="big_date">01</p>
                                    <p className="small_date">{t('homeBlogsCard1Date')}</p>
                                </div>
                                <div className="posts__card_right">
                                    <p className="posts__card_right-name">{t('homeBlogsCard1Type')}</p>
                                    <p className="posts__card_right-title">{t('homeBlogsCard1Title')}</p>
                                    <p className="posts__card_right-subtitle">{t('homeBlogsCard1Subtitle')}</p>
                                    <button onClick={() => navigate('/blogs/freight')}
                                            className="posts__card_right-btn">{t('buttonMore')}
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="posts__card">
                            <img className="posts__card_img" src={Sklad} alt="Sklad"/>
                            <div className="posts__card_row">
                                <div className="posts__card_date">
                                    <p className="big_date">05</p>
                                    <p className="small_date">{t('homeBlogsCard2Date')}</p>
                                </div>
                                <div className="posts__card_right">
                                    <p className="posts__card_right-name">{t('homeBlogsCard2Type')}</p>
                                    <p className="posts__card_right-title">{t('homeBlogsCard2Title')}</p>
                                    <p className="posts__card_right-subtitle">{t('homeBlogsCard2Subtitle')}</p>
                                    <button type="button" className="posts__card_right-btn">{t('buttonMore')}</button>
                                </div>
                            </div>
                        </div>
                        <div className="posts__card">
                            <img className="posts__card_img" src={Truck} alt="Truck"/>
                            <div className="posts__card_row">
                                <div className="posts__card_date">
                                    <p className="big_date">01</p>
                                    <p className="small_date">{t('homeBlogsCard3Date')}</p>
                                </div>
                                <div className="posts__card_right">
                                    <p className="posts__card_right-name">{t('homeBlogsCard3Type')}</p>
                                    <p className="posts__card_right-title">{t('homeBlogsCard3Title')}</p>
                                    <p className="posts__card_right-subtitle">{t('homeBlogsCard3Subtitle')}</p>
                                    <button type="button" className="posts__card_right-btn">{t('buttonMore')}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Subscribe/>
            </section>
        </>
    );
};

export default HomePage;