import { useColorScheme } from '@/hooks/use-color-scheme';
import React from "react";
import { StyleSheet, Text, View } from "react-native";


export default function HomeInfoAdvice() {
    const theme = useColorScheme() ?? 'light';
    return (
        <View style={homeAdviceStyle.container}>
            <View>
            <Text style={homeAdviceStyle.text}>
                <Text style={{ fontWeight: 800 } }>✨ Tip:</Text> Tap any card to view more details (console or informational alert).
            </Text>

            <Text style={[homeAdviceStyle.text, {fontSize: 10}]}>
                🔍 Use the magnifier to filter in each list
                </Text>
            </View>
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
        paddingVertical: 10,
        margin: 10,
      
        flexDirection: 'row'
        
    },

    text: {
        textAlign: 'center',
        marginHorizontal: 10,
        alignContent: 'center',
        fontWeight: 500


    }



});