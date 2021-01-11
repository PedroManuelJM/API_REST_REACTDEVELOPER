import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import reportWebVitals from './reportWebVitals';
import Producto from './Components/Producto';

ReactDOM.render(
  <React.StrictMode>
    <Producto/>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
