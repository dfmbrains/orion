import React from 'react';
import WhatsUpBlack from "../../assets/img/footer/whatsapp_black.png";
import EmailBlack from "../../assets/img/footer/email.png";

const ServicesForm = () => {
    return (
        <div className="types__contact">
            <form className="types__form">
                <label className="types__lbl">
                    <input placeholder="Leave Your Email" className="types__input" type="email"/>
                </label>
                <button className="types__btn" type="submit">Submit</button>
            </form>
            <p className="big">or</p>
            <p className="small">contact us directly</p>
            <div className="types__contact_icons">
                <img src={WhatsUpBlack} alt="WhatsUpBlack"/>
                <img src={EmailBlack} alt="EmailBlack"/>
            </div>
        </div>
    );
};

export default ServicesForm;