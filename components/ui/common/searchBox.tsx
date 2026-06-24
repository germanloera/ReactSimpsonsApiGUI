import React, { useState } from "react";
import { StyleSheet, Text, View,TextInput, TouchableOpacity } from "react-native";

interface SearchProps{ 
action: (query: string) => void
}


export default function SearchBox({ action }: SearchProps) {

const [query, setQuery] = useState<string>("")


    return (
        <View style={searchStyle.container}>
            <TextInput style={searchStyle.input} placeholder="Search characters" onChangeText={ text => setQuery(text)} />

            <TouchableOpacity style={searchStyle.touchable}  onPress={() => action(query)}>
                <Text>🔍 Search</Text>

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