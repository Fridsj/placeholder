import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router basename="/">
      <Switch>
        <Route path="*">
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>Fridsj.no kommer snart.</p>
            </header>
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
