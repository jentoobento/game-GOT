import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Board from './Board';
import CreateCharacter from './CreateCharacter';
import LandingPage from './LandingPage';
import './App.css';


import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faKey, faBullhorn, faBookmark, faChild, faFlag, faMale, faStar,  faUsers, faUserPlus, faUniversity, faCoins } from '@fortawesome/free-solid-svg-icons';

library.add( faEnvelope, faKey, faBullhorn, faBookmark, faChild, faFlag, faMale, faStar, faUsers, faUserPlus, faUniversity, faCoins);

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Route exact path={'/board'} component={Board} />
          <Route exact path={'/create-character'} component={CreateCharacter} />
          <Route exact path={'/'} component={LandingPage} />
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
