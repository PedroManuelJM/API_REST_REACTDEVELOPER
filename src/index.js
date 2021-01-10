import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Producto from './Components/Producto';
import Navbar from './Components/Navbar';
import Consulta from './Components/Consulta';
import Footer from './Components/Footer';

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
