import { useColorScheme } from '@/hooks/use-color-scheme';
import React from "react";
import { StyleSheet, Text, View } from "react-native";


export default function HomeInfoSmallPills() {
    const theme = useColorScheme() ?? 'light';
    return (
        <View style={homeInfoSmallPills.container}>

            
            <View style={[homeInfoSmallPills.bluePill, homeInfoSmallPills.pillContainer]}>
                <Text style={{ color: '#fff', fontWeight: 600 } }>⭐ 700+ personajes</Text>
            </View>


            <View style={[homeInfoSmallPills.orangePill, homeInfoSmallPills.pillContainer]}>

                <Text style={{ fontWeight: 600 }}>📺 Temporadas clásicas</Text>
            </View>




        </View>
    )


}

const homeInfoSmallPills = StyleSheet.create({
    container: {
       
        
        alignSelf: 'stretch',
     
        justifyContent: 'space-between',
        alignItems: 'center',
        
        flexDirection: 'column'
        
    },

    bluePill: {
        backgroundColor: '#2e3b6a',
        
    },
    orangePill: {
        backgroundColor: '#f2a349',
        marginTop: 10
    },

    pillContainer: {
        flex: 1,
        padding: 5,
        borderRadius: 20,
        paddingHorizontal: 10,
       
        
    },





    text: {
        textAlign: 'center',
        marginHorizontal: 10,
        alignContent: 'center',
        fontWeight: 500


    }



});