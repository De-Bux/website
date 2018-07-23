import React, { Component } from 'react';
import './css/landing-page.css';
import navLogo from './img/navLogo.png';

class navbar extends Component {
  render() {
    return (
    <nav className="navbar navbar-fixed-top topnav" role="navigation">
      <div className="container topnav">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <img className="navbar-brand topnav navLogo" src={navLogo} /> 
        </div>
        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#about">Home</a>
            </li>
            <li>
              <a href="#setup">Setup</a>
            </li>
            <li>
              <a href="#services">Features</a>
            </li>
            <li>
              <a href="#team">Team</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    )
  }
}
export default navbar;