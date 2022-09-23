import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { GithubProvider } from './context/context';
import { Auth0Provider } from '@auth0/auth0-react';
//dev-t8bd7ckt.us.auth0.com
//60vagtQ3zEEgg04Krt2an2PvM5clyP9p
ReactDOM.render(
 <React.StrictMode>
  <Auth0Provider
   domain="dev-t8bd7ckt.us.auth0.com"
   clientId="60vagtQ3zEEgg04Krt2an2PvM5clyP9p"
   redirectUri={window.location.origin}></Auth0Provider>
  <GithubProvider>
   <App />
  </GithubProvider>
  <Auth0Provider />
 </React.StrictMode>,
 document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
