import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import { Register } from "./components/auth/signUp";
import Login from "./components/auth/login/index";
import { Logout } from "./components/logout";
import "./App.css";
const App = () => {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/logout" component={Logout} />
        <Header />
        <Main />
      </Switch>
    </div>
  );
};
export default App;
