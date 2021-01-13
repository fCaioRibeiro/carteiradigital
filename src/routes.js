import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Transfer from './modules/Transfer.js'
import Main from './modules/main/Main.js'
import Header from './modules/main/Header.js'

class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={Main}></Route>
          <Route path="/transfer" component={Transfer}></Route>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default Routes;