import React from 'react';
import {useTranslation} from "react-i18next";

const Subscribe = () => {
    const {t} = useTranslation();
    return (
        <div className="subscribe">
            <div className="container">
                <h2 className="subscribe__title">{t('homeSubscribeTitle')}</h2>
                <h3 className="subscribe__subtitle">{t('homeSubscribeSubtitle')}</h3>
                <form className="subscribe__form">
                    <label className="subscribe__lbl">
                        <input placeholder="Your Email " className="subscribe__input" type="email"/>
                        <button type="submit" className="subscribe__btn">{t('buttonSubscribe')}</button>
                    </label>
                </form>
            </div>
        </div>
    );
};

export default Subscribe;