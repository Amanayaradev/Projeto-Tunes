import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { createUser } from '../services/userAPI';
import '../style/style.css';

class Login extends Component {
  state = {
    name: '',
    email: '',
  };

  setName = ({ target }) => {
    this.setState({
      name: target.value,
    });
  };

  emailInput = ({ target }) => {
    this.setState({
      email: target.value,
    });
  };

  onClick = async () => {
    const { name, email } = this.state;
    const { history } = this.props;

    await createUser({ name,
      email,
    });
    history.push('/search');
  };

  render() {
    const { name } = this.state;
    const valorMin = 3;
    const disabled = name.length < valorMin;
    return (
      <div className="pageLogin" data-testid="page-login">
        <h1 className="tunes">Tunes</h1>
        {/* <p className="cadastro">Login</p> */}
        <form className="formLogin">
          <div className="inputs">
            <label htmlFor="name">
              <TextField
                className="inputLogin"
                hiddenLabel
                id="filled-hidden-label-normal"
                placeholder="Name"
                variant="filled"
                onChange={ this.setName }
              />
            </label>
            <label htmlFor="email">
              <TextField
                className="inputLogin"
                hiddenLabel
                id="filled-hidden-label-normal"
                placeholder="Email"
                variant="filled"
                onChange={ this.emailInput }
                sx={ { ':after': { borderBottom: '2px solid #452225',
                } } }
              />
            </label>
            <label htmlFor="senha">
              <TextField
                type="password"
                className="inputLogin"
                hiddenLabel
                id="filled-hidden-label-normal"
                placeholder="Password"
                variant="filled"
                size="larger"
              />
            </label>
            <div className="divBtnLogin">
              <Button
                className="btnLogin"
                disabled={ disabled }
                data-testid="login-submit-button"
                type="button"
                onClick={ this.onClick }
                // variant="outlined"
                variant="outlined"
                size="large"
                color="secondary"
                sx={ {
                  color: 'var(--corDaLetra)',
                  border: '1px solid var(--corDaBorda)',
                  ':hover': { border: '1px solid var(--corDaBorda)' },
                } }
              >
                login
              </Button>
            </div>
          </div>
        </form>
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
