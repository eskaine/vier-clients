import React, { useState, useEffect } from 'react';
import { Route, Switch, Redirect, NavLink } from 'react-router-dom';
import PrivateRoute from './shared/components/PrivateRoute';
import socket from './shared/helpers/socket';
import Home from './shared/components/Home';
import Dashboard from './pages/Dashboard';
import Kitchen from './pages/Kitchen';
import Nav from './shared/components/Nav';
import Register from './shared/components/Register';
import Login from './shared/components/Login';

function App() {
  const [isAuth, setIsAuth] = useState(false);

  // useEffect(() => {
  //   socket.connect('service');
  //   return () => {
  //     socket.disconnect();
  //   };
  // }, []);

  return (
    <div>
      {/* {isAuth ? <Nav /> : ''} */}
      <Nav />
      <Switch>
        {/* <Route path="/" >
          {isAuth ? <Dashboard /> : <Redirect to="/login" />}
        </Route> */}
        <Route exact path="/kitchen">
          <Kitchen />
          {/* {isAuth ? <Kitchen /> : <Redirect to="/login" />} */}
        </Route>
        <Route path="/login">
          <Login setIsAuth={setIsAuth} url="login" />
        </Route>
        <Route path="/register">
          <Register setIsAuth={setIsAuth} url="login" />
        </Route>
        <Route exact path="/service" >
          <Dashboard />
          {/* {isAuth ? <Dashboard /> : <Redirect to="/login" />} */}
        </Route>
      </Switch>
    </div>
  );
}

export default App;
