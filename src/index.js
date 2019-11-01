import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TimerApp from './TimerApp';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<TimerApp />, document.getElementById('root'));

serviceWorker.unregister();
