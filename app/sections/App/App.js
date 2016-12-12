'use strict';

import React, { Component, PropTypes } from 'react';
import style from './style';
import {
  View,
} from 'react-native';

class App extends Component {
  static propTypes = {
    isReady: PropTypes.bool
  }
  static defaultProps = {
    isReady: false
  }
  static contextTypes = {
    router: React.PropTypes.object,
    store: React.PropTypes.object
  }
  /* Inital Actions on App load */
  
  // Get current project if it is set
  
  // Connect to socket server

  // Attempt login if user was logged in previously

  render() {
    return (
      <View style={style} />
    );
  }
}


export default App;