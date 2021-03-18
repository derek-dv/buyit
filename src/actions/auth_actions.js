import Axios from "axios";
import { v4 } from "uuid";
import {
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  SIGNUP_FAIL,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
} from "./auth";
import { addAlert } from "./alert_actions";

export const login = (credentials) => (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });

  Axios.post("/api/user/login", credentials, {
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
      dispatch(addAlert(v4(), "Login successful", "success"));
    })
    .catch((err) => {
      dispatch({ type: LOGIN_FAIL, payload: err.response.data.error });
      dispatch(addAlert(v4(), err.response.data.error, "error"));
    });
};

export const register = (data) => (dispatch) => {
  dispatch({ type: SIGNUP_REQUEST });

  Axios.post("/api/user/register", data)
    .then((res) => {
      dispatch({ type: SIGNUP_SUCCESS, payload: res.data });
      dispatch(addAlert(v4(), `Account created for ${data.name}`));
    })
    .catch((err) => {
      dispatch({ type: SIGNUP_FAIL, payload: err.response });
      dispatch(addAlert(v4(), err.response.data.error, "error"));
    });
};
