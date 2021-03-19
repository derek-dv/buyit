import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { login } from "../actions/auth_actions";
import "../styles/Auth.css";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.login);

  useEffect(() => {
    if (isAuthenticated) props.history.push("/");
  }, [isAuthenticated, props.history]);
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));
  };
  return (
    <div className="auths">
      <div class="auth">
        <div className="auth__box">
          <h2 className="auth__heading">Login</h2>
          <form onSubmit={submitHandler}>
            <div className="auth__group">
              <label htmlFor="email">Email</label>
              <input
                className="auth__input"
                required
                placeHolder="Enter Email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="auth__group">
              <label htmlFor="password">Password</label>
              <input
                className="auth__input"
                type="password"
                required
                placeHolder="Enter Password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="auth__group">
              <button type="submit" className="auth__button">
                Login
              </button>
            </div>
            <div className="auth__group">
              <p className="auth__text">
                Don't have an account? <Link to="/register">Register</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
