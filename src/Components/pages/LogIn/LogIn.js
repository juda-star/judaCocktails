import React from "react";
import "./LogIn.css";
import { useState } from "react";
import { useDispatch } from "react-redux";

import { login } from "../../../redux/feature/userSlice";

export default function SignIn() {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      login({
        firstName: firstName,
        email: email,
        password: password,
        loggedIn: true,
      })
    );
  };
  return (
    <div className="formBody">
      <form className="form" onSubmit={(e) => handleSubmit(e)}>
        <div className="title">Welcome</div>
        <div className="subtitle">Sign in</div>
        <div className="input-container ic1">
          <input
          required
            id="firstname"
            className="input"
            type="firstName"
            placeholder=""
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <div className="cut"></div>
          <label htmlFor="firstName" className="placeholder">
            First name
          </label>
        </div>
        <div className="input-container ic2">
          <input
          required
            id="password"
            name="password"
            className="input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="cut"></div>
          <label htmlFor="password" className="placeholder">
            password
          </label>
        </div>
        <div className="input-container ic2">
          <input
          required
            id="email"
            name="email"
            className="input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="cut cut-short"></div>
          <label htmlFor="email" className="placeholder">
            Email
          </label>
        </div>
        <button type="submit" className="submit">
          submit
        </button>
      </form>
    </div>
  );
}
