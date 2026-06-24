import { IMAGE_BASE } from "@/src/constants/urls";
import { CharacterDetail } from "@/src/models/characters";
import { limitText } from "@/src/utils/StringFunctions";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";



interface CharacterProps {
    character: CharacterDetail

}

export default function CharacterCard({ character }: CharacterProps) {
    const router = useRouter();
    return (

        <Pressable onPress={() => router.navigate('/characters')} >
            <View style={homeAdviceStyle.container} >
                <View style={homeAdviceStyle.imageContainer}>

                    <Image
                        source={{ uri: IMAGE_BASE + character.portrait_path }}
                        style={homeAdviceStyle.image}
                        contentFit="cover"
                    />
                </View>

                <View style={homeAdviceStyle.textContainer}>
                    
                    <Text style={homeAdviceStyle.text}>
                        <Text style={{ fontWeight: 800, fontSize: 20 }}>{limitText(character.name, 20)} </Text>
                    </Text>

                    <Text ellipsizeMode="tail" style={[homeAdviceStyle.text, { fontSize: 15, fontStyle: 'italic' }]}>
                        {limitText(character.occupation, 30)}
                    </Text>

                </View>


            </View>
        </Pressable>

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