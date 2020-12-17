import React, { useState, useEffect } from 'react';
import { Route, Switch, Redirect, NavLink } from 'react-router-dom';
import PrivateRoute from './shared/components/PrivateRoute';
import socket from './shared/helpers/socket';
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
        <Route exact path="/" >
          {isAuth ? <Redirect to='/service' /> : <Login setIsAuth={setIsAuth} />}
        </Route>
        <Route exact path="/kitchen">
          <Kitchen />
          {isAuth ? <Kitchen /> : <Redirect to="/login" />}
        </Route>
        <Route path="/login">
          {isAuth ? <Redirect to="/service" /> : <Login setIsAuth={setIsAuth} />}
          {/* <Login setIsAuth={setIsAuth} url="login" /> */}
        </Route>
        <Route path="/register">
          {isAuth ? <Redirect to="/service" /> : <Register setIsAuth={setIsAuth} />}
          {/* <Register setIsAuth={setIsAuth} url="login" /> */}
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
