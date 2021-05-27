import React from 'react';
import '../styles/style.css';
import '../styles/responsive.css';
import '../styles/zerogrid.css';

import image2 from '../images/2.jpg';
class Homelistentry extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <article key={this.props.key}>
      <div className="wrap-art">
        <a href="/detail"><img src={this.props.img}/></a>
        <div className="art-header">
          <h2>{this.props.price}</h2>
        </div>
        <div className="art-content">
          <p>{this.props.address}</p>
          <p>5 bd | 6 ba | 6820 sqft |  <span><b>  . For sale .</b></span></p>
          <p>Time on Zillow 1 day | <a href="#">Saves </a>49</p>
        </div>
      </div>
    </article>
    );
  }
}

export default Homelistentry;
