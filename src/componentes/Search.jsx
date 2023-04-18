import React, { Component } from 'react';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import '../style/style.css';
import AlbumInicial from './AlbumInicial';
import Carregando from './Carregando';
import Header from './Header';
import Resultado from './Resultado';

class Search extends Component {
  state = {
    valueInput: '',
    carregando: true,
    artista: '',
    songs: [],
  };

  searchInput = ({ target }) => {
    this.setState({
      valueInput: target.value,
    });
  };

  procuraBtn = async () => {
    const { valueInput } = this.state;
    this.setState({
      carregando: false,
    });
    const procura = await searchAlbumsAPI(valueInput);
    this.setState({
      valueInput: '',
      carregando: true,
      artista: valueInput,
      songs: procura,
    });
  };

  render() {
    const valueMin = 2;
    const { valueInput, carregando, artista, songs } = this.state;
    const disabled = valueInput.length < valueMin;
    return (
      carregando
        ? (
          <div className="page-search" data-testid="page-search">
            <Header />
            <form>
              <label htmlFor="search">
                <input
                  className="inputSearch"
                  value={ valueInput }
                  data-testid="search-artist-input"
                  type="text"
                  onChange={ this.searchInput }
                />
              </label>
              <button
                className="btn btnSearch"
                data-testid="search-artist-button"
                disabled={ disabled }
                onClick={ this.procuraBtn }
              >
                <span className=" look material-symbols-outlined">
                  search
                </span>
              </button>
            </form>
            <Resultado artista={ artista } songs={ songs.length } />
            <div className="boxAlbum">
              {
                songs.map(({ artistName, collectionName,
                  artworkUrl100, collectionId,
                }, index) => (
                  <div key={ index }>
                    <AlbumInicial
                      imgAlbumPrincipal={ artworkUrl100 }
                      nameArtistaPrincipal={ artistName }
                      nameAlbumPrincipal={ collectionName }
                      collectionId={ collectionId }
                    />
                  </div>
                ))
              }
            </div>
          </div>)
        : <Carregando />
    );
  }
}

export default Search;
