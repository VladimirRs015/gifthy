import React, { useState, useContext } from "react";
import { ctx as authContext } from "contexts/authContext";
import { Redirect, useLocation } from "wouter";

export default function LoginForm() {
  const [email, setEmail] = useState("camprexx.rd@gmail.com");
  const [password, setPassword] = useState("camprexx");
  const [, navigate] = useLocation();
  const { isError, errorMessage, doLogin, isLoading, isLogged } = useContext(
    authContext
  );

  if (isLogged) return <Redirect to="/" />;

  function handleEmailChange(e) {
    e.preventDefault();
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    e.preventDefault();
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    doLogin({ email, password }).then(() => navigate("/"));
  }

  return (
    <>
      {isError && <h3>{errorMessage}</h3>}
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleEmailChange} value={email} />

        <input
          type="password"
          onChange={handlePasswordChange}
          value={password}
        />

        <button type="submit">
          Login
          {isLoading && <span>loading</span>}
        </button>
      </form>
    </>
  );
}
