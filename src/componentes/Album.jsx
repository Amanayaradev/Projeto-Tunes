import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { getFavoriteSongs } from '../services/favoriteSongsAPI';
import getMusics from '../services/musicsAPI';
import Header from './Header';
import MusicCard from './MusicCard';

class Album extends Component {
  state = {
    album: [],
    info: '',
    favoritos: [],
  };

  async componentDidMount() {
    await this.getMusic();
    await this.favorite();
  }

  getMusic = async () => {
    const { match: { params: { id } } } = this.props;
    const msc = await getMusics(id);
    this.setState({
      album: msc.slice(1),
      info: msc[0],
    });
  };

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
    const { album, info, favoritos } = this.state;
    return (
      <div data-testid="page-album">
        <Header />
        <p data-testid="artist-name">
          { info.artistName}
        </p>
        <p data-testid="album-name">
          { info.collectionName }
        </p>
        <div>
          {
            album.map((element, index) => (
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
          }
        </div>
      </div>
    );
  }
}
Album.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number,
    }),
  }),
}.isRequired;

export default Album;
