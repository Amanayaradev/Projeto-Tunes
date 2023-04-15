import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Resultado extends Component {
  render() {
    const { artista, songs } = this.props;
    return (
      songs > 0
        ? (
          <p>
            Resultado de álbuns de:
            {' '}
            {artista}
          </p>) : (<p>Nenhum álbum foi encontrado</p>)
    );
  }
}

Resultado.propTypes = {
  artista: PropTypes.string,
  songs: PropTypes.number,
}.isRequired;

export default Resultado;
