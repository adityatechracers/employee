import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import configureStore from './store'
import {createStore, applyMiddleware, compose } from 'redux'
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import rootReducer from './reducers'
import App from './components/App'
import initialState from './initialState'
import thunk from 'redux-thunk'
import Layout from "./pages/layout";
import About from "./components/about";
import ContactUs from "./components/contactus";


let store = configureStore();
// console.log(store.getState());

render(
  <Provider store={store}>
    <Router history={browserHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={App}></IndexRoute>
      <Route path="about" component={About}></Route>
      <Route path="contactus" component={ContactUs}></Route>
    </Route>
  </Router>
  </Provider>,
  document.getElementById('main')
)

