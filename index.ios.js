/**
 * ColorList By Ashish Kapoor
 * https://github.com/facebook/react-native
 * @SwiftObjc
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  ScrollView
} from 'react-native'

import ColorButton from './components/ColorButton'

export default class ColorList extends Component {
  constructor() {
    super()
    this.state = { 
      backgroundColor: 'blue'
    }
    this.changeColor = this.changeColor.bind(this)    
  }

  changeColor(backgroundColor) {
    this.setState({ backgroundColor })
  }

  render() {
    const { backgroundColor } = this.state
    return (
      <ScrollView style={[ styles.container, { backgroundColor } ]}>
        <ColorButton backgroundColor="red" onSelect= { this.changeColor } />
        <ColorButton backgroundColor="green" onSelect= { this.changeColor } />
        <ColorButton backgroundColor="blue" onSelect= { this.changeColor } />
        <ColorButton backgroundColor="yellow" onSelect= { this.changeColor } />
        <ColorButton backgroundColor="orange" onSelect= { this.changeColor } />
        <ColorButton backgroundColor="pink" onSelect= { this.changeColor } />
        <ColorButton backgroundColor="black" onSelect= { this.changeColor } />
        <ColorButton backgroundColor="gray" onSelect= { this.changeColor } />

      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20
  }
})

AppRegistry.registerComponent('ColorList', () => ColorList)