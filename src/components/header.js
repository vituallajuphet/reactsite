import React from 'react';
import ReactDOM from 'react-dom';
import Headernfo from './subcomponents/Headerinfo';
import AppServices from './subcomponents/Services';



class Header extends React.Component {
    constructor() {
      super();
      this.state = {
        color: "red",
        items:[
          {name:"asd", age:12},
          {name:"asggggasd", age:13},
          {name:"gasdasdasd",age:1123}
        ]
      };
    }
  render() {
    return (
        <header>THis is header { this.state.color}
             <Headernfo num="12345" />
            <AppServices items={this.state.items} />
        </header>
       
    );
}
}

export default Header;
