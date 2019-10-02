import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Timer from './Timer';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Timer />, document.getElementById('root'));

serviceWorker.unregister();
