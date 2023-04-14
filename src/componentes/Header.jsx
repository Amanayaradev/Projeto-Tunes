import { Component } from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../services/userAPI';
import Carregando from './Carregando';

class Header extends Component {
  state = {
    name: '',
    carregando: true,
  };

  async componentDidMount() {
    const getName = await getUser();
    this.setState({
      name: getName.name,
      carregando: false,
    });
  }

  render() {
    const { name, carregando } = this.state;
    return (
      <header data-testid="header-component">
        <ul>
          <li>
            <Link data-testid="link-to-search" to="/search">search</Link>
          </li>
          <li>
            <Link data-testid="link-to-favorites" to="/favorites">favorites</Link>
          </li>
          <li>
            <Link data-testid="link-to-profile" to="/profile">profile</Link>
          </li>
        </ul>
        {
          carregando ? <Carregando />
            : <p data-testid="header-user-name">{ name }</p>
        }
      </header>
    );
  }
}

export default Header;
// {' '}
// <link data-testid="link-to-favorites" rel="stylesheet" href="/favorites">teste</link>
// {' '}
// <link data-testid="link-to-favorites" rel="stylesheet" href="/favorites">teste</link>
// {' '}
// <link data-testid="link-to-profile" rel="stylesheet" href="./profile">teste</link>
