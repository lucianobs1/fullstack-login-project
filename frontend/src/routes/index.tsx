import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { SignIn } from '../pages/SignIn';
import { SignUp } from '../pages/SignUp';

// import { Container } from './styles';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={SignUp} />
      <Route path="/sign-in" component={SignIn} />
    </Switch>
  )
}

export { Routes };