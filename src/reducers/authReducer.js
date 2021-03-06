import { ADD_USER, CURRENT_USER, LOGOUT_USER } from '../actions/actionTypes';


const userState = {
  isLoggedIn: false,
  currentUser: {}
};


const userReducer = (state = userState, action) => {
  switch (action.type) {
    case ADD_USER:
      return { ...state, isLoggedIn: true, currentUser: action.user };
    case CURRENT_USER:
      return {
        ...state,
        isLoggedIn: true,
        currentUser: action.user
      };
    case LOGOUT_USER:
      return {
        ...state,
        isLoggedIn: false,
        currentUser: action.user
      };
    default:
      return state;
  }
};

export default userReducer;
