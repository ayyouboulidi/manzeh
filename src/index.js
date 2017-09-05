import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { browserHistory } from 'react-router';
import Routes from './Routes';
import jQuery from 'jquery';
import './index.css';

global.$ = global.jQuery = jQuery;

require('bootstrap');
require('bootstrap/dist/css/bootstrap.min.css');

ReactDOM.render(<Routes history={browserHistory} />, document.getElementById('root'));
registerServiceWorker();
