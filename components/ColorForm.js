import React, {Component} from 'react'
import {
    View,
    Text,
    StyleSheet,
    TextInput
} from 'react-native'

export default class ColorForm extends Component {
    constructor() {
       super()
       this.state = {
        txtColor: ''
       }
       this.submit = this.submit.bind(this) 
    }

    submit () {
        this.props.onNewColor(this.state.txtColor.toLocaleLowerCase())
        this.setState({txtColor: ''})
    }
    render() {
        return (
            <View 
            style={styles.container}>

                <TextInput 
                style={styles.textInput} 
                placeholder="Enter a color..." 
                onChangeText={(txtColor) => this.setState({ txtColor })} 
                value={this.state.txtColor}
                />

                <Text 
                style={styles.button} 
                onPress={this.submit}> Add
                </Text>
                
                <Text 
                style={styles.button} 
                onPress={this.props.onInfoButtonPress}>Info
                </Text>

            </View>
        )
    }
}

ColorForm.prototypes = {
    onNewColor: React.PropTypes.func.isRequired
}

const styles = StyleSheet.create({ 
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: 'lightgrey',
        height: 70,
        paddingTop: 20
    },
    textInput: {
        flex: 1,
        margin: 5,
        padding: 5,
        borderWidth: 2,
        fontSize: 20,
        borderRadius: 5,
        backgroundColor: 'snow'
    },
    button: {
        backgroundColor: 'darkblue',
        padding: 5,
        margin: 5,
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontSize: 20,
        borderRadius: 10
    }
})