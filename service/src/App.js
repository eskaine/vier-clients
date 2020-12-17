import React, { useState, useEffect } from 'react';
import { Route, Switch, Redirect, NavLink } from 'react-router-dom';
import PrivateRoute from './shared/components/PrivateRoute';
import socket from './shared/helpers/socket';
import { getLocalAuth, setLocalAuth } from './shared/helpers/func';
import Dashboard from './pages/Dashboard';
import Kitchen from './pages/Kitchen';
import Nav from './shared/components/Nav';
import Register from './shared/components/Register';
import Login from './shared/components/Login';

function App() {
  const [isAuth, setIsAuth] = useState(getLocalAuth());

  function setAuth(state) {
    setIsAuth(state);
    setLocalAuth(state);
  }

  useEffect(() => {
    socket.connect('service');
    return () => {
      socket.stop();
    };
  }, []);

  return (
    <div>
      {/* {isAuth ? <Nav /> : ''} */}
      <Nav />
      <Switch>
        <Route exact path="/">
          {isAuth ? <Redirect to="/service" /> : <Login setIsAuth={setAuth} />}
        </Route>
        <Route exact path="/kitchen">
          <Kitchen />
          {/* {isAuth ? <Kitchen /> : <Redirect to="/login" />} */}
        </Route>
        <Route path="/login">
          {isAuth ? <Redirect to="/service" /> : <Login setIsAuth={setAuth} />}
          {/* <Login setIsAuth={setIsAuth} url="login" /> */}
        </Route>
        <Route path="/register">
          {isAuth ? <Redirect to="/service" /> : <Register setIsAuth={setAuth} />}
          {/* <Register setIsAuth={setIsAuth} url="login" /> */}
        </Route>
        <Route exact path="/service">
          <Dashboard />
          {/* {isAuth ? <Dashboard /> : <Redirect to="/login" />} */}
        </Route>
      </Switch>
    </div>
  );
}

export default App;
