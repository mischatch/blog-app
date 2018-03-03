import React from 'react';
import { Link } from 'react-router-dom';


class Main extends React.Component {
  constructor(props){
    super(props);

    this.handleLogout = this.handleLogout.bind(this);
    this.LinkOrLogout = this.LinkOrLogout.bind(this);
  }

  handleLogout(e){
    e.preventDefault();
    this.props.logout();
  }

  LinkOrLogout(){

    if(this.props.currentUser){
      return (
        <div>
          <button onClick={this.handleLogout}>Logout</button>
        </div>
      )
    } else {
      return (
        <div>
          <Link to="/login">Login</Link>
        </div>
      )
    }
  }

  render(){
    return (
      <div>
        {this.LinkOrLogout()}
      </div>
    )
  }
}

export default Main;
