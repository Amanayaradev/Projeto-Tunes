import { Component } from 'react';
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
            : <p data-testid="header-user-name">{ name }</p>
        }
      </header>
    );
  }
}

export default Header;
