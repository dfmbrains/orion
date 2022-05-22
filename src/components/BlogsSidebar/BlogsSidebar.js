import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronRight, faSearch} from "@fortawesome/free-solid-svg-icons";
import VagonRed from "../../assets/img/home/vagonred.png";
import VagonBlue from "../../assets/img/home/vagonblue.png";
import VagonRedMini from "../../assets/img/home/vagonredmini.png";
import Plane from "../../assets/img/home/plane.png";

const BlogsSidebar = () => {
    return (
        <div className="blogs__right">
            <form className="blogs__right_form">
                <label className="blogs__right_lbl">
                    <input placeholder="Type Your Search" type="text" className="blogs__right_input"/>
                </label>
                <button type="submit" className="blogs__right_btn">
                    <FontAwesomeIcon className="blogs__right_icon" icon={faSearch}/>
                </button>
            </form>
            <div className="blogs__right_about">
                <h3 className="blogs__right_about-title">About Us</h3>
                <img src={VagonRed} alt="VagonRed"/>
                <p className="blogs__right_about-subtitle">We are professional logistics specialists
                    with a
                    passion for quality and efficiency. We believe in integrity.</p>
            </div>
            <ul className="blogs__right_menu">
                <h4 className="blogs__right_menu-title">Categories</h4>
                <li className="blogs__right_menu-item">Transportation (3)</li>
                <li className="blogs__right_menu-item">Logistic (2)</li>
                <li className="blogs__right_menu-item">Planning (2)</li>
                <li className="blogs__right_menu-item">Technology (2)</li>
                <li className="blogs__right_menu-item">News (2)</li>
                <li className="blogs__right_menu-item">Blogs (2)</li>
                <li className="blogs__right_menu-item">Transportation (2)</li>
            </ul>
            <div className="blogs__right_posts">
                <h3 className="blogs__right_posts-title">Relayed Posts</h3>
                <div className="blogs__right_posts-card">
                    <img src={VagonBlue} alt="VagonBlue"/>
                    <div>
                        <p className="blogs__right_posts-card-name">Transportation</p>
                        <p className="blogs__right_posts-card-descr">Logistics News</p>
                    </div>
                </div>
                <div className="blogs__right_posts-card">
                    <img src={VagonRedMini} alt="VagonRed"/>
                    <div>
                        <p className="blogs__right_posts-card-name">Transportation</p>
                        <p className="blogs__right_posts-card-descr">Logistics News</p>
                    </div>
                </div>
                <div className="blogs__right_posts-card">
                    <img src={Plane} alt="Plane"/>
                    <div>
                        <p className="blogs__right_posts-card-name">Transportation</p>
                        <p className="blogs__right_posts-card-descr">Logistics News</p>
                    </div>
                </div>
            </div>
            <div>
                <h3 className="blogs__right_form-title">Newsletter</h3>
                <form className="blogs__right_form">
                    <label className="blogs__right_lbl">
                        <input placeholder="Type Your Email" type="text" className="blogs__right_input"/>
                    </label>
                    <button type="submit" className="blogs__right_btn">
                        <FontAwesomeIcon className="blogs__right_icon" icon={faChevronRight}/>
                    </button>
                </form>
            </div>
            <div className="blogs__right_tags">
                <p className="blogs__right_tags-title">Tags</p>
                <div className="blogs__right_tags-row">
                    <p>Business / Shipping /<br/> Eco / Travel /<br/> Truck / Warehouse</p>
                </div>
            </div>
        </div>
    );
};

export default BlogsSidebar;