import { useColorScheme } from '@/hooks/use-color-scheme';
import React from "react";
import { StyleSheet, Text, View } from "react-native";


interface SeasonPillProps { 
    c: String,
    s: String, 
    location?: String
}

export default function SeasonPill({ c, s, location} : SeasonPillProps) {
    const theme = useColorScheme() ?? 'light';
    return (
        <View style={seasonPillStyle.container}>

            
            <View style={[seasonPillStyle.pill]}>
                <Text style={seasonPillStyle.text}>{location ?? `S${s} C${c}`}</Text>
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