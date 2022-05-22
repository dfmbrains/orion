import React from 'react';
import Freight from "../../../assets/img/servicesFreight.png";
import ServicesForm from "../../ServicesForm/ServicesForm";
import './FreightTransportation.scss';

const FreightTransportation = () => {
    return (
        <>
            <section className="servicesHome">
                <h1 className="servicesHome__title">Export-Import And Transit <br/> Rail Rates Payments</h1>
                <div className="servicesHome__image">
                    <img className="img" src={Freight} alt="Station"/>
                </div>
            </section>
            <section className="servicesFreight">
                <div className="container-services">
                    <h2 className="servicesFreight__title">Everything About Freight Transportation</h2>
                    <p className="servicesFreight__subtitle">International Rail Freight: Everything You Need To Know About
                        Rail Freight</p>
                    <div className="servicesFreight__list">
                        <div className="servicesFreight__item">
                            <h4 className="servicesFreight__item_title">Rail Transportation: An Overview</h4>
                            <p className="servicesFreight__item_subtitle">The use of railroads and trains to convey cargo on
                                land is known as rail freight transport. Rail transport is popular, especially in continents
                                with extensive journey durations, such as China, Russia, the United States and Europe.
                                Freight
                                trains can transport a variety of cargo, including freight containers, automobiles, cattle,
                                grains, coal, minerals and metals. Bulk goods, standardized shipping containers, or
                                particularly
                                constructed carriages for a specific sort of freight can all be transported by freight
                                trains.
                                Rail freight travels far more quickly than ocean freight. It costs more than sea freight,
                                but
                                less than air freight. Moving high-value industrial products like automobiles, electronics,
                                and
                                computer equipment, as well as promotional items, by train is ideal. </p>
                        </div>
                        <div className="servicesFreight__item">
                            <h4 className="servicesFreight__item_title">Benefits Of Choosing Rail Freight Transport</h4>
                            <p className="servicesFreight__item_subtitle">While we consider energy use, rail freight might
                                be
                                one of the most efficient models of transportation. Six times lower than the road to be
                                precise,
                                especially for transporting goods over vast distances. It makes good economic and
                                environmental
                                sense: freight rails generate roughly 95% lower carbon emissions than airplanes and nearly
                                80%
                                to 100% lower emissions than comparable road transport. Being environmentally friendly
                                transportation follows the latest trends in modern society, thus rail freight logistics will
                                always be supported. In addition, there are fewer accidents on railroads than on
                                roadways. </p>
                        </div>
                        <div className="servicesFreight__item">
                            <h4 className="servicesFreight__item_title">Latest Freight Trends</h4>
                            <p className="servicesFreight__item_subtitle">In order to demonstrate the significance and
                                exposure
                                of the rail freight let’s take a look at the numbers. There are 1.1 million kilometers of
                                train
                                tracks in the world. The United States takes the lion's share of this, accounting for 32
                                percent. Then there's Asia with 30% and Europe with 24%.
                                Last year's statistics demonstrate that rail freight traffic is increasing globally. In
                                Europe
                                and Turkey alone, commodities traveled 3.1 billion ton-
                                kilometers by rail in 2019. In Asia/Oceania and the Middle East this figure was about 3.5
                                billion ton-kilometers. The role of freight transportation
                                has even increased during the pandemic. COVID-19 had a mixed influence on the rail freight
                                business, with regions such as North and South
                                America seeing a fall in rail freight traffic while Asia and Europe witnessed a spike, which
                                is
                                a considerable benefit for our company and region
                                we operate. The regional share of rail freight is likely to grow significantly in the long
                                run.
                                Along with this, more investment, infrastructure
                                expansion, and technology implementation to digitize rail freight are expected.</p>
                        </div>
                    </div>
                    <ServicesForm/>
                </div>
            </section>
        </>
    );
};

export default FreightTransportation;