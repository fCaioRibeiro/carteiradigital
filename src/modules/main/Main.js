import React, { Component } from 'react';

import Cards from './Cards.js'
import Header from './Header.js'

class Main extends Component {
  render() {
    return (
      <div>
        <Header />
        <Cards />
      </div>
    )
  }
}

export default Main;