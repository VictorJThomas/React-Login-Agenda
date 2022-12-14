import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { BrowserRouter } from "react-router-dom";
import {Auth0Provider} from '@auth0/auth0-react'
import "./styles/index.css";
import "./styles/vendor/bootstrap.min.css";

const domain = process.env.REACT_APP_AUTH0_DOMAIN
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID

ReactDOM.render(
  <BrowserRouter>
    <Auth0Provider domain={domain} clientId={clientId} redirectUri={window.location.origin}>
      <App />
    </Auth0Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
