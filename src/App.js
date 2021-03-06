import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import DateCalculatorApp from './date_calculator/DateCalculatorApp';
import MortgageApp from './mortgage/MortgageApp';
import NavBar from './NavBar'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavBar />

          <Route
            exact path = "/"
            render= { () => (<Redirect to="/date" />) }
          />

          <Route
            exact path = "/date"
            component = {DateCalculatorApp}
          />

          <Route
            path = "/date/:activeTab"
            component = {DateCalculatorApp}
          />

          <Route
            exact path = "/mortgage"
            component = {MortgageApp}
          />

          <Route
            path = "/mortgage/:activeTab"
            component = {MortgageApp}
          />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
