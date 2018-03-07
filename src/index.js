import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Root } from './containers/Root';
import { configureStore } from './store';

const title = 'contats';

ReactDOM.render(
    <Root store={ configureStore } />,
    document.getElementById('app')
);
