import React, {useEffect} from 'react';
import './assets/fonts/Walsheim/stylesheet.css';
import './style.scss';
import Main from "./components/Main";
import {useLocation} from 'react-router-dom';
import i18n from "./i18n";

function App() {

    const location = useLocation();
    useEffect(() => {
        document.documentElement.style.scrollBehavior = "unset";
        window.scrollTo(0, 0);
        document.documentElement.style.scrollBehavior = "smooth";
    }, [location.pathname]);


    return (
        <div className="App">
            <Main/>
        </div>
    );
}

export default App;
