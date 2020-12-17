import React from 'react';
import { NavLink } from 'react-router-dom';
import AuthForm from './sub/AuthForm';

function Register({ setIsAuth, page }) {
    return (
        <div className="login-page">
            <div className="login-container">
                <div className="container">
                <h1>Register</h1>
                <AuthForm setIsAuth={setIsAuth} url="register" page="login" />
                </div>
            </div>
            <div className="sm-container">
                <p>
                Already have an account?
                <span><NavLink to="/login">Login here.</NavLink></span>
                </p>
            </div>
        </div>
    )
}

export default Register
