import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './i18next';

ReactDOM.render(
  <Suspense fallback={(<div> Loading...</div>)} >
    <App />
  </Suspense >
  , document.getElementById('root'));
document.addEventListener("touchstart", function () { }, true);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
