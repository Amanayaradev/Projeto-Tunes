import React, { Component } from 'react';
import Header from './Header';

class Favorites extends Component {
  render() {
    return (
      <div data-testid="page-favorites">
        <Header />
        <p>favorites</p>
      </div>
    );
  }
}

export default Favorites;
