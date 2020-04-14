import React, { Component } from "react";
import { Route, Switch, Redirect } from 'react-router-dom';
import Contacts from './components/Contacts/Contacts';
import Home from './components/Home/Home';
import { NavLink } from 'react-router-dom';

import "./App.css";
import logo from './assets/logo-tipaw.svg';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class App extends Component {
  render() {
    let routes = (
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/" exact component={Contacts} />
        <Redirect to="/" />
      </Switch>
    );

    return (
      <React.Fragment>
        <ToastContainer />
        <section className="header">
          <img src={logo} alt="logo" />
          <ul className="navigation-items">
            <li className="navigation-item">
              <NavLink to="/home" exact>
                Home
              </NavLink>
            </li>
            <li className="navigation-item">
              <NavLink to="/" exact>
                Contacts
              </NavLink>
            </li>
          </ul>
        </section>
        {routes}
      </React.Fragment>
    );
  }
}

export default App;
