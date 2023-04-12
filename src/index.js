import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import OrionTheme from "./styles/OrionTheme";
import {SnackbarProvider} from "notistack";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
       <SnackbarProvider autoHideDuration={3000} maxSnack={3} anchorOrigin={{horizontal: "right", vertical: "top"}}>
          <OrionTheme>
             <App/>
          </OrionTheme>
       </SnackbarProvider>
    </BrowserRouter>
);