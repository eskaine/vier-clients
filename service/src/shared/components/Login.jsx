import React from 'react'
import { NavLink } from 'react-router-dom'
import AuthForm from './sub/AuthForm'

function Login({ setIsAuth, page }) {
    return (
        <div className="login-page">
            <div className="login-container">
                <div className="container">
                <h1>Login</h1>
                <AuthForm setIsAuth={setIsAuth} url="login" page="register" />
                </div>
            </div>
            <div className="sm-container">
                <p>
                Don't have an account?
                <NavLink to="/register"><span>Register here.</span></NavLink>
                </p>
            </div>
        </div>

    )
}

export default Login
