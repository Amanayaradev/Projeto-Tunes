import React from 'react';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Album from './componentes/Album';
import Favorites from './componentes/Favorites';
import Login from './componentes/Login';
import NotFound from './componentes/NotFound';
import Profile from './componentes/Profile';
import ProfileEdit from './componentes/ProfileEdit';
import Search from './componentes/Search';
import './style/style.css';

class App extends React.Component {
  render() {
    return (
      <div className="main">
        <Switch>
          <Route exact path="/" component={ Login } />
          <Route exact path="/search" component={ Search } />
          <Route exact path="/album/:id" component={ Album } />
          <Route exact path="/favorites" component={ Favorites } />
          <Route exact path="/profile" component={ Profile } />
          <Route exact path="/profile/edit" component={ ProfileEdit } />
          <Route exact path="*" component={ NotFound } />
        </Switch>
      </div>
    );
  }
}

export default App;
