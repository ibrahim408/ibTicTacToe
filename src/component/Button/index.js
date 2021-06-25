import React from 'react'
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native'

function Button({onPressRestart}){

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={ () => onPressRestart()} style={styles.button}>
                <Text style={styles.textStyle}>RESTART</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 25,
    },
    button: {
        width: '100%',
        height: '50%',
        backgroundColor: '#CD5C5C',
        shadowColor: "#DC143C",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.51,
        shadowRadius: 13.16,
        
        elevation: 20,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textStyle: {
        fontSize: 45,
        fontWeight: 'bold',
        color: '#FFFFFF'
    }
})

export default Button;