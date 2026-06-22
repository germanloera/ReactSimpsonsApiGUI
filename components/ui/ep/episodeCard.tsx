import React from "react";
import { StyleSheet, Text, View } from "react-native";


export default function CardEpisode() {

    return (
        <View style={episodeCardStyle.container}>
            <View style={episodeCardStyle.imageContainer}>



            </View>



            <View style={episodeCardStyle.textContainer}>



                <Text style={episodeCardStyle.text}>
                    <Text style={{ fontSize: 20, fontWeight: 800 }}>Homero Simpson</Text>
                </Text>

                <Text style={[episodeCardStyle.text, { fontSize: 15, fontStyle: 'italic' }]}>
                    Security Inspector
                </Text>

            </View>


        </View>
    )


}

const episodeCardStyle = StyleSheet.create({
    container: {
        height: 280,
        backgroundColor: '#FFF',
        alignSelf: 'stretch',
        borderRadius: 10,
        margin: 10,
        borderColor: '#f9e7bb',
        borderWidth: 3,
        flexDirection: 'column'

    },


    imageContainer: {
        height: 180,
        borderTopEndRadius: 10,
        borderTopLeftRadius: 10,
        backgroundColor: "#516fdc",

    },



    textContainer: {
        marginVertical: 10,
    },


    text: {
        textAlign: 'auto',
        marginHorizontal: 10,
        alignContent: 'center',
        fontWeight: 500,
    }



});