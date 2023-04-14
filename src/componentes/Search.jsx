import React, { Component } from 'react';
import Header from './Header';

class Search extends Component {
  state = {
    searchInput: '',
  };

  searchInput = ({ target }) => {
    this.setState({
      searchInput: target.value,
    });
  };

  render() {
    const valueMin = 2;
    const { searchInput } = this.state;
    const disabled = searchInput.length < valueMin;
    return (
      <div data-testid="page-search">
        <Header />
        <form>
          <label htmlFor="search">
            <input
              data-testid="search-artist-input"
              type="text"
              onChange={ this.searchInput }
            />
          </label>
          <button
            data-testid="search-artist-button"
            disabled={ disabled }
            onClick={ this.procuraBtn }
          >
            Pesquisar

          </button>
        </form>
      </div>
    );
  }
}

export default Search;
