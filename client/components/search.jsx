import React from 'react';
import '../styles/style.css';
import '../styles/responsive.css';
import '../styles/zerogrid.css';

import facebook from '../images/facebook.png';
import twitter from '../images/twitter.png';
import logo from '../images/logo.png';
import image2 from '../images/2.jpg';
import image3 from '../images/3.jpg';
import image4 from '../images/4.jpg';
import image5 from '../images/5.jpg';



class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    };
  }

  handleInputChange(e) {
    this.props.handleSearchInputChange(e.target.value);
    this.setState({
      value: e.target.value
    });
  }

  render() {
    return (
      <div>
      <header>
        <div className="top-bar">
          <div className="wrap-top zerogrid">
            <div className="row ">
              <div className="col-1-2">
                <div className="wrap-col">
                  <div className="top-social">
                    <a href="#"><img src={facebook} title="facebook" /></a>
                    <a href="#"><img src={twitter} title="twitter"/></a>
                  </div>
                </div>
              </div>
              <div className="col-1-2">
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
        <div className="nav-bar">
          <div className="wrap-nav zerogrid">
            <div className="row">
              <div className="col-1-3">
                <div className="wrap-col">
                  <div className="logo"><img src={logo}/></div>	
                </div>
              </div>
              <div className="col-2-3">
                <div className="wrap-col f-right">
                  <div id="menu">
                    <nav>
                       <ul>
                       <li><a href="homelist">Buy</a></li>
                       <li><a href="homelist">Rent</a></li>
                       <li><a href="about">About Us</a></li>
                       <li><a href="contact">Contact</a></li>
                       </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="wrap-header">
          <h1>Reimagine Home</h1>
          <span>We'll help you find a place you'll love.</span>
          <center><div className="search-form">
            <form method="get" action="/homelist" id="search" className="f-right">
              <input name="query" type="text" size="40" placeholder="Where are you searching ?" />
              <input type="submit" name="Submit"/>
            </form>
          </div></center>
          <div id="top-destination">
            <nav>
              <ul>
                <li className="first"><p>Top Search:</p></li>
                <li><a href="#">Paris</a></li>
                <li><a href="#">New York</a></li>
                <li><a href="#">London</a></li>
                <li><a href="#">Rome</a></li>
                <li><a href="#">San Francisco</a></li>
                <li className="last"><a href="#">More...</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      
      <footer>
        <div className="zerogrid">
          <div className="wrap-footer">
            <div className="row">
              <div className="col-1-3">
                <div className="wrap-col">
                  <p>Rillow Group is committed to ensuring digital accessibility for individuals with disabilities. We are continuously working to improve the accessibility of our web experience for everyone, and we welcome feedback and accommodation requests. If you wish to report an issue or seek an accommodation, please contact us.</p>
                  <p>Rillow, Inc. has a real estate brokerage license in multiple states. A list of our real estate licenses is available </p>
                </div>
              </div>
              <div className="col-1-3">
                <div className="wrap-col">
                  <div className="widget-title">
                    <h5>News Letter</h5>
                  </div>
                  <p>facere possimus nihil impedit quo minus id quod maxime placeat facere possimus. est eligendi</p>
                  <div className="subcribe-form" >
                    <form method="get" action="/search" id="subcribe">
                      <input name="q" type="text" size="40" placeholder="Enter your email address...  " />
                    </form>
                  </div>
                  <a className="button button03" href="#">Subcribe Now</a>
                </div>
              </div>
              <div className="col-1-3">
                <div className="wrap-col">
                  <div className="widget-title">
                    <h5>Photo Widget</h5>
                  </div>
                  <div className="row">
                    <div className="col-1-4">
                      <div className="wrap-col">
                        <a href="#"><img src={image2} /></a>
                      </div>
                    </div>
                    <div className="col-1-4">
                      <div className="wrap-col">
                        <a href="#"><img src={image3} /></a>
                      </div>
                    </div>
                    <div className="col-1-4">
                      <div className="wrap-col">
                        <a href="#"><img src={image4} /></a>
                      </div>
                    </div>
                    <div className="col-1-4">
                      <div className="wrap-col">
                        <a href="#"><img src={image5} /></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-footer">
          <div className="wrap-bottom">
          </div>
        </div>
      </footer>
      
    
      );
  }
}



export default Search;
