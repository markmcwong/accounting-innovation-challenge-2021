import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import store from "./store";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import AWSAppSyncClient, { AUTH_TYPE } from "aws-appsync";
import Amplify, { Auth } from "aws-amplify";
import config from "./aws-exports";
import "bootstrap/dist/css/bootstrap.min.css";

Amplify.configure(config);
Auth.configure(config);

// const client = new AWSAppSyncClient({
//   url: config.aws_appsync_graphqlEndpoint,
//   region: config.aws_appsync_region,
//   auth: {
//     type: AUTH_TYPE.API_KEY,
//     apiKey: config.aws_appsync_apiKey,
//   },
// });

if (module.hot) {
  module.hot.accept();
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
