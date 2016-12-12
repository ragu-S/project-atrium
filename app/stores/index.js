'use strict';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { routerReducer } from 'react-router-redux';
import thunk from 'redux-thunk';

import * as appReducers from './reducers/app';

// Apply thunk middleware
let enhancements = compose(
  applyMiddleware(thunk, store)
);

// Add reducers to store on 'routing' key
const store = createStore(
  combineReducers({
    ...appReducers,
    routing: routerReducer
  }),
  enhancements
);

export default store;