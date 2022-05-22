import React from 'react';
import Port from "../../assets/img/home/port.png";

const BlogsCard = () => {
    return (
        <div className="blogs__left_card">
            <img src={Port} alt="Port"/>
            <div className="blogs__left_card-bot">
                <div className="blogs__left_card-date">
                    <p className="blogs__left_card-day">01</p>
                    <p> Dec</p>
                </div>
                <div className="blogs__left_card-right">
                    <div>
                        <p className="blogs__left_card-name">Transportation</p>
                        <h3 className="blogs__left_card-title">Everything About Freight
                            Transportation </h3>
                        <p className="blogs__left_card-subtitle">International Rail Freight: Everything
                            you need to know about Rail Freight </p>
                    </div>
                    <button className="blogs__left_card-btn">Read More</button>
                </div>
            </div>
        </div>
    );
};

export default BlogsCard;