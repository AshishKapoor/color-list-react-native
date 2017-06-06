/**
 * ColorList By Ashish Kapoor
 * https://github.com/facebook/react-native
 * @SwiftObjc
 */

import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native'

import {
  Navigator
} from 'react-native-deprecated-custom-components'

import ColorList from './components/ColorList'
import ColorInfo from './components/ColorInfo'
import WebPage from './components/WebPage'

class App extends Component {
  render() {
    return (
      <Navigator 
        initialRoute={{ 
          name: 'Color List', 
          uri: 'https://www.github.com'
        }}
        renderScene={(route, navigator) => {
          switch (route.name) {
            case 'Color Info':
              return <ColorInfo 
              backgroundColor={route.color} 
              onSelect={() => navigator.pop()}/>

            case 'Web Page':
              return <WebPage 
              uri={route.uri} 
              onBack={() => navigator.pop()} />

            default :
              return <ColorList 
              onColorSelected={(color) => navigator.push({ name: 'Color Info', color})}
              onInfoButtonPress={() => navigator.push({ name: 'Web Page', uri: 'https://www.w3schools.com/colors/colors_names.asp'})} /> 
            }
          }}
      />
    )
  }
}

AppRegistry.registerComponent('ColorList', () => App)