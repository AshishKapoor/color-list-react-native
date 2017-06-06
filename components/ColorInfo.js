import React, { Component } from 'react'

import {
    Text,
    StyleSheet,
    View,
    TouchableHighlight
} from 'react-native'

import ColorTools from 'color'

const ColorInfo = ({ backgroundColor, onSelect=f=>f }) => {
    const color = ColorTools(backgroundColor).negate()
    return (
        <TouchableHighlight 
        style= { [styles.container, {backgroundColor} ]}
        onPress={onSelect}>
            <Text 
            style={[styles.text, {color}]}> {backgroundColor} 
            </Text>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 40,
        margin:10
    }
})

export default ColorInfo