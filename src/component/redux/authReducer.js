import { combineReducers } from 'redux';
import { LOGIN_SUCCESS, LOGOUT } from './authActions';

const initialState = {
  user: [],
  isLoggedIn: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: {
          email: action.payload.email,
          userId: action.payload.userId,
        },
        isLoggedIn: true,
      };
    case LOGOUT:
      return {
        ...state, user: [], isLoggedIn: false,
      };
    default:
      return state;
  }
};

export default combineReducers({
  auth: authReducer
});
