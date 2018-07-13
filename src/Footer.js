import React, { Component } from 'react';

class footer extends Component {
  render() {
    return ( 
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <ul className="list-inline">
                <li>
                  <a href="#about">Home</a>
                </li>
                <li className="footer-menu-divider">&sdot;</li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li className="footer-menu-divider">&sdot;</li>
                <li>
                  <a href="#services">Services</a>
                </li>
                <li className="footer-menu-divider">&sdot;</li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
              <p className="copyright text-muted small">MIT | Team JAWS. </p>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}
export default footer;