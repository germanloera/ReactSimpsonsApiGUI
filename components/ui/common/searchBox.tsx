import React from "react";
import { StyleSheet, Text, View,TextInput, TouchableOpacity } from "react-native";



export default function SearchBox() {

    return (
        <View style={searchStyle.container}>
            <TextInput style={searchStyle.input} placeholder="Buscar personajes" />

            <TouchableOpacity style={searchStyle.touchable} >
                <Text>🔍 Buscar</Text>

            </TouchableOpacity>

        </View>
    )


}

const searchStyle = StyleSheet.create({
    container: {
        
        backgroundColor: '#fff',
        height: 50,
        alignSelf: 'stretch',
        borderRadius: 30,
        justifyContent: 'flex-start',
        alignItems: 'center',
        margin: 10,
        borderColor: '#f9daa1',
        borderWidth: 1,
        flexDirection: 'row'

    },


    input: {
        flex: 1,
        
        marginLeft: 20, 

    },

    touchable: {
        width: 100,
        height: 40,
        marginEnd: 10,
        borderRadius:20,
        backgroundColor: '#f4b65c',
        alignItems: 'center',
        justifyContent: 'center'
    }


});