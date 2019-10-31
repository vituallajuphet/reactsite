import React from 'react';
import ReactDOM from 'react-dom';


class HeaderInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email:"asdasd@sad.com"
    }
  }
  static getDerivedStateFromProps(props, state) {
   
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({email: "asdasd@asdasdasdsad.com"})
    }, 2000)
  }
  changeEmail = () => {
    this.setState({email: "as@asd.com"});
  }

  render() {
    return (
      <div>Header INfo{ this.props.num}
       <div>
        email: {this.state.email}
       </div>
        <br/>
        <button
          class="btn btn-success"
          type="button"
          onClick={this.changeEmail}
        >
          update email
        </button>
      </div>

    )
  }
}
 
export default HeaderInfo;
