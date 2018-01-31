import React from 'react'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

import App from '../container/App.js'
import Home from '../container/home.js'
import Login from '../container/login.js'

const Routers = () => (
  <Router>
	  <div>
      <Route exact path="/" component={App}/>
      <Route path="/home" component={Home}/>
      <Route path="/login" component={Login}/>
    </div>  
  </Router>
);
export default Routers;