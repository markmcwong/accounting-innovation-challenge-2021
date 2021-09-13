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
import { useDispatch, useSelector } from "react-redux";
import { getProjects, login } from "actions/userActions";
import { API, Auth, graphqlOperation } from "aws-amplify";
import Accounts from "pages/Accounts";
import AccountTransactions from "./pages/AccountTransactions";
import Toast from "react-bootstrap/Toast";
import InvoicesUpload from "pages/InvoicesUpload";
import * as subscriptions from "./graphql/subscriptions";
import ToastContainer from "react-bootstrap/ToastContainer";

function App() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [authState, setAuthState] = React.useState();
  const [user, setUser] = React.useState();
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState(null);
  let subscription;
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

  useEffect(() => {
    if (subscription != null) subscription.unsubscribe();
    if (user != null && user.attributes != null) {
      subscription = API.graphql(
        graphqlOperation(subscriptions.userNotification, {
          user: user.attributes.sub,
        })
      ).subscribe({
        next: ({ provider, value }) => {
          console.log("subscribe");
          console.log({ provider, value });
          if (value.data != null) {
            setShow(true);
            setMessage(value.data.userNotification.message);
          }
        },
        error: (error) => console.warn(error),
      });
    }
  }, [user]);
  return (
    <Router>
      {authState === AuthState.SignedIn && <Redirect push to="/" />}
      <Route exact path="/login" component={AmplifyAuthenticator} />
      <Navbar />
      <div className="App pl-40 position-fixed p-12 w-full h-full flex flex-column">
        <ToastContainer position="top-end" className="p-4">
          <Toast
            delay={3000}
            onClose={() => setShow(false)}
            show={show}
            autohide
          >
            <Toast.Header>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded me-2"
                alt=""
              />
              <strong className="me-auto">Status Update</strong>
              <small>Now</small>
            </Toast.Header>
            <Toast.Body className="ml-2 text-left">{message}</Toast.Body>
          </Toast>
        </ToastContainer>
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
