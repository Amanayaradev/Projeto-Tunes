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
        {
          carregando ? <Carregando />
            : (
              <Link
                to="/"
                className="name linkAll"
                data-testid="header-user-name"
              >
                { name }
              </Link>)
        }
        <div>
          <Link
            className="linkAll"
            to="/search"
          >
            <h2 className="tunes">Tunes</h2>
          </Link>
        </div>
        <div>
          <ul className="nav">
            <li>
              <Link
                className="linkNav linkAll material-symbols-outlined"
                data-testid="link-to-search"
                to="/search"
              >
                search
              </Link>
            </li>
            <li>
              <Link
                className="linkNav linkAll material-symbols-outlined"
                data-testid="link-to-favorites"
                to="/favorites"
              >
                favorite
              </Link>
            </li>
            <li>
              <Link
                className="linkNav linkAll material-symbols-outlined"
                data-testid="link-to-profile"
                to="/profile"
              >
                account_circle
              </Link>
            </li>
          </ul>
        </div>
      </header>
    );
  }
}

export default Header;
