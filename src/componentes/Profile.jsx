import React, { Component } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { getUser } from '../services/userAPI';
import Header from './Header';

class Profile extends Component {
  state = {
    dataTeste: [],
  };

  componentDidMount() {
    this.usuario();
  }

  usuario = async () => {
    this.setState({
    });
    const user = await getUser();
    this.setState({
      dataTeste: user,
    });
  };

  render() {
    const { dataTeste } = this.state;
    return (
      <div data-testid="page-profile">
        <Header />
        <img
          className="minhaImg"
          data-testid="profile-image"
          src="https://media.licdn.com/dms/image/D4D03AQGP5ew5U6Z6Kg/profile-displayphoto-shrink_800_800/0/1679576421954?e=1687996800&v=beta&t=zeS3pSJ72Z1F7KNxNpK8RGP7fmtZ9pkHkE1B2EM69LU"
          alt={ dataTeste.name }
        />
        <div>
          <p>{ dataTeste.name }</p>
          <p>{ dataTeste.email }</p>
          <Link className="linkAll linkProfile" to="/profile/edit">Editar perfil</Link>
        </div>
        <Link className="linkAll linkExit" to="/">Sair</Link>
      </div>

    );
  }
}

export default Profile;
