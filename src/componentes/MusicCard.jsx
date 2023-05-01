import { Favorite, FavoriteBorder } from '@mui/icons-material';
import { Checkbox } from '@mui/material';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { addSong, removeSong } from '../services/favoriteSongsAPI';
import MusicPlayer from './MusicPlayer';

class MusicCard extends Component {
  state = {
    checked: false,
  };

  async componentDidMount() {
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
      await removeSong(e);
      fav();
    } else {
      this.setState({
        checked: true,
      });
      await addSong(e);
      fav();
    }
  };

  render() {
    const { checked } = this.state;
    const { previewUrl, trackName, trackId, music } = this.props;
    console.log(music);
    const audioinfo = {
      cover: music.artworkUrl100,
      audioUrl: previewUrl,
      artistName: '',
      trackName,
      colorElements: '#ffbdc9',
    };
    return (
      <div className="music">
        <div className="boxPlayer">
          <MusicPlayer info={ audioinfo } />
          <label className="check" htmlFor="check">
            <Checkbox
              className="heart"
              data-testid={ `checkbox-music-${trackId}` }
              icon={
                <FavoriteBorder
                  sx={ {
                    color: 'var(--corDaLetra)',
                    fontSize: '2.5rem' } }
                />
              }
              checkedIcon={
                <Favorite
                  sx={ { color: 'var(--corDaLetra)', fontSize: '2.5rem' } }
                />
              }
              checked={ checked }
              onChange={ () => this.favChange(music) }
            />
          </label>
        </div>
      </div>
    );
  }
}

MusicCard.propTypes = {
  previewUrl: PropTypes.any,
  trackName: PropTypes.any,
}.isRequered;

export default MusicCard;
