import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';

import Home from './pages/home/Home';
//pages
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
//import 'bootstrap/dist/css/bootstrap-theme.css';
import 'font-awesome/css/font-awesome.css';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={Home} />
  </Router>
  ), document.getElementById('root')
);
