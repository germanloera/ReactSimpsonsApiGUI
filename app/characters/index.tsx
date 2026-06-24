import { IMAGE_BASE } from '@/src/constants/urls';
import { useCharactersVM } from '@/src/viewmodels/CharactersVM';
import { Stack, useLocalSearchParams } from 'expo-router';
import React, { useEffect } from 'react';
import {
    ActivityIndicator,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    View
} from 'react-native';

type CharacterParams = {
    id: string;

};

export default function CharacterDetail() {
    const { isLoading, character, loadCharacterDetail } = useCharactersVM()
    const { id } = useLocalSearchParams<CharacterParams>()

    useEffect(() => {
        loadCharacterDetail(id)
    }, []);


    return (

        <View style={styles.container}>
            <Stack.Screen options={{ title: '', headerBackTitle: '', headerTintColor: '#000', headerStyle: { backgroundColor: '#fcf1c5' } }} />

            {isLoading &&
                <View style={styles.loadingItem}>

                    <ActivityIndicator size='large' />

                </View>
            }
            {!isLoading && <ScrollView style={styles.container}>


                <View style={styles.card}>
                    <Image
                        source={{ uri: IMAGE_BASE + character?.portrait_path }}
                        style={styles.portrait}
                        resizeMode="cover"
                    />

                    <Text style={styles.name}>{character?.name}</Text>

                    {character?.phrases && character?.phrases.length > 0 && <View style={styles.quoteContainer}>
                        <Text style={styles.quote}>
                            {character?.phrases[0]}
                        </Text>
                    </View>
                    }


                    <View style={styles.infoGrid}>
                        <View style={styles.infoContainer}>
                            <View style={styles.infoItem}>
                                <Text style={styles.infoLabel}>Age:</Text>
                                <Text style={styles.infoValue}>{character?.age ?? 'Unknown'}</Text>
                            </View>
                            <View style={styles.infoItem}>
                                <Text style={styles.infoLabel}>Gender:</Text>
                                <Text style={styles.infoValue}>{character?.gender ?? 'Unknown'}</Text>
                            </View>
                        </View>
                        <View style={styles.infoContainer}>
                            <View style={styles.infoItem}>
                                <Text style={styles.infoLabel}>Occupation:</Text>
                                <Text style={styles.infoValue}>{character?.occupation ?? 'Unknown'}</Text>
                            </View>
                            <View style={styles.infoItem}>
                                <Text style={styles.infoLabel}>Birthdate:</Text>
                                <Text style={styles.infoValue}>{character?.birthdate ?? 'Unknown'}</Text>
                            </View>
                        </View>
                    </View>

                    <View style={[
                        styles.status,
                        character?.status === 'Alive' ? styles.statusAlive : styles.statusDead
                    ]}>
                        <Text style={styles.statusText}>Status: {character?.status}</Text>
                    </View>


                    {character?.phrases && character?.phrases.length > 1 &&
                        <View style={styles.phrasesContainer}>
                            <Text style={styles.phrasesTitle}>Famous Phrases</Text>



                            <View style={styles.phrasesList}>
                                {character?.phrases.slice(1).map((phrase, index) => (
                                    <Text key={index} style={styles.phraseItem}>{phrase}</Text>
                                ))}
                            </View>
                        </View>
                    }


                </View>

            </ScrollView>
            }
        </View>


    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fef9cd',
    },
    card: {
        backgroundColor: '#fef9cd',
        padding: 20,
        alignItems: 'center',
    },
    portrait: {
        width: 200,
        height: 200,
        borderRadius: 100,
        borderWidth: 5,
        borderColor: '#ffd700',
        marginBottom: 20,
        marginTop: 10,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#ff6b35',
        marginBottom: 15,
        textAlign: 'center',
        textShadowColor: 'rgba(0, 0, 0, 0.2)',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 4,
    },

    infoGrid: {
        display: 'grid',
        gridTemplateColumns: '1fr 2fr',
        gap: 15,
        width: '100%',
        marginBottom: 25,
    },
    infoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    infoItem: {
        width: '48%',
        backgroundColor: '#ffebee',
        padding: 12,
        borderRadius: 10,
        alignItems: 'center',
        borderColor: '#ff6b35',
        borderWidth: 1

    },
    infoLabel: {
        fontWeight: 'bold',
        color: '#ff6b35',
        fontSize: 14,
        marginBottom: 5,
        
    },
    infoValue: {
        fontSize: 14,
        color: '#333',
    },
    status: {
        paddingVertical: 8,
        paddingHorizontal: 20,
        borderRadius: 20,
        marginBottom: 20,
        alignSelf: 'center',
    },
    statusAlive: {
        backgroundColor: '#98fb98',
    },
    statusDead: {
        backgroundColor: '#ffc0cb',
    },
    statusText: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    phrasesContainer: {
        width: '100%',
        marginBottom: 20,
       

    },
    phrasesTitle: {
        color: '#ff6b35',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 15,
    },
    phrasesList: {
        alignSelf: 'stretch',
        alignItems: 'center',


    },
    phraseItem: {
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 8,
        marginBottom: 8,
        fontSize: 14,
        color: '#333',
        borderWidth: 1,
        borderColor: '#ff6b35',
        borderLeftWidth: 4,
        paddingLeft: 12,
        width: '100%',
       
    },
    quoteContainer: {
        marginTop: 10,
        padding: 15,
        backgroundColor: '#fff8dc',
        borderRadius: 10,
        width: '100%',
        alignItems: 'center',
        marginBottom: 15,
        borderColor: '#ff6b35',
        borderWidth: 1
    },
    quote: {
        fontStyle: 'italic',
        textAlign: 'center',
        fontSize: 14,
        color: '#333',
    },

    loadingItem: {


        height: '100%',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center'

    },


});

