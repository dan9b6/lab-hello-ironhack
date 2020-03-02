import React, { Component } from 'react';

import './App.css';
import Nav from './components/Nav';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <main>
          <div className="Main-page">
            <h1>
              Say hello to <br />
              ReactJS
            </h1>
            <p>You will learn a frontend framework from scratch, to become a Ninja Developer.</p>
            <button>Awesome!</button>
          </div>
          <div className="Options">
            <div className="Row">
              <div className="Box"></div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
