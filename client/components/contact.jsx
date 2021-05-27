import React from 'react';
import '../styles/style.css';
import '../styles/responsive.css';
import '../styles/zerogrid.css';

import logo2 from '../images/logo2.png';
 

class Contact extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
      <div className="wrap-body">
        <div className="nav-bar">
          <div className="wrap-nav zerogrid">
            <div className="row">
              <div className="col-1-3">
                <div className="wrap-col">
                <div className="logo"><a href="/"><img src={logo2}/></a></div>	
                </div>
              </div>
              <div className="col-2-3">
                <div className="wrap-col f-right">		 
                <ul>
                    <li className="mail"><p>ContacUs@gmail.com</p></li>
                    <li className="phone"><p>917 8888888</p></li>
                  </ul>
               
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section id="container">
        <div className="wrap-container">
          <div id="main-content">
            <div className="zerogrid">
              <div className="row wrap-content">
                <div className="col-3-4">
                  <div className="wrap-col">
                    <div className="contact">
                      <h2>Contact</h2>
                      <div id="contact_form">
                        <form name="form1" id="ff" method="post" action="contact.php">
                          <label>
                          <span>Enter your name:</span>
                          <input type="text"  name="name" id="name" required />
                          </label>
                          <label>
                          <span>Enter your email:</span>
                          <input type="email"  name="email" id="email" required />
                          </label>
                          <label>
                          <span>Your message here:</span>
                          <textarea name="message" id="message"></textarea>
                          </label>
                          <center><input className="sendButton" type="submit" name="Submit" value="Submit" /></center>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
  </div>
    );
  }
}

export default Contact;
