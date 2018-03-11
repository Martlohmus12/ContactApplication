import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Sidebar from './sidebar';
import Profile from './profile';

export class Root extends Component {
  render() {
    const { store } = this.props;

    return (
      <Provider store={store}>
            <div className="main">
                <Sidebar />
                <Profile />
            </div>
      </Provider>
    );
  }
};