import React from 'react';
import '../styles/style.css';
import '../styles/responsive.css';
import '../styles/zerogrid.css';

import logo2 from '../images/logo2.png';
 
import image2 from '../images/2.jpg';
import image3 from '../images/3.jpg';
import image4 from '../images/4.jpg';
import image5 from '../images/5.jpg';

class About extends React.Component {
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
                  <article>
                      <h2>Overview</h2>
                      <p>Stunning Contemporary in the Murray Hill Estate area with dramatic street presence crafted by Scarsdale's most prestigious builder,  KOSL Building. Set on level, private .50 acre lot with room for a pool. Time to customize. Built with the highest quality materials and  craftsmanship, this five bedroom, five-and-a-half bathroom, 6,820 square feet, including a dramatic finished basement.  10' foot ceilings on the first floor, 9' foot ceilings on the second floor and lower level. Level back yard, room for pool (not included) and 2 car garage.</p>
                      <h2>Facts and features</h2>
                      <p>Appliances: Dryer, Refrigerator, Dishwasher, Washer, Microwave, Wine Cooler
                          Basement: Finished, Full
                          Cooling: Central Air
                          FireplaceYN: 1
                          Inclusions: Dryer, Dishwasher, Refrigerator, Washer, Alarm System, Garage Door Opener, Microwave, Second Dishwasher, Screens, Energy Star Appliance(s), Wine Cooler
                          PropertyType: Residential
                          PatioAndPorchFeatures: Patio
                          Sewer: Sewer
                          WaterSource: PublicSeniorCommunityYN: 0
                          Heating: Natural Gas, Hydro Air
                          ParkingFeatures: Attached
                          ConstructionMaterials: Stucco, Other, Advanced Framing Technique
                          ArchitecturalStyle: Contemporary
                          WindowFeatures: ENERGY STAR Qualified Windows
                          LotFeatures: Level, Near Public Transit
                          RoadResponsibility: Public Maintained Road
                          AtticDescription: Full, Pull Stairs
                          InteriorFeatures: Powder Room, Walk-In Closet(s), Formal Dining Room
                          CommunityFeatures: Park
                          HotWater: Gas Stand Alone
                          Village: Scarsdale</p>
                      
                  </article>
                  <div className="widget">
                    <div className="widget-box wid-related">
                      <div className="wrap-col">
                        <div className="widget-title">
                          <h5>Recommanded</h5>
                        </div>
                        <div className="wid-content">
                          <div className="row">
                            <div className="col-1-3">
                              <div className="col-ful">
                                <div className="wrap-col">
                                  <a href="#"><img src={image3} /></a>
                                  <h4><a href="#">Consetetur sadipscing elitr nonumy</a></h4>
                                </div>
                              </div>
                            </div>
                            <div className="col-1-3">
                              <div className="col-ful">
                                <div className="wrap-col">
                                  <a href="#"><img src={image4}/></a>
                                  <h4><a href="#">Consetetur sadipscing elitr nonumy</a></h4>
                                </div>
                              </div>
                            </div>
                            <div className="col-1-3">
                              <div className="col-ful">
                                <div className="wrap-col">
                                  <a href="#"><img src={image5} /></a>
                                  <h4><a href="#">Consetetur sadipscing elitr nonumy</a></h4>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
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

export default About;
