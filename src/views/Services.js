import React from 'react';
import ReactDOM from 'react-dom';

class Services extends React.Component {
    constructor(props){
        super(props)
    }
  
  render() {
     return (
        <div className="container">
            <h1>Services</h1>

            <p>lorem {this.props}</p>
        </div>
     )
  }
}

export default Services;
