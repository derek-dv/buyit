import * as types from "../actions/auth";
export const login = (
  state = { loading: true, isAuthenticated: false },
  action
) => {
  switch (action.type) {
    case types.LOGIN_REQUEST:
      return { loading: true, isAuthenticated: false };
    case types.LOGIN_SUCCESS:
      return {
        id: action.payload.id,
        loading: false,
        user: action.payload.name,
        isAdmin: action.payload.isAdmin,
        isAuthenticated: true,
      };
    case types.LOGIN_FAIL:
      return { loading: false, error: action.payload, isAuthenticated: false };
    default:
      return state;
  }
};

export const register = (state = { loading: true }, action) => {
  switch (action.type) {
    case types.SIGNUP_REQUEST:
      return { loading: true };

    case types.SIGNUP_SUCCESS:
      return { loading: false };
    case types.SIGNUP_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
