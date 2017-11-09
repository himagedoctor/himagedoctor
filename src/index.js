import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';

import Home from './pages/home/Home';
import Charity from './pages/charity/Charity';
import Clinic from './pages/clinic/Clinic';
import TrainingLong from './pages/training_long/TrainingLong';
import TrainingShort from './pages/training_short/TrainingShort';
import Inmed from './pages/training_short/Inmed';
//? require vs import
require('smoothscroll-polyfill').polyfill();

import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
//import 'bootstrap/dist/css/bootstrap-theme.css';
import 'font-awesome/css/font-awesome.css';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={Home} />
    <Route path="/charity" component={Charity} />
    <Route path="/clinic" component={Clinic} />
    <Route path="/training-long" component={TrainingLong} />
    <Route path="/training-short" component={TrainingShort} />
    <Route path="/training-inmed" component={Inmed} />
  </Router>
  ), document.getElementById('root')
);