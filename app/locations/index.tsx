import { IMAGE_BASE } from '@/src/constants/urls';
import { useLocationsVM } from '@/src/viewmodels/LocationsVM';
import { useLocalSearchParams } from 'expo-router';
import React, { useEffect } from 'react';
import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    View
} from 'react-native';


type SearchParams = {
    id: string;

};

const LocationDetail = () => {

    const { loadLocationDetails, location } = useLocationsVM()
    const { id } = useLocalSearchParams<SearchParams>()

    useEffect(() => {
        if (!location) {
            loadLocationDetails(id)
        }
    }, [])


    return (
        <ScrollView style={styles.container}>
            <View style={styles.card}>
                <Image
                    source={{ uri: IMAGE_BASE + location?.image_path }}
                    style={styles.locationImage}
                    resizeMode="cover"
                />

                <Text style={styles.locationTitle}>{location?.name}</Text>

                <View style={styles.infoGrid}>
                    <View style={styles.infoItem}>
                        <Text style={styles.infoLabel}>Town:</Text>
                        <Text style={styles.infoValue}>{location?.town}</Text>
                    </View>
                    <View style={styles.infoItem}>
                        <Text style={styles.infoLabel}>Use:</Text>
                        <Text style={styles.infoValue}>{location?.use}</Text>
                    </View>
                </View>

                <View style={styles.detailsContainer}>
                    <Text style={styles.detailTitle}>Location Details</Text>
                    <Text style={styles.detailText}>{location?.description}</Text>
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
        borderRadius: 20,
        margin: 20,
        padding: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.3,
        shadowRadius: 15,
        elevation: 8,
    },
    locationImage: {
        width: 200,
        height: 200,
        borderRadius: 100,
        borderWidth: 5,
        borderColor: '#4CAF50',
        marginBottom: 20,
        marginTop: 10,
    },
    locationTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#4CAF50',
        marginBottom: 20,
        textAlign: 'center',
        textShadowColor: 'rgba(0, 0, 0, 0.2)',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 4,
    },
    infoGrid: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 15,
        width: '100%',
        marginBottom: 25,
    },
    infoItem: {
        backgroundColor: '#e8f5e9',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#4CAF50',
    },
    infoLabel: {
        fontWeight: 'bold',
        color: '#4CAF50',
        fontSize: 14,
        marginBottom: 5,
    },
    infoValue: {
        fontSize: 14,
        color: '#333',
        fontWeight: '600',
    },
    detailsContainer: {
        width: '100%',
        backgroundColor: '#e8f5e9',
        padding: 15,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#4CAF50',
    },
    detailTitle: {
        color: '#4CAF50',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
    },
    detailText: {
        fontSize: 14,
        color: '#333',
        lineHeight: 20,
        textAlign: 'justify',
    },
});

export default LocationDetail;