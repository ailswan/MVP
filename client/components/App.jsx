 
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Search from './Search.jsx';
import Detail from './detail.jsx';
import Homelist from './homelist.jsx';
import Contact from './contact.jsx';
import About from './aboutus.jsx';

import '../styles/style.css';
import '../styles/responsive.css';
import '../styles/zerogrid.css';
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      test:[]
    };
  }

  getYouTubeVideos(query) {
    var options = {
      key: this.props.API_KEY,
      query: query
    };
  }

  render() {
    return (
    <Router>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/detail">
            <Detail />
          </Route>
          <Route path="/homelist">
            <Homelist />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Search />
          </Route>
        </Switch>
    </Router>

    );
  }
}
export default App;
