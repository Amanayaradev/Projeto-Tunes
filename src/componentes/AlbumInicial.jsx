import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import '../style/style.css';

class AlbumInicial extends Component {
  render() {
    const { imgAlbumPrincipal, nameArtistaPrincipal, nameAlbumPrincipal, collectionId,
    } = this.props;
    return (
      <div className="boxAlbum">
        <div className="album">
          <img src={ imgAlbumPrincipal } alt={ nameAlbumPrincipal } />
          <div className="albumInicial">
            <p>{ nameAlbumPrincipal }</p>
            <p>{ nameArtistaPrincipal }</p>
          </div>
          <Link
            className="linkAll linkMusic"
            data-testid={ `link-to-album-${collectionId}` }
            to={ `/album/${collectionId}` }
          >
            Músicas
          </Link>
        </div>
      </div>
    );
  }
}

AlbumInicial.propTypes = {
  imgAlbumPrincipal: PropTypes.any,
  nameAlbumPrincipal: PropTypes.any,
  nameArtistaPrincipal: PropTypes.any,
}.isRequered;

export default AlbumInicial;
