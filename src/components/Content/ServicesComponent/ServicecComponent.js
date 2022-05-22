import React from 'react';
import CreditCard from "../../../assets/img/home/creditcard.png";
import Trust from "../../../assets/img/home/trust.png";
import Clock from "../../../assets/img/home/clock.png";
import Finance from "../../../assets/img/home/finance.png";
import {useTranslation} from "react-i18next";

const ServicecComponent = () => {
    const {t} = useTranslation();
    return (
        <>
            <div className="services__bot">
                <div className="services__card">
                    <img src={CreditCard} alt="CreditCard" className="services__card_img"/>
                    <h3 className="services__card_title">{t('homeProvisionItem1Title')}</h3>
                    <p className="services__card_subtitle">{t('homeProvisionItem1Subtitle')}</p>
                </div>
                <div className="services__card">
                    <img src={Trust} alt="Trust" className="services__card_img"/>
                    <h3 className="services__card_title">{t('homeProvisionItem2Title')}</h3>
                    <p className="services__card_subtitle">{t('homeProvisionItem2Subtitle')}</p>
                </div>
                <div className="services__card">
                    <img src={Clock} alt="Clock" className="services__card_img"/>
                    <h3 className="services__card_title">{t('homeProvisionItem3Title')}</h3>
                    <p className="services__card_subtitle">{t('homeProvisionItem3Subtitle')}</p>
                </div>
                <div className="services__card">
                    <img src={Finance} alt="Finance" className="services__card_img"/>
                    <h3 className="services__card_title">{t('homeProvisionItem4Title')}</h3>
                    <p className="services__card_subtitle">{t('homeProvisionItem4Subtitle')}</p>
                </div>
            </div>
        </>
    );
};

export default ServicecComponent;