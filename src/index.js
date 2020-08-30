import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Gatto from './Gatto';
import * as serviceWorker from './serviceWorker';
import 'tachyons';
import { quotes } from './quotes';
import { randomid } from './utils';

ReactDOM.render(
  <React.StrictMode>
    <Gatto name={quotes[0].personaggio} quote={quotes[0].citazioni[0]} id={randomid(10)} />
    <Gatto name={quotes[1].personaggio} quote={quotes[1].citazioni[0]} id={randomid(10)} />
    <Gatto name={quotes[2].personaggio} quote={quotes[2].citazioni[0]} id={randomid(10)} />
    <Gatto name={quotes[3].personaggio} quote={quotes[3].citazioni[0]} id={randomid(10)} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
