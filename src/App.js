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
import Categories from "pages/Categories";
import Header from "components/Header";
import { useDispatch } from "react-redux";
import { getProjects, login } from "actions/userActions";
import { Auth } from "aws-amplify";
import Accounts from "pages/Accounts";
import AccountTransactions from "./pages/AccountTransactions";
import InvoicesUpload from "pages/InvoicesUpload";

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
        // dispatch(getProjects(authData.attributes.sub));
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
            <Route exact path="/accounts/:id" component={Accounts} />
            <Route
              exact
              path="/accounts/:id/upload"
              component={InvoicesUpload}
            />
            <Route exact path="/categories" component={Categories} />
            <Route
              exact
              path="/accounts/:id/transaction/:transId"
              component={AccountTransactions}
            />
          </Switch>
        ) : (
          <Redirect to={{ pathname: "/login" }} />
        )}
      </div>
    </Router>
  );
}

export default App;
