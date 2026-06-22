import React from "react";
import { StyleSheet, Text, View } from "react-native";


export default function SearchBox() {

    return (
        <View style={searchStyle.container}>
            <View style={searchStyle.imageContainer}>
                
                <View style={searchStyle.image }></View>

            </View>



            <View style={searchStyle.textContainer }>



                <Text style={searchStyle.text}>
                    <Text style={{ fontWeight: 800 }}>Homero Simpson</Text> 
                </Text>

                <Text style={[searchStyle.text, { fontSize: 10, fontStyle: 'italic'}]}>
                    Security Inspector
                </Text>

            </View>


        </View>
    )


}

const searchStyle = StyleSheet.create({
    container: {
        
        backgroundColor: '#FFF',
        height: 100,
        alignSelf: 'stretch',
        borderRadius: 30,
        justifyContent: 'flex-start',
        alignItems: 'center',
        margin: 10,
        borderColor: '#f9e7bb',
        borderWidth: 3,
        flexDirection: 'row'

    },


    imageContainer: {
        width: 100,

        justifyContent: 'center',
        alignItems: 'center',
    
    },

    image: {
        backgroundColor: "#516fdc",
        width: 80, 
        height: 80, 
        borderRadius: 45
    },

    textContainer: {
       
    },


    text: {
        textAlign: 'auto',
        marginHorizontal: 10,
        alignContent: 'center',
        fontWeight: 500
    }



});