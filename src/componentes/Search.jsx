import React, { Component } from 'react';
import Header from './Header';

class Search extends Component {
  render() {
    return (
      <div data-testid="page-search">
        <Header />
        <p>Search</p>
      </div>
    );
  }
}

export default Search;
