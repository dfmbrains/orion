import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import OrionTheme from "./styles/OrionTheme";
import {SnackbarProvider} from "notistack";
import {RecoilRoot} from "recoil";
import {I18nextProvider} from "react-i18next";
import i18n from "./locales/index";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
       <RecoilRoot>
          <SnackbarProvider autoHideDuration={3000} maxSnack={3} anchorOrigin={{horizontal: "right", vertical: "top"}}>
             <OrionTheme>
                <I18nextProvider i18n={i18n}>
                   <App/>
                </I18nextProvider>
             </OrionTheme>
          </SnackbarProvider>
       </RecoilRoot>
    </BrowserRouter>
);