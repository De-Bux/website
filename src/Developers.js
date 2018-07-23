import React, { Component } from 'react';
import './css/landing-page.css';
import js from './img/jeffschrock.jpg';
import ar from './img/alexRomero.jpg';
import wh from './img/wontaehan.jpg';
import sa from './img/shafalam.jpg';


class Developers extends Component {
  render() {
    let title = {
      textAlign: "center",
      marginBottom: "1.5em"
    }
    return (
      <div className="banner">
        <div className="container">
        <h2 style={title}>Meet the Team</h2>
          <div className="row">
            <div className="col-xs-6 col-md-3 profiles">
              <a href="https://www.linkedin.com/in/jeffrey-schrock-a99094b5/" className="">
                <img className="img-responsive img-circle" src={js} alt="Jeff Schrock"/>
              </a>
              <h3 className="devName">Jeffrey Schrock</h3>
              <h5 className="devName">Software Engineer</h5>
            </div>
            <div className="col-xs-6 col-md-3 profiles">
              <a href="https://www.linkedin.com/in/alejandromromero/" className="">
                <img className="img-responsive img-circle" src={ar} alt="Alejandro Romero"/>
              </a>
              <h3 className="devName full-text">Alejandro Romero</h3>
              <h3 className="devName short-text">Alex Romero</h3>
              <h5 className="devName">Software Engineer</h5>
            </div>
            <div className="col-xs-6 col-md-3 profiles">
              <a href="https://www.linkedin.com/in/wontaeh/" className="">
                <img className="img-responsive img-circle" src={wh} alt="Wontae Han"/>
              </a>
              <h3 className="devName">Wontae Han</h3>
              <h5 className="devName">Software Engineer</h5>
            </div>
            <div className="col-xs-6 col-md-3 profiles">
              <a href="https://linkedin.com/in/Shafayat-Alam" className="">
                <img className="img-responsive img-circle" src={sa} alt="Shafayat Alam"/>
              </a>
              <h3 className="devName">Shafayat Alam</h3>
              <h5 className="devName">Software Engineer</h5>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Developers;