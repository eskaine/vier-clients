import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Axios from 'axios';
import { Redirect } from 'react-router-dom';

function AuthForm({ setIsAuth, url, page }) {
    const [form, setForm] = useState({
      username: '',
      password: '',
    });
  
    function changeHandler(e) {
      setForm({ ...form, [e.target.name]: e.target.value });
    }
  
    async function submitHandler(e) {
      e.preventDefault();
      await Axios.post(`/api/auth/${url}`, form)
      .then(res => {
        setIsAuth(true);
      })
      .catch(err => console.log(err))
    }
    return (
        <form method="post" onSubmit={submitHandler}>
        <p>Username: </p>
        <input name="username" type="text" className="username" placeholder="Username" onChange={changeHandler} />
        <p>Password: </p>
        <input name="password" type="password" className="password" placeholder="Password" onChange={changeHandler} />
        <button className="pink" type="submit">
          Submit
        </button>
      </form>
    )
}

AuthForm.propTypes = {
    setIsAuth: PropTypes.func,
    url: PropTypes.string,
  };

export default AuthForm
