import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import App from './components/App';
import Layout from "./pages/layout";
import About from "./components/about";
import ContactUs from "./components/contactus";

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={App}></IndexRoute>
      <Route path="about" component={About}></Route>
      <Route path="contactus" component={ContactUs}></Route>
    </Route>
  </Router>
), document.getElementById('main'))






