import {
  createStore, combineReducers, compose, applyMiddleware
} from 'redux';
import thunk from 'redux-thunk';
import userReducer from '../reducers/authReducer';
import recordsReducer from '../reducers/recordReducer';
import { CURRENT_USER } from '../actions/actionTypes';
import statReducer from '../reducers/statReducer';


const store = createStore(
  combineReducers({
    user: userReducer,
    recordsReducer,
    statReducer
  }),
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

const profile = localStorage.getItem('profile');
const token = localStorage.getItem('token');

if (token && profile) {
  store.dispatch({
    type: CURRENT_USER,
    user: JSON.parse(profile)
  });
}

export default store;
