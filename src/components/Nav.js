import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, NavLink  } from "react-router-dom";

class mynav extends React.Component {
  render() {
     return (
        <div className="container">
          <nav >
          <ul >
                <li>
                    <NavLink  exact to="/">Home</NavLink>
                </li>
                <li >
                    <NavLink  to="/about" >About us</NavLink>
                </li>
                <li >
                  <NavLink to="/services" >Services</NavLink>
                </li>
                </ul>

                
        </nav>
        </div>
     )
  }
}

export default mynav;
