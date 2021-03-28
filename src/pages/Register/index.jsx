import React, { useContext } from 'react'
import RegisterForm from "components/Auth/RegisterForm/index"
import { Redirect } from "wouter"
import { ctx as authContext } from "contexts/authContext";


export default function Register() {
    const { isLogged } = useContext(authContext);

    if (isLogged) return <Redirect to="/" />

    return (
        <div>
            <h2>Register</h2>
            <RegisterForm />
        </div>
    );
}
