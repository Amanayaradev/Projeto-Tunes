import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { createUser } from '../services/userAPI';
import Carregando from './Carregando';

class Login extends Component {
  state = {
    name: '',
    carregando: false,
  };

  setName = ({ target }) => {
    this.setState({
      name: target.value,
    });
  };

  onClick = async () => {
    const { name } = this.state;
    const { history } = this.props;
    this.setState({
      carregando: true,
    });
    await createUser({ name });
    history.push('/search');
  };

  render() {
    const { name, carregando } = this.state;
    const valorMin = 3;
    const disabled = name.length < valorMin;
    return (
      <div data-testid="page-login">
        {
          carregando ? (<Carregando />)
            : (
              <form>
                <label htmlFor="name">
                  <input
                    id="name"
                    type="text"
                    onChange={ this.setName }
                    data-testid="login-name-input"
                  />
                </label>

                <button
                  disabled={ disabled }
                  data-testid="login-submit-button"
                  type="button"
                  onClick={ this.onClick }
                >
                  entrar
                </button>
              </form>)
        }
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default Login;
