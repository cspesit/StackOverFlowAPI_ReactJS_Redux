import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import Index from './components/route/';
import Store from './store';
ReactDOM.render(<Provider store={Store}><Index/></Provider>,document.getElementById('root'));