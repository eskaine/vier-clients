import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import Axios from 'axios';

function Log({ setIsAuth, url }) {
  const [form, setForm] = useState({
    username: '',
    password: '',
  });

  function changeHandler(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function submitHandler(e) {
    e.preventDefault();
    let res = await Axios.post(url, form);
    if (res.status === 200) {
      setIsAuth(true);
    }
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
  );
}

Log.propTypes = {
  setIsAuth: PropTypes.func,
  url: PropTypes.string,
};

export default Log;
