import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { CharacterDetail } from "@/src/models/characters";
import { Image } from "expo-image";
import { IMAGE_BASE } from "@/src/constants/urls";
import { limitText } from "@/src/utils/StringFunctions";



interface CharacterProps { 
    character: CharacterDetail

}

export default function CharacterCard({ character } : CharacterProps) {

    return (
        <View style={homeAdviceStyle.container}>
            <View style={homeAdviceStyle.imageContainer}>
                
                <Image
                    source={{ uri : IMAGE_BASE + character.portrait_path}}
                    style={homeAdviceStyle.image}
                    contentFit="cover"
                />

            

            </View>



            <View style={ homeAdviceStyle.textContainer }>



                <Text style={homeAdviceStyle.text}>
                    <Text style={{ fontWeight: 800, fontSize: 20 }}>{ limitText(character.name, 20)  } </Text> 
                </Text>

                <Text  ellipsizeMode="tail"  style={[homeAdviceStyle.text, { fontSize: 15, fontStyle: 'italic'}]}>
                    { limitText(character.occupation, 35)  }
                </Text>

            </View>


        </View>
    )


}

const homeAdviceStyle = StyleSheet.create({
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
        backgroundColor: "#5a8dc6",
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