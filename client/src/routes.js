import React from 'react';

import { Route } from 'react-router-dom';

import App from './components/App';

import SignupPage from './components/SignupPage';

import Login from './components/login'

export default (
  <div className="container">
    <Route exact path="/" component={ App } />
    <Route path="/signup" component={ SignupPage } />
    <Route path="/login" component={ Login } />
  </div>
)
