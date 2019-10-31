import React from 'react';
import ReactDOM from 'react-dom';


class Services extends React.Component {
  constructor(props) {
    super(props);
  }

  changeEmail = () => {
  
  }

  render() {
    return (
        
        <ul>
            {this.props.items.map(item => (
                <li key={item.name}>{item.name}   - {item.age}  </li>
             ))}
        </ul>
    )
  }
}
 
export default Services;
