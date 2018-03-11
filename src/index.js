import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Root } from './containers/Root';
import { configureStore } from './store';
import './styles/main.scss';

ReactDOM.render(
    <Root store={ configureStore } />,
    document.getElementById('app')
);
