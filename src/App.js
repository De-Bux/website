import React, { Component } from 'react';
import './css/landing-page.css';
import './css/bootstrap.css';
import './css/bootstrap.min.css';
import Button from 'react-bootstrap/lib/Button';
import Navbar from './Navbar';
import Footer from './Footer';
import Contact from './Contact';
import Developers from './Developers';
import demogif1 from './img/demo_1.gif';
import demogif2 from './img/demo_2.gif';
import Workflow from './img/Workflow.png';
import Logo from './img/Logo.png';


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
                  <img className="mainLogo" src={Logo}/>
                  <h1><de className="De">De</de><de className="Bux">-Bux</de></h1>
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
        
        <a  name="setup"></a>
        <div className="content-section-a">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-sm-6">
                <div className="clearfix"></div>
                <h2 className="section-heading">Install From Chrome Extension Store</h2>
                <div className="lead">
                  <ol>
                    <li>Install <a href="https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en">React DevTools</a></li>
                    <li>Install <a href="https://chrome.google.com/webstore/detail/debux/ooihnkghpifccalpfakdnlolfaiidfjp?authuser=1">De-Bux</a> to your chrome://extensions from the <a href="https://chrome.google.com/webstore/category/extensions">Chrome Web Store</a>.</li>
                    <li>Run your React-Redux application or open a site that uses React Fiber (React 16+).</li>
                    <li>Open Chrome Developer Tools, Click on the “>>” button and select De-Bux</li>
                    <li>Have Fun!</li>
                  </ol>
                </div>
                <hr/>
                <h2 className="section-heading">Build your own</h2>
                <div className="lead">
                  <ol>
                    <li>Clone the repo and install dependendies: npm install</li>
                    <li>Build De-Bux to be used in Chrome Dev Tools: npm run build or npm run watch</li>
                    <li>In Chrome Browser, open more tools and Extensions tab and click 'Load Unpacked'</li>
                    <li>Navigate to your local De-Bux directory and select the folder './debux/build'</li>
                    <li>Have Fun!</li>
                  </ol>
                </div>
              </div>
              <div className="col-lg-4 col-lg-offset-1 col-sm-4 flowImg">
                <img className="img-responsive" src={Workflow} alt=""/>
              </div>
            </div>
          </div>
        </div>
        
        <a  name="services"></a>
        <div className="content-section-b">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 col-lg-offset-1 col-sm-push-6  col-sm-6">
                <div className="clearfix"></div>
                <h2 className="section-heading">Intuitive Design<br/>For New React Devs</h2>
                <p className="lead">
                  De-Bux is a React-Redux DevTool designed for helping developers debug their 
                  React applications more efficiently. <br/><br/>Visualize the component hierarchy of 
                  your React application and your Redux global store side by side, making development a breeze. 
                  <br/><br/>The UI is intuitive yet dynamic, giving developers control over what kind of data they want 
                  to see and how they want to display it.<br/><br/> Additionally De-Bux implements time-travel functionality 
                  by keeping a record of prior states, allowing them to be revisited. <br/><br/>De-Bux works with all standard
                  React-Redux libraries.
                </p>
              </div>
              <div className="col-lg-6 col-sm-pull-6 col-sm-6 gifs">
                <img className="img-responsive" src={demogif1} alt=""/>
              </div>
            </div>
          </div>
        </div>
        
        <a name="team"/>
  	    <Developers />
  	    <Contact />
        <Footer />
        <script async defer src="https://buttons.github.io/buttons.js"></script>
      </div>
    );
  }
}

export default App;
