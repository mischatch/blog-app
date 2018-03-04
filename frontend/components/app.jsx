import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import SessionFormContainer from './session/session_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import GreetingContainer from './greeting/greeting_container';


const App = () => (
  <div>
    <header>
        <h1>Blog App</h1>
    </header>
    <Switch>
      <AuthRoute path="/login" component={SessionFormContainer} />
      <Route exact path="/" component={GreetingContainer} />

    </Switch>
  </div>
);

export default App;
