import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { SignUp } from '../pages/SignUp';

// import { Container } from './styles';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" component={SignUp} />
    </Switch>
  )
}

export { Routes };