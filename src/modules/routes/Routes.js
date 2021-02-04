import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Transfer from '../Transfer.js'
import Main from '../main/Main.js'
import Login from '../Login.js'
import NotFound from '../NotFound.js'
import RoutesPrivate from './RoutesPrivate.js'

class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={Login}></Route>
          <RoutesPrivate path="/" exact component={Main}></RoutesPrivate>
          <RoutesPrivate path="/transfer" component={Transfer}></RoutesPrivate>
          <RoutesPrivate component={NotFound}></RoutesPrivate>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default Routes;