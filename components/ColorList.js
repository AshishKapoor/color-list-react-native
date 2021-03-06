/**
 * ColorList By Ashish Kapoor
 * https://github.com/facebook/react-native
 * @SwiftObjc
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  ListView,
  AsyncStorage
} from 'react-native'

import ColorButton from './ColorButton'
import ColorForm from './ColorForm'

export default class ColorList extends Component {
  constructor() {
    super()
    this.ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    })
    const availableColors = []
    this.state = { 
      availableColors,
      dataSource: this.ds.cloneWithRows(availableColors)
    }
    this.newColor = this.newColor.bind(this)    
  }

  componentDidMount () {
    AsyncStorage.getItem(
      '@ColorListStore:Colors',
      (err, data) => {
        if (err) {
          console.error('Error loading colors...',err)
        } else {
          const availableColors = JSON.parse(data)
          this.setState({
            availableColors,
            dataSource: this.ds.cloneWithRows(availableColors)
          })
        }
      }
    )
  }

  saveColors (colors) {
    AsyncStorage.setItem(
      '@ColorListStore:Colors',
      JSON.stringify(colors)
    )
  }

  newColor(color) {
    const availableColors = [
      ...this.state.availableColors,
      color
    ]
    this.setState ({
      availableColors,
      dataSource: this.ds.cloneWithRows(availableColors)
    })
    this.saveColors(availableColors)
  }

  render() {
    const { backgroundColor, dataSource } = this.state
    return (
      <ListView 
      style={[ styles.container, { backgroundColor } ]}
      dataSource={dataSource}
      renderRow={(color) => ( 
        <ColorButton 
        backgroundColor={color} 
        onSelect= { this.props.onColorSelected } /> 
      )}
      renderHeader={() => ( 
        <ColorForm 
        style={styles.header} 
        onNewColor={this.newColor}
        onInfoButtonPress={this.props.onInfoButtonPress}/>
      )}>
      </ListView>
    )
  }
}

ColorList.defaultProps = {
    onColorSelected: f=>f
}

ColorList.propTypes = {
    onColorSelected: React.PropTypes.func
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    color: 'lightgrey',
    paddingTop: 20,
    padding: 10,
    fontSize: 30,
    textAlign: 'center'
  }
})