import React, {useEffect, useState} from 'react';
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGlobe, faBars, faPhoneAlt, faHeadset} from '@fortawesome/free-solid-svg-icons';
import './header.scss';
import Logo from '../../assets/img/header/logo.png';
import {useTranslation} from "react-i18next";
import i18n from '../../i18n';

const Header = () => {
    const [menu, setMenu] = useState(false);
    const {t} = useTranslation();
    const [state, setState] = useState(true);

    useEffect(() => {
        i18n.changeLanguage(localStorage.language);
    }, [localStorage.language, state]);

    return (
        <header id="header" className="header">
            <div className="header__top">
                <div className="header__top_left">
                    <FontAwesomeIcon className="header__top_left-icon" icon={faHeadset}/>
                    <p className="header__top_left-title">{t('support')} 24 / 7</p>
                </div>
                <div className="header__top_right">
                    <FontAwesomeIcon className="header__top_right-icon" icon={faPhoneAlt}/>
                    <div className="header__top_right-numbers">
                        <a className="header__top_right-number" href="tel:+996705006088">+996705006088</a>
                        <a className="header__top_right-num" href="tel:+996707567676">+996707567676</a>
                    </div>
                </div>
            </div>
            <div className="header__row">
                <NavLink to="/">
                    <img className="header__logo" src={Logo} alt="OrionTrans"/>
                </NavLink>
                <div style={{display: `${menu ? 'block' : 'none'}`}} onClick={() => setMenu(!menu)}
                     className={`${menu ? ' header__layout' : ''}`}>
                </div>
                <ul className={`${menu ? 'header__menu_open' : 'header__menu_close'} header__menu`}>
                    <li className="header__menu_item header__menu_home">
                        <NavLink to="/" className="header__menu_link">{t('headerMenuItem')}</NavLink>
                        <div className="dropdown">
                            <NavLink to="/" className="dropdown__link">Rail Freight Transport</NavLink>
                            <NavLink to="/" className="dropdown__link">Rail Freight-Forwarding Services</NavLink>
                            <NavLink to="/" className="dropdown__link">Provision Of Rolling Stock</NavLink>
                            <NavLink to="/" className="dropdown__link">Container Freight Transport</NavLink>
                            <NavLink to="/" className="dropdown__link">Organization Of Multimodal Transport</NavLink>
                            <NavLink to="/" className="dropdown__link">Transportation Escort Services</NavLink>
                            <NavLink to="/" className="dropdown__link">Export-Import And Transit Rail Rates
                                Payments</NavLink>
                            <NavLink to="/" className="dropdown__link">Shipping Documents Processing Services</NavLink>
                            <div className="dropdown-bg">
                            </div>
                        </div>
                    </li>
                    <li className="header__menu_item header__menu_company">
                        <NavLink to="/company" className="header__menu_link">{t('headerMenuItem1')}</NavLink>
                        <div className="dropdown">
                            <NavLink to="/" className="dropdown__link">{t('headerMenuItem1List1')}</NavLink>
                            <NavLink to="/" className="dropdown__link">{t('headerMenuItem1List2')}</NavLink>
                            <NavLink to="/" className="dropdown__link">{t('headerMenuItem1List3')}</NavLink>
                            <div className="dropdown-bg">
                            </div>
                        </div>
                    </li>
                    <li className="header__menu_item header__menu_services">
                        <NavLink to="/services" className="header__menu_link">{t('headerMenuItem2')}</NavLink>
                        <div className="dropdown">
                            <NavLink to="/" className="dropdown__link">{t('headerMenuItem2List1')}</NavLink>
                            <NavLink to="/" className="dropdown__link">{t('headerMenuItem2List2')}</NavLink>
                            <NavLink to="/" className="dropdown__link">{t('headerMenuItem2List3')}</NavLink>
                            <NavLink to="/" className="dropdown__link">{t('headerMenuItem2List4')}</NavLink>
                            <NavLink to="/" className="dropdown__link">{t('headerMenuItem2List5')}</NavLink>
                            <NavLink to="/" className="dropdown__link">{t('headerMenuItem2List6')}</NavLink>
                            <NavLink to="/" className="dropdown__link">{t('headerMenuItem2List7')}</NavLink>
                            <div className="dropdown-bg">
                            </div>
                        </div>
                    </li>
                    <li className="header__menu_item header__menu_clients">
                        <NavLink to="/clients" className="header__menu_link">{t('headerMenuItem3')}</NavLink>
                        <div className="dropdown">
                            <NavLink to="/" className="dropdown__link">{t('headerMenuItem3List1')}</NavLink>
                            <NavLink to="/" className="dropdown__link">{t('headerMenuItem3List2')}</NavLink>
                            <NavLink to="/" className="dropdown__link">{t('headerMenuItem3List3')}</NavLink>
                            <div className="dropdown-bg">
                            </div>
                        </div>
                    </li>
                    <li className="header__menu_item header__menu_blogs">
                        <NavLink to="/blogs" className="header__menu_link">{t('headerMenuItem4')}</NavLink>
                        <div className="dropdown">
                            <NavLink to="/" className="dropdown__link">{t('headerMenuItem4List1')}</NavLink>
                            <NavLink to="/" className="dropdown__link">{t('headerMenuItem4List2')}</NavLink>
                            <div className="dropdown-bg">
                            </div>
                        </div>
                    </li>
                    <li className="header__menu_item header__menu_contact">
                        <NavLink to="/contacts" className="header__menu_link">{t('headerMenuItem5')}</NavLink>
                    </li>
                </ul>
                <div className="header__right">
                    <div onClick={() => {
                        if (localStorage.language === 'en') {
                            setState(!state);
                            return localStorage.setItem("language", "ru")
                        } else {
                            setState(!state);
                            return localStorage.setItem("language", "en")
                        }
                    }} className="header__right_btn">
                        <FontAwesomeIcon className="header__right_btn-icon" icon={faGlobe}/>
                        <span className="header__right_btn-title">{localStorage.language === 'en' ? "EN" : "RU"}</span>
                    </div>
                    <div className="header__right_menu">
                        <FontAwesomeIcon onClick={() => setMenu(!menu)} className="header__right_menu-icon"
                                         icon={faBars}/>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;