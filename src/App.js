import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import App from './App.css';
import Appnav from './components/Nav';
import AboutUs from './views/AboutUs';
import Services from './views/Services';
import Home from './views/Home';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class MyApp extends React.Component {
  render() {
     return (
        <div className="container">
            <Router>
             <Appnav />
            <div>
              <Route exact path="/about" component={AboutUs} />
              <Route exact path="/" component={Home} />
              <Route exact path="/services" render={(props) => <Services {...props} id={`Props through render`} />}/>
            </div>
          </Router>   
        </div>
     )
  }
}

export default MyApp;
