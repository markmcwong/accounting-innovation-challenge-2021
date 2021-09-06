import React, { Component, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
  useHistory,
  useLocation,
} from "react-router-dom";
import "./App.css";
import { AmplifyAuthenticator, withAuthenticator } from "@aws-amplify/ui-react";
import { AuthState, onAuthUIStateChange } from "@aws-amplify/ui-components";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Step1 from "pages/Step1";
import Header from "components/Header";
import { useDispatch } from "react-redux";
import { getProjects, login } from "actions/userActions";
import { Auth } from "aws-amplify";
import Sales from "pages/Sales";

function App() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [authState, setAuthState] = React.useState();
  const [user, setUser] = React.useState();
  Auth.currentAuthenticatedUser().then((data) => {
    dispatch(login(data));
    dispatch(getProjects(data.attributes.sub));
  });
  useEffect(() => {
    return onAuthUIStateChange((nextAuthState, authData) => {
      dispatch(login(authData));
      setAuthState(nextAuthState);
      setUser(authData);
      if (authState === AuthState.SignedIn) {
        getProjects(authData.attributes.sub);
      }
    });
  }, []);

  return (
    <Router>
      {authState === AuthState.SignedIn && <Redirect push to="/" />}
      <Route exact path="/login" component={AmplifyAuthenticator} />
      <Navbar />
      <div className="App pl-40 position-fixed p-12 w-full h-full flex flex-column">
        <Header />
        {authState === AuthState.SignedIn && user ? (
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/sales" component={Sales} />
            <Route exact path="/list" component={Step1} />
          </Switch>
        ) : (
          <Redirect to={{ pathname: "/login" }} />
        )}
      </div>
    </Router>
  );
}

export default App;
