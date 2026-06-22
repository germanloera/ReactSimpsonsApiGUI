import React from "react";
import { StyleSheet, Text, View } from "react-native";
import SeasonPill from "./seasonPill";
import { Episode } from "@/src/models/episode";
import { ImageBackground } from "expo-image";
import { IMAGE_BASE } from "@/src/constants/urls";
import { limitText } from "@/src/utils/StringFunctions";


interface EpisodeProp { 
    ep: Episode
}

export default function CardEpisode({ ep }: EpisodeProp) {

    return (
        <View style={episodeCardStyle.container}>
            <ImageBackground
                 source={{ uri : IMAGE_BASE + ep.image_path}}
             style={episodeCardStyle.imageContainer}
                 contentFit="cover"
             />

            <View style={episodeCardStyle.textContainer}>

                <View style={episodeCardStyle.title}>
                    <Text style={episodeCardStyle.text}>
                        <Text style={{ fontSize: 20, fontWeight: 800 }}>{ limitText(ep.name, 20) }</Text>
                    </Text>
                    <SeasonPill c={`${ep.episode_number}`} s={`${ep.season}`} />

                </View>

                <Text style={[episodeCardStyle.text, { fontSize: 15, fontStyle: 'italic' }]}>
                    {limitText(ep.synopsis, 50)}
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
    },

    title: {

        flexDirection: 'row',
        alignSelf: 'stretch',
        justifyContent: 'space-between',
        paddingEnd: 10,
        alignItems: 'center'
    }


});