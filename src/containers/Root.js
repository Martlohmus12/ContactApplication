import React, { Component } from 'react';
import { Provider } from 'react-redux';

export class Root extends Component {
  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
        <div>
            import stuff
        </div>
      </Provider>
    );
  }
};