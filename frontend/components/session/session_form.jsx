import React from 'react';
import { Link, withRouter } from 'react-router-dom';


class SessionForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      "username": '',
      "password": '',
      // "email": '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.demoSubmit = this.demoSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    let user = this.state;
    this.props.login({user});
  }

  demoSubmit(){
    let user = { user: {password: 'password', username: 'test', email: 'email@mail.com'}};
    this.props.login(user);
  }

  update(e){
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value
    });
  }

  renderErrors(){
    return (
      <ul>
      { this.props.errors.map((err, i) => (
        <li key={i}>
          {err}
        </li>
      ))}
    </ul>
    )
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
           <input type="submit" value="Login" className="submit-button" />
        </form>
        <button type="submit" value="demo" onClick={this.demoSubmit}>demo</button>
          {this.renderErrors}
      </div>
    )
  }
}

export default withRouter(SessionForm);
