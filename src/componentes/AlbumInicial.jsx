import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import '../index.css';

class AlbumInicial extends Component {
  render() {
    const { imgAlbumPrincipal, nameArtistaPrincipal, nameAlbumPrincipal, collectionId,
    } = this.props;
    return (
      <div className="album">
        <div>
          <img src={ imgAlbumPrincipal } alt={ nameAlbumPrincipal } />
          <p>{ nameAlbumPrincipal }</p>
          <p>{ nameArtistaPrincipal }</p>
          <Link
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
