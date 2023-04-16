import React, { Component } from 'react';
import { getFavoriteSongs } from '../services/favoriteSongsAPI';
import Carregando from './Carregando';
import Header from './Header';
import MusicCard from './MusicCard';

class Favorites extends Component {
  state = {
    favoritos: [],
    // carregando: false,
  };

  componentDidMount() {
    this.favorite();
  }

  favorite = async () => {
    // this.setState({
    //   carregando: true,
    // });
    const fav = await getFavoriteSongs();
    this.setState({
      // carregando: false,
      favoritos: fav,
    });
  };

  render() {
    const { favoritos } = this.state;
    return (
      <div data-testid="page-favorites">
        <Header />
        <p>favorites</p>
        {favoritos
          ? favoritos.map((element, index) => (
            <div key={ index }>
              <MusicCard
                fav={ this.favorite }
                favoritos={ favoritos }
                music={ element }
                trackName={ element.trackName }
                previewUrl={ element.previewUrl }
                trackId={ element.trackId }
              />
            </div>
          ))
          : <Carregando />}
      </div>
    );
  }
}

export default Favorites;
