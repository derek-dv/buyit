import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addAlert } from "../actions/alert_actions";
import { v4 } from "uuid";
import "../styles/Auth.css";
import { register } from "../actions/auth_actions";

const Register = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.login);

  useEffect(() => {
    if (isAuthenticated) props.history.push("/");
  }, [isAuthenticated, props.history]);

  const onSubmit = (e) => {
    e.preventDefault();
    if (password1 !== password2) {
      dispatch(addAlert(v4(), "Passwords do not match", "error"));
    } else {
      dispatch(register({ name, email, password: password1 }));
    }
  };

  return (
    <div className="auth">
      <div className="auth__box">
        <h2 className="auth__heading">Create Account</h2>
        <form onSubmit={onSubmit}>
          <div className="auth__group">
            <label htmlFor="email">Name</label>
            <input
              className="auth__input"
              required
              placeHolder="Enter Name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="auth__group">
            <label htmlFor="email">Email</label>
            <input
              className="auth__input"
              type="email"
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
              value={password1}
              onChange={(e) => setPassword1(e.target.value)}
            />
          </div>
          <div className="auth__group">
            <label htmlFor="password">Confirm Password</label>
            <input
              className="auth__input"
              type="password"
              required
              placeHolder="Confirm Password"
              id="password2"
              value={password2}
              onChange={(e) => setPassword2(e.target.value)}
            />
          </div>
          <div className="auth__group">
            <button type="submit" className="auth__button">
              Register
            </button>
          </div>
          <div className="auth__group">
            <p className="auth__text">
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
