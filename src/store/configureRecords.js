import {
  createStore, combineReducers, compose, applyMiddleware
} from 'redux';
import thunk from 'redux-thunk';
import { recordsReducer, userReducer } from '../reducers/reducers';

// Create Store

const store = createStore(
  combineReducers({
    records: recordsReducer,
    user: userReducer
  }),
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
export default store;
