'use strict';

import React, { Component } from 'react';
import {
  Route,
  StackRoute,
  TabsRoute,
  Router,
  nativeHistory,
} from 'react-router-native';
import { Provider } from 'react-redux';

import { syncHistoryWithStore } from 'react-router-redux';
import store from './stores';
import App from './sections';

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(nativeHistory, store);
// Set current path to '/'
history.push('/');

const routes = (
  <Provider store={store}>
    <Router history={nativeHistory} addressBar>
      <TabsRoute path="" component={App}>
        
      </TabsRoute>
    </Router>
  </Provider>
);

export default routes;