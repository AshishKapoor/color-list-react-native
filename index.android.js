/**
 * ColorList By Ashish Kapoor
 * https://github.com/facebook/react-native
 * @SwiftObjc
 */

import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native'

import ColorList from './components/ColorList'

class App extends Component {
  render() {
    return (
      <ColorList onColorSelected={color => Alert.alert(color)}/>
    )
  }
}

AppRegistry.registerComponent('ColorList', () => ColorList)