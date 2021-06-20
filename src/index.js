import React from 'react';
import ReactDOM from 'react-dom';
import 'react-app-polyfill/ie9'
import 'react-app-polyfill/ie11'
import App from './component/App.js';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/@fortawesome/fontawesome-free/css/all.css';

import '../node_modules/react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from 'react-router-dom';



import "./Styles/Footer.css";
import "./Styles/Category.css";


ReactDOM.render(
  
    <BrowserRouter>
     <App />
    </BrowserRouter>
   
    


   
  
  ,
  document.getElementById('root')
);
serviceWorker.unregister();