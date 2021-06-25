import React from 'react'
import {View, StyleSheet, ScrollView, TouchableOpacity} from 'react-native'
import IconEntypo from 'react-native-vector-icons/Entypo'


function Keypad({board,onPressCell}){
    const items = [1,2,3];

    const renderRow = (row,cells) => {
        return (
            <View style={styles.row}>
                {cells.map((value,index) => renderCell(row,index,value))}
            </View>
        )
    }

    const renderCell = (row,cell,value) => {
        return (
            <TouchableOpacity onPress={ () => onPressCell(row,cell,value)} style={styles.cell}>
                {value === 0 ?  null : value === 1 ?   <IconEntypo name="cross" size={55}/> : <IconEntypo name="circle" size={55}/> }
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.container}>
            <ScrollView scrollEnabled={false} contentContainerStyle={styles.scrollViewContainer}>
                {board.map((cells,index) => renderRow(index,cells))}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 8,
    },
    scrollViewContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 25,
        paddingHorizontal: 25
    },
    cell: {
        width: 100,
        height: 100,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        
        elevation: 4,
        borderRadius: 10,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center'
    },
    circle: {

    }
})

export default Keypad;