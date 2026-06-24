import { IMAGE_BASE } from '@/src/constants/urls';
import { useCharactersVM } from '@/src/viewmodels/CharactersVM';
import { useLocalSearchParams } from 'expo-router';
import React, { useEffect } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    ScrollView
} from 'react-native';

type CharacterParams = {
    id: string;

};

export default function CharacterDetail() {
    const { character, loadCharacterDetail } = useCharactersVM()
    const { id } = useLocalSearchParams < CharacterParams>()

    useEffect(() => { 
        loadCharacterDetail(id)
    }, []);


    const characterData = {
        id: 1,
        age: 39,
        birthdate: "1956-05-12",
        gender: "Male",
        name: "Homer Simpson",
        occupation: "Safety Inspector",
        portrait_path: "/character/1.webp",
        phrases: [
            "Doh!",
            "Why you little...!",
            "Woo-hoo!",
            "Mmm... (food)... *drooling*",
            "Stupid Flanders!",
            "Shut up Flanders!",
            "AAAAGHH!",
            "Lisa, knock off that racket!",
            "Uh oh, the boss.",
            "Let's all go out for frosty chocolate milkshakes!",
            "Whatever, I'll be at Moes.",
            "I am evil Ho-mer! I am evil Ho-mer! I am evil Ho-mer!",
            "Better them than me.",
            "Better them than me... Oh wait, that was me.",
            "Marge, my face hurts again!"
        ],
        status: "Alive"
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.card}>
                <Image
                    source={{ uri: IMAGE_BASE + character?.portrait_path }}
                    style={styles.portrait}
                    resizeMode="cover"
                />

                <Text style={styles.name}>{character?.name}</Text>

                <View style={styles.quoteContainer}>
                    <Text style={styles.quote}>
                        { character?.phrases[0] }
                    </Text>
                </View>

                <View style={styles.infoGrid}>
                    <View style={styles.infoItem}>
                        <Text style={styles.infoLabel}>Age:</Text>
                        <Text style={styles.infoValue}>{character?.age}</Text>
                    </View>
                    <View style={styles.infoItem}>
                        <Text style={styles.infoLabel}>Gender:</Text>
                        <Text style={styles.infoValue}>{character?.gender}</Text>
                    </View>
                    <View style={styles.infoItem}>
                        <Text style={styles.infoLabel}>Occupation:</Text>
                        <Text style={styles.infoValue}>{character?.occupation}</Text>
                    </View>
                    <View style={styles.infoItem}>
                        <Text style={styles.infoLabel}>Birthdate:</Text>
                        <Text style={styles.infoValue}>{character?.birthdate}</Text>
                    </View>
                </View>

                <View style={[
                    styles.status,
                    character?.status === 'Alive' ? styles.statusAlive : styles.statusDead
                ]}>
                    <Text style={styles.statusText}>Status: {character?.status}</Text>
                </View>

                

                <View style={styles.phrasesContainer}>
                    <Text style={styles.phrasesTitle}>Famous Phrases</Text>

                    

                    <View style={styles.phrasesList}>
                        {character?.phrases.slice(1).map((phrase, index) => (
                            <Text key={index} style={styles.phraseItem}>{phrase}</Text>
                        ))}
                    </View>
                </View>

                
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    card: {
        backgroundColor: '#fff',
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
    infoItem: {
        backgroundColor: '#ffebee',
        padding: 12,
        borderRadius: 10,
        alignItems: 'center',
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
    },
    quote: {
        fontStyle: 'italic',
        textAlign: 'center',
        fontSize: 14,
        color: '#333',
    },
});

