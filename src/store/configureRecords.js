import {
  createStore, combineReducers, compose, applyMiddleware
} from 'redux';
import thunk from 'redux-thunk';
import { userReducer } from '../reducers/authReducer';
import { recordsReducer } from '../reducers/recordReducer';


const store = createStore(
  combineReducers({
    user: userReducer,
    records: recordsReducer
  }),
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
export default store;
