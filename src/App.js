import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Board from './Board';
import CreateCharacter from './CreateCharacter';
import LandingPage from './LandingPage';
import './App.css';


import Test from './Test'



import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faKey, faBullhorn, faBookmark, faChild, faFlag, faMale, faStar,  faUsers, faUserPlus, faUniversity, faCoins, faUser, faTrophy } from '@fortawesome/free-solid-svg-icons';

library.add( faEnvelope, faKey, faBullhorn, faBookmark, faChild, faFlag, faMale, faStar, faUsers, faUserPlus, faUniversity, faCoins, faUser, faTrophy);

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Route exact path={'/board'} component={Board} />
          <Route exact path={'/create-character'} component={CreateCharacter} />
          <Route exact path={'/'} component={LandingPage} />
          <Route exact path={'/test'} component={Test} />

        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
