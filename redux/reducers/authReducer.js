import {
  LOGIN_USER_AUTH_SUCCESS,
} from '../actions/authAction';

const initialState = {
  user: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER_AUTH_SUCCESS:
      return {
        ...state,
        user: action.payload,
      };
  }

  return state;
}
