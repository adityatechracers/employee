import {createStore, applyMiddleware, compose} from 'redux'
import rootReducer from '../reducers'
import thunk from 'redux-thunk'

function configureStore() {
  return createStore(
    rootReducer,
    applyMiddleware(thunk)
  );
}

export default configureStore
