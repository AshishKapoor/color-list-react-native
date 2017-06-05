/**
 * ColorList By Ashish Kapoor
 * https://github.com/facebook/react-native
 * @SwiftObjc
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  TouchableHighlight,
  StyleSheet,
  Text,
  View
} from 'react-native'

export default class ColorList extends Component {
  constructor() {
    super()
    this.state = { 
      backgroundColor: 'blue', 
      fontSize: 30
    }

    this.changeColor      = this.changeColor.bind(this)
    // this.changeFontSize   = this.changeFontSize.bind(this)
    
  }

  changeColor(backgroundColor) {
    this.setState({ backgroundColor })
  }

  // changeFontSize(fontSize) {
  //   this.setState({ fontSize })
  // }

  render() {
    const { backgroundColor } = this.state
    // const { fontSize }        = this.state
    
    return (
      <View style={[ styles.container, { backgroundColor } ]}>
        
        <TouchableHighlight style={ styles.button } 
        onPress={ () => this.changeColor('yellow') }
        underlayColor="orange">
          
          <View style={ styles.row }> 
            <View style={[ 
              styles.sample, 
              {backgroundColor: 'yellow'}
            ]} />
            <Text style={ styles.text }> yellow </Text>
          </View>

        </TouchableHighlight>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  button: {
    margin: 10,
    padding: 10,
    borderWidth: 2,
    borderRadius: 10,
    alignSelf: 'stretch',
    backgroundColor: 'rgba(255,255,255,.8)'
  },
  row: {
   flexDirection: 'row',
   alignItems: 'center' 
  },
  sample: {
    height: 20,
    width: 20,
    margin: 5,
    borderRadius: 10,
    backgroundColor: 'white'
  },
  text: {
    fontSize: 30,
    margin: 5
  }
})

AppRegistry.registerComponent('ColorList', () => ColorList)