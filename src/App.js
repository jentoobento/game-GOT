import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';


import CreateCharacter from './CreateCharacter';
import LandingPage from './LandingPage';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Route exact path={'/create-character'} component={CreateCharacter} />
          <Route exact path={'/'} component={LandingPage} />
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
