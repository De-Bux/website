import React, { Component } from 'react';
import './css/landing-page.css';
import './css/bootstrap.css';
import './css/bootstrap.min.css';
import Button from 'react-bootstrap/lib/Button';
import Navbar from './Navbar';
import Footer from './Footer';
import Contact from './Contact';
import Developers from './Developers';
import demogif from './img/demo_1.gif';
import DebuxLogo from './img/debuxLogo.png';



class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <a name="about"></a>
        <div className="intro-header">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="intro-message">
                  <h1>De-Bux</h1>
                  <h3>A React-Redux Visualizer</h3>
                  <hr className="intro-divider"/>
                  <h4>Check it out</h4>
                  <Button className="btn btn-primary" href="https://github.com/De-Bux/De-Bux">Github</Button>
                  <Button className="btn btn-primary" href="https://chrome.google.com/webstore/detail/debux/ooihnkghpifccalpfakdnlolfaiidfjp">Chrome</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <section className="features-icons bg-light text-center">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                  <div className="features-icons-icon d-flex">
                    <i className="icon-screen-desktop m-auto text-primary"></i>
                  </div>
                  <h3>A Devs Delight</h3>
                  <p className="lead mb-0">A Chrome Dev Tool for React-Redux Developers</p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                  <div className="features-icons-icon d-flex">
                    <i className="icon-layers m-auto text-primary"></i>
                  </div>
                  <h3>Parent-Child Node Trees</h3>
                  <p className="lead mb-0">Be able to see your components, props, and state in real time!</p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="features-icons-item mx-auto mb-0 mb-lg-3">
                  <div className="features-icons-icon d-flex">
                    <i className="icon-check m-auto text-primary"></i>
                  </div>
                  <h3>Time Travel</h3>
                  <p className="lead mb-0">View prior versions of your state in the Store in Redux.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <a  name="services"></a>
        <div className="content-section-a">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 col-sm-6">
                <div className="clearfix"></div>
                <h2 className="section-heading">--Set up--</h2>
                <div className="lead">
                  <ol>
                    <li>Install React DevTools</li>
                    <li>Install Debux</li>
                    <li>Run your React-Redux application or open a sight that uses React Fiber.</li>
                    <li>Open Chrome Developer Tools, Click on the “>>” button and select Debux</li>
                    <li>Have Fun!</li>
                  </ol>
                </div>
              </div>
              <div className="col-lg-5 col-lg-offset-2 col-sm-6">
                <img className="img-responsive" src={DebuxLogo} alt=""/>
              </div>
            </div>
          </div>
        </div>
      
        <div className="content-section-b">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 col-lg-offset-1 col-sm-push-6  col-sm-6">
                <div className="clearfix"></div>
                <h2 className="section-heading">Intuitive Design<br/>For New React Devs</h2>
                <p className="lead">
                  Debux is a React-Redux DevTool designed for helping developers debug their 
                  React applications more efficiently. Debux allows you to visualize the component hierarchy of 
                  your React application and your Redux global store side by side, making development a breeze. 
                </p>
              </div>
              <div className="col-lg-5 col-sm-pull-6 col-sm-6">
                <img className="img-responsive" src={demogif} alt=""/>
              </div>
            </div>
          </div>
        </div>
        
  	    <Developers />
  	    <Contact />
        <Footer />
        <script async defer src="https://buttons.github.io/buttons.js"></script>
      </div>
    );
  }
}

export default App;
