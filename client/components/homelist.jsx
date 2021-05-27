import React from 'react';
import '../styles/style.css';
import '../styles/responsive.css';
import '../styles/zerogrid.css';

import logo2 from '../images/logo2.png';
 

import Homelistentry from './homelistentry.jsx';

import {searchZillow} from '../data/api';
import { data } from 'jquery';
import { Row } from 'react-bootstrap';

class Homelist extends React.Component {
  constructor(props) {
    super(props);
    this.state = { homes: []};
    
    // parse url, get location 



    // get the query
    let location = 'longisland';
    // call api get data 
    searchZillow({location}, (data)=>{
      console.log(data)
      this.setState({homes : data});
    });
    // put data into state 



  }

  render() {
    let matrix = [[]];
    let j = 0; 
    for (let i = 0; i < this.state.homes.length; i++) {
      const home = this.state.homes[i];
      if (j == 3) {
        j = 0;
        matrix.push([]);
      } 
      matrix[matrix.length-1].push(home);
      j++;
    }
    console.log(matrix);

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
              {
                matrix.map((row, idx) => 
                  <div key={idx} className="row wrap-content">{
                    row.map((col, idx) => 
                      <div className="col-1-3">
                        <div className="wrap-col">
                          <Homelistentry key={idx} address={col.address} price={col.price} img={col.img} />
                        </div>
                      </div>
                    )
                  }</div>
                )
              }
              {/* <div className="row wrap-content">


                <div className="col-1-3">
                  <div className="wrap-col">
                  <Homelistentry />
                  </div>
                </div>

                <div className="col-1-3">
                  <div className="wrap-col">
                  <Homelistentry />

                  </div>
                </div>

                <div className="col-1-3">
                  <div className="wrap-col">
                  <Homelistentry />
                  </div>
                </div>

              </div> */}
            </div>
          </div>
        </div>
      </section>
    </div>
    );
  }
}

export default Homelist;
