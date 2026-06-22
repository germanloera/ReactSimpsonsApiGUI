import { useColorScheme } from '@/hooks/use-color-scheme';
import React from "react";
import { StyleSheet, Text, View } from "react-native";


export default function HomeInfoPill() {
    const theme = useColorScheme() ?? 'light';
    return (
        <View style={homeInfoPillStyle.container}>
            <Text style={homeInfoPillStyle.text}>
                🍩 Explora el universo de Springfield.
            </Text>

            <Text style={homeInfoPillStyle.text}>
                Explora personajes, episodios y lugares desde la API oficial de The Simpsons.
            </Text>
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
        marginHorizontal: 10,
        alignContent: 'center',
        fontWeight: 500


    }



});