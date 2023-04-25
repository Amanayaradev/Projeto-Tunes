import { Favorite, FavoriteBorder } from '@mui/icons-material';
import { Checkbox } from '@mui/material';
import { purple } from '@mui/material/colors';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { addSong, removeSong } from '../services/favoriteSongsAPI';

const accent = purple.A200;
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
    return (
      <div className="music">
        <p>{ trackName }</p>
        <audio
          src={ previewUrl }
          controls
        >
          <track kind="captions" />
        </audio>
        <label className="check" htmlFor="check">
          <Checkbox
            className="heart"
            data-testid={ `checkbox-music-${trackId}` }
            icon={ <FavoriteBorder /> }
            checkedIcon={ <Favorite /> }
            checked={ checked }
            onChange={ () => this.favChange(music) }
            sx={ {
              color: accent,
              '&.Mui-checked': {
                color: accent,
              },
            } }
          />
        </label>
      </div>
    );
  }
}

MusicCard.propTypes = {
  previewUrl: PropTypes.any,
  trackName: PropTypes.any,
}.isRequered;

export default MusicCard;
