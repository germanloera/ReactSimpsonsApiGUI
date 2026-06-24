import { IMAGE_BASE } from '@/src/constants/urls';
import { useEpisodesVM } from '@/src/viewmodels/EpisodesVM';
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

type LocationParams = {
    id: string;

};

const EpisodeCard = () => {

    const { episode, loadEpisode, isLoading } = useEpisodesVM()
    const { id } = useLocalSearchParams<LocationParams>()


    useEffect(() => {
        loadEpisode(id)

    }, [])



    return (
        <View style={styles.container}>
            <Stack.Screen options={{ title: '' , headerBackTitle: '',  headerTintColor: '#000', headerStyle: { backgroundColor: '#fcf1c5'} }} />
            {isLoading &&
                <View style={styles.loadingItem}>

                    <ActivityIndicator size='large' />

                </View>
            }
            {!isLoading && <ScrollView style={styles.container}>
                <View style={styles.card}>
                    <Image
                        source={{ uri: IMAGE_BASE + episode?.image_path }}
                        style={styles.episodeImage}
                        resizeMode="cover"
                    />

                    <Text style={styles.episodeTitle}>{episode?.name}</Text>

                    <View style={styles.infoGrid}>
                        <View style={styles.infoItem}>
                            <Text style={styles.infoLabel}>Season:</Text>
                            <Text style={styles.infoValue}>{episode?.season}</Text>
                        </View>
                        <View style={styles.infoItem}>
                            <Text style={styles.infoLabel}>Episode:</Text>
                            <Text style={styles.infoValue}>{episode?.episode_number}</Text>
                        </View>
                        <View style={styles.infoItem}>
                            <Text style={styles.infoLabel}>Air Date:</Text>
                            <Text style={styles.infoValue}>{episode?.airdate}</Text>
                        </View>
                    </View>

                    <View style={styles.synopsisContainer}>
                        <Text style={styles.synopsisTitle}>Synopsis</Text>
                        <Text style={styles.synopsisText}>{episode?.synopsis}</Text>
                    </View>
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
        borderRadius: 20,
        margin: 10,
        padding: 20,
        alignItems: 'center',
    },
    episodeImage: {
        width: '100%',
        height: 300,
        borderRadius: 10,
        borderWidth: 5,
        borderColor: '#ff6b35',
        marginBottom: 20,
        marginTop: 10,
    },
    episodeTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#ff6b35',
        marginBottom: 20,
        textAlign: 'center',
        textShadowColor: 'rgba(0, 0, 0, 0.2)',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 4,
    },
    infoGrid: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        gap: 15,
        width: '100%',
        marginBottom: 25,
    },
    infoItem: {
        backgroundColor: '#f8f9fa',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ff6b35',
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
        fontWeight: '600',
    },
    synopsisContainer: {
        width: '100%',
        backgroundColor: '#fff8dc',
        padding: 15,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ffd700',
    },
    synopsisTitle: {
        color: '#ff6b35',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
    },
    synopsisText: {
        fontSize: 14,
        color: '#333',
        lineHeight: 20,
        textAlign: 'justify',
    },

    loadingItem: {


        height: '100%',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center'

    },
});

export default EpisodeCard;