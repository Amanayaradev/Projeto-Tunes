import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { createUser } from '../services/userAPI';
import Carregando from './Carregando';

class Login extends Component {
  state = {
    name: '',
    carregando: false,
    description: '',
    email: '',
    image: '',

  };

  setName = ({ target }) => {
    this.setState({
      name: target.value,
    });
  };

  descriptionInput = ({ target }) => {
    this.setState({
      description: target.value,
    });
  };

  emailInput = ({ target }) => {
    this.setState({
      email: target.value,
    });
  };

  imgInput = ({ target }) => {
    this.setState({
      image: target.value,
    });
  };

  onClick = async () => {
    const { name, description,
      email, image } = this.state;
    const { history } = this.props;
    this.setState({
      carregando: true,
    });
    await createUser({ name,
      description,
      email,
      image });
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
                <label htmlFor="description">
                  description
                  <input
                    id="description"
                    type="text"
                    onChange={ this.descriptionInput }
                  />
                </label>
                <label htmlFor="email">
                  email
                  <input
                    id="email"
                    type="text"
                    onChange={ this.emailInput }
                  />
                </label>
                <label htmlFor="image">
                  img
                  <input
                    id="image"
                    type="text"
                    onChange={ this.imgInput }
                  />
                </label>
                <label htmlFor="name">
                  name
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
              </form>
            )
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
