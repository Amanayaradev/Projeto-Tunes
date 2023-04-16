import React, { Component } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import '../index.css';
import { getUser } from '../services/userAPI';
import Carregando from './Carregando';
import Header from './Header';

class Profile extends Component {
  state = {
    carregando: false,
    dataTeste: [],
  };

  componentDidMount() {
    this.usuario();
  }

  usuario = async () => {
    this.setState({
      carregando: true,
    });
    const user = await getUser();
    this.setState({
      carregando: false,
      dataTeste: user,
    });
  };

  render() {
    const { dataTeste, carregando } = this.state;
    return (
      <div data-testid="page-profile">
        <Header />
        <p>Profile</p>
        {
          carregando ? <Carregando /> : (
            <div>
              <p>{ dataTeste.name }</p>
              <p>{ dataTeste.email }</p>
              <p>{ dataTeste.description }</p>
              <img
                className="minhaImg"
                data-testid="profile-image"
                src={ dataTeste.image }
                alt={ dataTeste.name }
              />
              <Link to="/profile/edit">Editar perfil</Link>
            </div>
          )
        }
      </div>
    );
  }
}

export default Profile;
