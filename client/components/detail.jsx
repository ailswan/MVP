import React from 'react';
import '../styles/style.css';
import '../styles/responsive.css';
import '../styles/zerogrid.css';

import logo2 from '../images/logo2.png';
import image2 from '../images/2.jpg';
import image3 from '../images/3.jpg';
import image4 from '../images/4.jpg';
import image5 from '../images/5.jpg';


class Detail extends React.Component {
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
                    <div className="art-header">
                      <div className="entry-title"> 
                        <h2>$889,000</h2>
                      </div>
                      <div className="upload">8351 Commonwealth Blvd, Jamaica, NY 11426</div>
                      <p>4 bd | 2 ba | 1452 sqft |  <span><b>  . For sale .</b></span></p>
                      <p>Time on Zillow 2 day | <a href="#">Saves </a>0</p>
                    </div>
                    <div className="art-content">
                      <img src={image2}/>
                       
                      <h2>Overview</h2>
                      <p>Location, Location, Location!! CLOSE to ALL right off Hillside Ave literally walking distance from Highways and Public Transportation. 1452 Sqft, 4 Bedrooms, 2 full bathrooms. A large 4200 Sqft Lot Size, Full Finished basement with Laundry and Utilities. Gas cooking & 3 zone heating. 1 car detached garage.</p>
                      <h2>Facts and features</h2>
                      <p>Interior details
                        Bedrooms and bathrooms
                        Bedrooms: 4
                        Bathrooms: 2
                        Full bathrooms: 2
                        Basement
                        Basement: Finished, Full
                        Appliances
                        Appliances included: Dryer, Refrigerator, Washer
                        Other interior features
                        Total interior livable area: 1,452 sqft
                        Property details
                        Parking
                        Total spaces: 1
                        Parking features: Garage, Garage - Attached, Covered
                        Garage spaces: 1
                        Lot
                        Lot size: 4,199 sqft
                        Other property information
                        Parcel number: 085880007
                        Construction details
                        Type and style
                        Home type: Single Family
                        Architectural style: Cape
                        Material information
                        Roof: Other
                        Condition
                        New construction: No
                        Year built: 1950
                        Notable dates
                        Major remodel year: 1950
                        Utilities / Green Energy Details
                        Utility
                        Sewer information: Public Sewer
                        Community and Neighborhood Details
                        Location
                        Region: Jamaica
                        HOA and financial details
                        Other financial information
                        Tax assessed value: $720,000
                        Annual tax amount: $7,002
                        Other
                        Source details
                        MLS ID: 3275883
                        Other facts
                        Appliances: Dryer, Refrigerator, Washer
                        ConstructionMaterials: Frame, Brick
                        Basement: Finished, Full
                        Inclusions: Dryer, Refrigerator, Washer
                        InteriorFeatures: Den/Family Room, Living Room / Dining Room
                        ParkingFeatures: Private, Detached
                        PropertyType: Residential
                        WaterSource: Public
                        SeniorCommunityYN: 0
                        Heating: Natural Gas, Baseboard
                        ArchitecturalStyle: Cape
                        Sewer: Public Sewer
                        HotWater: Gas Stand Alone</p>
                      <h2>Neighborhood: 10583</h2>
                      <p>Walk Score®
                        76(Very Walkable)
                        ZIP code stats
                        Home values in 11426 have increased 3.4 % (↑) over the past 12 months.

                        Zillow predicts the home values in 11426 will increase 7.1% (↑) in the next year.

                        This home is valued 39.7% higher (↑) than the typical home in 11426.

                        The typical Zestimate® for this ZIP code is $636,382.

                        Neighborhood stats are generated from MLS and other data sources.

                        </p>
                    <h2>GreatSchools rating</h2>
                      <div className="note">
                        <ol>
                        <li>Ps 133 | 
                            Grades: K-5 | 
                            Distance: 0.3 mi</li>
                        <li>Irwin Altman Middle School 172 | 
                            Grades: 6-8 | 
                            Distance: 0.7 mi</li>
                        <li>Martin Van Buren High School | 
                            Grades: 9-12 | 
                            Distance: 1.1 mi</li>
                        </ol>
                        <div className="clear"></div>
                      </div>
                    </div>
                  </article>
                  <div className="widget">
                    <div className="widget-box wid-related">
                      <div className="wrap-col">
                        <div className="widget-title">
                          <h5>Related Home</h5>
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

export default Detail;
