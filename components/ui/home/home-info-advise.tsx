import { useColorScheme } from '@/hooks/use-color-scheme';
import React from "react";
import { StyleSheet, Text, View } from "react-native";


export default function HomeInfoAdvice() {
    const theme = useColorScheme() ?? 'light';
    return (
        <View style={homeAdviceStyle.container}>
            <Text style={homeAdviceStyle.text}>
                <Text style={{ fontWeight: 800 } }>✨ Consejo:</Text> Toca cualquier tarjeta para ver más detalles (consola o alerta informativa).
            </Text>

            <Text style={[homeAdviceStyle.text, {fontSize: 10}]}>
                🔍 Usa la lupa para filtrar en cada lista
            </Text>
        </View>
    )


}

const homeAdviceStyle = StyleSheet.create({
    container: {
        backgroundColor: '#f9dea2',
        height: 100,
        alignSelf: 'stretch',
        borderRadius: 50,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10
        
    },

    text: {
        textAlign: 'center',
        marginHorizontal: 10,
        alignContent: 'center',
        fontWeight: 500


    }



});