import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';

const finalCreateStore = compose(
  applyMiddleware(thunk)
)(createStore);

export const configureStore = finalCreateStore(rootReducer);