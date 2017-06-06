import React from 'react'
import {
    Text,
    View,
    StyleSheet,
    WebView
} from 'react-native'

const WebPage = ({ uri, onBack=f=>f }) => (
    <View 
    style={styles.container}>
        <Text 
        style={ styles.header } 
        onPress={onBack}> Available Colors
        </Text>

        <WebView 
        style={ styles.webview } 
        source={{ uri }} 
        contentInset={{ top: - 600}}
        />
    </View>
)



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'snow'
    },
    header: {
        fontSize: 20,
        textAlign: 'center',
        padding: 20,
        paddingBottom: 10,
        backgroundColor: 'lightgrey'
    },
    webview: {
        flex: 1,
        backgroundColor: 'snow'
    }
})

export default WebPage