import { useColorScheme } from '@/hooks/use-color-scheme';
import React from "react";
import { StyleSheet, Text, View } from "react-native";


export default function SeasonPill() {
    const theme = useColorScheme() ?? 'light';
    return (
        <View style={seasonPillStyle.container}>

            
            <View style={[seasonPillStyle.pill]}>
                <Text style={seasonPillStyle.text }>S1, C1</Text>
            </View>


        </View>
    )


}

const seasonPillStyle = StyleSheet.create({
    container: {
        marginLeft: 8,
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        flexDirection: 'column'
        
    },

    pill: {
        height: 25,
        backgroundColor: '#f0d85f',
        borderRadius: 20,
        paddingHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center'
        
    },

    text: {
        color: '#000', fontWeight: 700, fontStyle: 'italic', fontSize: 12
    
    }


});