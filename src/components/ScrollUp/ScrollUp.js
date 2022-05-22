import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronUp} from '@fortawesome/free-solid-svg-icons';
import './scroll.scss'

const ScrollUp = () => {
    return (
        <>
            <a href="#header" className="scroll">
                <FontAwesomeIcon className="scroll__icon" icon={faChevronUp}/>
            </a>
        </>
    );
};

export default ScrollUp;