import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faGlobe, faHeadset, faPhoneAlt} from "@fortawesome/free-solid-svg-icons";
import Logo from "../../assets/img/header/logo.png";
import {NavLink} from "react-router-dom";

const HeaderDark = () => {
    return (
        <header id="header" className="header">
            <div className="header__top">
                <div className="header__top_left">
                    <FontAwesomeIcon className="header__top_left-icon" icon={faHeadset} />
                    <p className="header__top_left-title">Support 24 / 7</p>
                </div>
                <div className="header__top_right">
                    <FontAwesomeIcon className="header__top_right-icon" icon={faPhoneAlt} />
                    <div className="header__top_right-numbers">
                        <a className="header__top_right-number" href="tel:+996705006088">+996705006088</a>
                        <a className="header__top_right-num" href="tel:+996707567676">+996707567676</a>
                    </div>
                </div>
            </div>
            <div className="header__row dark">
                <NavLink to="/">
                    <img className="header__logo" src={Logo} alt="OrionTrans"/>
                </NavLink>
                <ul className="header__menu">
                    <li className="header__menu_item">
                        <NavLink to="/" className="header__menu_link">Home</NavLink>
                    </li>
                    <li className="header__menu_item">
                        <NavLink to="/company" className="header__menu_link">Company</NavLink>
                    </li>
                    <li className="header__menu_item">
                        <NavLink to="/services" className="header__menu_link">Services</NavLink>
                    </li>
                    <li className="header__menu_item">
                        <NavLink to="/clients" className="header__menu_link">Clients & Partners</NavLink>
                    </li>
                    <li className="header__menu_item">
                        <NavLink to="/blogs" className="header__menu_link">Blogs</NavLink>
                    </li>
                    <li className="header__menu_item">
                        <NavLink to="/contacts" className="header__menu_link">Contact</NavLink>
                    </li>
                </ul>
                <div className="header__right">
                    <div className="header__right_btn">
                        <FontAwesomeIcon className="header__right_btn-icon" icon={faGlobe} />
                        <span className="header__right_btn-title">RU</span>
                    </div>
                    <div className="header__right_menu">
                        <FontAwesomeIcon className="header__right_menu-icon" icon={faBars} />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default HeaderDark;