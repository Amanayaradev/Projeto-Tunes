import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Resultado extends Component {
  render() {
    const { artista, songs } = this.props;
    return (
      songs > 0
        ? (
          <p className="resultArtist">
            Resultado de álbuns de:
            {' '}
            {artista}
          </p>) : (<p className="resultArtist2">Nenhum álbum foi encontrado</p>)
    );
  }
}

Resultado.propTypes = {
  artista: PropTypes.string,
  songs: PropTypes.number,
}.isRequired;

export default Resultado;
