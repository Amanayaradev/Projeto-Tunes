import { Favorite, FavoriteBorder } from '@mui/icons-material';
import PropTypes from 'prop-types';
// import { Checkbox } from '@mui/material';
import { Checkbox } from '@mui/material';
import React, { Component } from 'react';
import { addSong, removeSong } from '../services/favoriteSongsAPI';
import MusicPlayer from './MusicPlayer';
// import { PropTypes } from '@mui/material';

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
    const audioinfo = {
      cover: music.artworkUrl100,
      audioUrl: previewUrl,
      artistName: '',
      trackName,
      colorElements: '#ffbdc9',
    };
    return (
      <div>
        <div>
          <div className="pretty p-default">
            <div className="state" />

          </div>
        </div>
        <div
          className="music"
        >
          <div
            className="boxPlayer"
          >
            <MusicPlayer
              info={ audioinfo }
            />
            <label
              className="check"
              htmlFor="check"
            >
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
      </div>
    );
  }
}

MusicCard.propTypes = {
  fav: PropTypes.func,
  favoritos: PropTypes.shape({
    length: PropTypes.number,
    map: PropTypes.func,
  }),
  // music: PropTypes.shape({
  //   artworkUrl100: PropTypes.any,
  // }),
  previewUrl: PropTypes.any,
  trackId: PropTypes.any,
  trackName: PropTypes.any,
}.isRequered;

// MusicCard.propTypes = {
//   previewUrl: PropTypes.any,
//   trackName: PropTypes.any,
// }.isRequered;

export default MusicCard;
