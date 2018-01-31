import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../static/img/logo.svg';
import '../static/css/login.css';

class login extends Component {
  render() {
    return (
      <div className="login">
        <header className="login-header">
          <img src={logo} className="login-logo" alt="logo" />
          <h1 className="login-title">Welcome to React</h1>
        </header>
        <Link to={'/'}>返回</Link>
        <p className="login-intro">
          To get started, edit <code>src/login.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default login;
