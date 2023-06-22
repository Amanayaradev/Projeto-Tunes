import React, { Component } from 'react';
import { getFavoriteSongs } from '../services/favoriteSongsAPI';
import Header from './Header';
import MusicCard from './MusicCard';

class Favorites extends Component {
  state = {
    favoritos: [],
  };

  componentDidMount() {
    this.favorite();
  }

  favorite = async () => {
    const fav = await getFavoriteSongs();
    this.setState({
      favoritos: fav,
    });
  };

  render() {
    const { favoritos } = this.state;
    return (
      <div data-testid="page-favorites">
        <Header />
        <p className="pFav">favorites</p>
        {favoritos.map((element, index) => (
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
        )) }
      </div>
    );
  }
}

export default Favorites;
