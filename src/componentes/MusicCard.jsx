import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { addSong } from '../services/favoriteSongsAPI';
import Carregando from './Carregando';

class MusicCard extends Component {
  state = {
    carregando: false,
    checked: false,
  };

  componentDidMount() {
    const { trackName } = this.props;
    this.check(trackName);
  }

  check = (trackName) => {
    const { favoritos } = this.props;
    if (favoritos.length > 0) {
      favoritos.map((favCheck) => {
        if (favCheck.trackName === trackName) {
          this.setState({
            checked: true,
          });
        }
        return null;
      });
    }
  };

  favChange = async (e) => {
    const { fav } = this.props;
    const { checked } = this.state;
    if (checked) {
      this.setState({
        checked: false,
      });
    } else {
      this.setState({
        checked: true,
        carregando: true,
      });
      await addSong(e);
      this.setState({
        carregando: false,
      });
      fav();
    }
  };

  render() {
    const { carregando, checked } = this.state;
    const { previewUrl, trackName, trackId, music } = this.props;
    return (
      <div>
        <p>{ trackName }</p>
        <audio
          data-testid="audio-component"
          src={ previewUrl }
          controls
        >
          <track kind="captions" />
        </audio>
        {
          carregando ? <Carregando />
            : (
              <label htmlFor="check">
                Favorita
                <input
                  data-testid={ `checkbox-music-${trackId}` }
                  type="checkbox"
                  name="check"
                  id="check"
                  checked={ checked }
                  onChange={ () => this.favChange(music) }
                />
              </label>)
        }
      </div>
    );
  }
}

MusicCard.propTypes = {
  previewUrl: PropTypes.any,
  trackName: PropTypes.any,
}.isRequered;

export default MusicCard;
