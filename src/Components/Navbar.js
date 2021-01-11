import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class Navbar extends Component {

render(){
  return (
<nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
  <div className="container">
  <a className="navbar-brand" href="/"> - API REST - PRODUCTOS -</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav">
      <li className="nav-item">
       <Link className="nav-link" to="/scriptBD">Ver la Consulta - BD</Link>
      </li>
    </ul>
  </div>
  </div>
</nav>
  );
  }
}
