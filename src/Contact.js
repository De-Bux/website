import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
      
      <div className="container contactUs">
      <a name="contact" />
      	<div className="row">
            <div className="col-md-6 col-md-offset-3 contactUsOuter">
              <div className="well well-sm contactUsInner">
                <form action="mailto:debuxdevtool@gmail.com" className="form-horizontal" method="POST" encType="text/plain">
                <fieldset>
                  <legend className="text-center">Contact us</legend>
          
                  
                  <div className="form-group">
                    <label className="col-md-3 control-label" name="name">Name</label>
                    <div className="col-md-9">
                      <input id="name" name="name" type="text" placeholder="Your name" className="form-control"/>
                    </div>
                  </div>
          
                  
                  <div className="form-group">
                    <label className="col-md-3 control-label" name="email">Your E-mail</label>
                    <div className="col-md-9">
                      <input id="email" name="email" type="text" placeholder="Your email" className="form-control"/>
                    </div>
                  </div>
          
                  
                  <div className="form-group">
                    <label className="col-md-3 control-label" name="message">Your message</label>
                    <div className="col-md-9">
                      <textarea className="form-control" id="message" name="message" placeholder="Please enter your message here..." rows="5"></textarea>
                    </div>
                  </div>
          
                  
                  <div className="form-group">
                    <div className="col-md-12 text-right">
                      <button type="submit" className="btn btn-primary btn-lg">Submit</button>
                    </div>
                  </div>
                </fieldset>
                </form>
              </div>
            </div>
      	</div>
      </div>
    )
  }
}

export default Contact;