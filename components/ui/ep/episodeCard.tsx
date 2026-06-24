import { IMAGE_BASE } from "@/src/constants/urls";
import { Episode } from "@/src/models/episode";
import { Location } from "@/src/models/locations";
import { limitText } from "@/src/utils/StringFunctions";
import { ImageBackground } from "expo-image";
import { useRouter } from "expo-router";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import SeasonPill from "./seasonPill";


interface EpisodeProp {
    ep?: Episode
    loc?: Location
}




export default function CardEpisode({ ep, loc }: EpisodeProp) {
    const router = useRouter();

    const image = ep?.image_path ?? loc?.image_path ?? ''
    const name = ep?.name ?? loc?.name ?? ''
    const summary = ep?.synopsis ?? loc?.use ?? ''
    const town = loc?.town ?? `C${ep?.episode_number} S${ep?.season}`
    const destination = ep == null ? '/locations' : '/episodes'
    const id = ep?.id ?? loc?.id ?? 0


    return (
        <Pressable onPress={() => router.push({
            pathname: destination,
            params: {id: id}
         })} >
            <View style={episodeCardStyle.container}>
                <ImageBackground
                    source={{ uri: IMAGE_BASE + image }}
                    style={episodeCardStyle.imageContainer}
                    contentFit="cover"
                />

                <View style={episodeCardStyle.textContainer}>

                    <View style={episodeCardStyle.title}>
                        <Text style={episodeCardStyle.text}>
                            <Text style={{ fontSize: 20, fontWeight: 800 }}>{limitText(name, 25)}</Text>
                        </Text>


                    </View>

                    <SeasonPill text={limitText(town, 15)} />

                    <Text style={[episodeCardStyle.text, { fontSize: 15, fontStyle: 'italic' }]}>
                        {limitText(summary, 50)}
                    </Text>

                </View>


            </View>
        </Pressable>
    )


}

const episodeCardStyle = StyleSheet.create({
    container: {
        height: 300,
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