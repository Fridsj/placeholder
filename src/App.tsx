import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router basename="/">
      <Switch>
        <Route path="*">
          <div className="placeholder">
            <img src={logo} className="logo" alt="logo" />
            <div className="content">
              <h1>Fridsj</h1>
              <hr></hr>
              <p>Kommer snart.</p>
            </div>
          </div>        
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
