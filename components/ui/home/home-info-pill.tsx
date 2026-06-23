import { useColorScheme } from '@/hooks/use-color-scheme';
import React from "react";
import { StyleSheet, Text, View } from "react-native";


export default function HomeInfoPill() {
    const theme = useColorScheme() ?? 'light';
    return (
        <View style={homeInfoPillStyle.container}>
            <View>
            <Text style={homeInfoPillStyle.text}>
                🍩 Explore the universe of Springfield.
            </Text>

            <Text style={homeInfoPillStyle.text}>
                Explore characters, episodes, and places from the official The Simpsons API.
                </Text>
            </View>
        </View>
    )


}

const homeInfoPillStyle = StyleSheet.create({
    container: {
        backgroundColor: '#fbebb6',
        height: 100,
        alignSelf: 'stretch',
        borderRadius: 50,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 20
        
    },

    text: {
        textAlign: 'center',
        marginHorizontal: 20,
        alignContent: 'center',
        fontWeight: 500


    }



});