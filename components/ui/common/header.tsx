import { StyleSheet, Text, View } from "react-native";


export default function SimpsonHeader() {

    return (
        <View style={header.container}>

            <View style={header.titleContainer}>
                <Text style={ header.titleText }>
                    🍩 The Simpsons
                </Text>

                <Text style={header.pill}>
                    API
                </Text>
            </View>
            <Text style={header.bottomText}>
                Characters, episodes, and places from Springfield
            </Text>


        </View>

    )



}

const header = StyleSheet.create({
    container: {
        height: 150,
        alignSelf: 'stretch',
        
    },

    titleContainer: {
        flexDirection: 'row',
        justifyContent:'center'
    },

    titleText: {
        fontWeight: 700,
        fontSize: 25,
        alignContent: 'center'

    },
    pill: {
        fontWeight: 800,
        fontSize: 15,
        backgroundColor: '#f7ce55',
        borderRadius: 10,
        paddingHorizontal: 10,
        marginVertical: 5,
        marginStart: 10,
        alignContent: 'center',
        color: '#2e3b6a'


    },
    bottomText: {}





})