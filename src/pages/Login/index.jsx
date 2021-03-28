import React, { useContext } from "react";
import { Redirect } from "wouter";
import { ctx as authContext } from "contexts/authContext";
import LoginForm from "components/Auth/LoginForm/index";

export default function Login() {
  const { isLogged } = useContext(authContext);

  if (isLogged) return <Redirect to="/" />;

  return (
    <div>
      <h2>Login</h2>
      <LoginForm />
    </div>
  );
}
