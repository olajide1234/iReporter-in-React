import { ADD_USER } from '../actions/actionTypes';


const userState = {
  isLoggedIn: false,
  currentUser: {}
};


export const userReducer = (state = userState, action) => {
  switch (action.type) {
    case ADD_USER:
      return { ...state, isLoggedIn: true, currentUser: action.user };
    default:
      return state;
  }
};
