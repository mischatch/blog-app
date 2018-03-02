import React from 'react';
import { Link, withRouter } from 'react-router-dom';


class SessionForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      username: '',
      password: '',
      email: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
  }

  update(e){
    debugger
    return e => this.setState({
      [`${e.target.name}`]: e.target.value
    }).bind(this);
  }

  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
            Username
            <input  type="text"
                    name="username"
                    value={this.state.username}
                    onChange={this.update}
             />
            Password
            <input  type="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.update}
             />
          <input type="submit" value={this.props} className="submit-button" />
        </form>
      </div>
    )
  }
}

export default withRouter(SessionForm);
