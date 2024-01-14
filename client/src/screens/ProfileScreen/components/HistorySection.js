import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const challengeData = [
    {
        id: 'challenge-1',
        participants: 57,
        status: 'STARTED',
        title: 'Newbie Steps',
        description: 'Lightwork, no reaction. Test yourself.',
        price: '35€',
        imageUrl: require('../../../assets/images/challenge-image.png'),
    },
    {
        id: 'challenge-2',
        participants: 57,
        status: 'STARTED',
        title: 'Newbie Steps',
        description: 'Lightwork, no reaction. Test yourself.',
        price: '35€',
        imageUrl: require('../../../assets/images/challenge-image.png'),
    },
];

export function HistorySection() {
    return (
        <View style={styles.historyContainer}>
            <View style={styles.headerRow}>
                <Text style={styles.historyTitle}>History Challenges</Text>
                <TouchableOpacity onPress={() => { }} style={styles.viewAllButton}>
                    <Text style={styles.viewAllText}>view all</Text>
                </TouchableOpacity>
            </View>
            <ScrollView style={styles.scrollView}>
                {challengeData.map((challenge) => (
                    <View key={challenge.id} style={styles.card}>
                        <Image source={challenge.imageUrl} style={styles.cardImage} />
                        <View style={styles.participantCounter}>
                            <MaterialCommunityIcons name="run" size={24} color="#000" />
                            <Text style={styles.participantText}>{challenge.participants}</Text>
                        </View>
                        <View style={styles.labelContainer}>
                            <Text style={styles.challengeStatus}>{challenge.status}</Text>
                        </View>
                        <View style={styles.cardContent}>
                            <View style={styles.cardText}>
                                <Text style={styles.challengeTitle}>{challenge.title}</Text>
                                <Text style={styles.challengeDescription}>{challenge.description}</Text>
                            </View>
                            <Text style={styles.challengePrice}>{challenge.price}</Text>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    historyContainer: {
        backgroundColor: '#fff',
        paddingVertical: 8,
        paddingBottom: 116,
    },
    headerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingBottom: 16,
    },
    historyTitle: {
        fontFamily: 'NeueMontreal-Medium',
        fontSize: 24,
        fontWeight: 'bold',
    },
    viewAllButton: {},
    viewAllText: {
        fontFamily: 'NeueMontreal-Regular',
        fontSize: 16,
        color: '#8D8D8D',
        fontWeight: 'bold',
    },
    scrollView: {
        paddingHorizontal: 16,
    },
    card: {
        backgroundColor: '#F0F1F6',
        borderRadius: 8,
        marginBottom: 16,
        overflow: 'hidden',
    },
    cardImage: {
        width: '100%',
        height: 180, // Adjust the height as needed
        borderRadius: 12,
    },
    participantCounter: {
        position: 'absolute',
        top: 16,
        left: 16,
        flexDirection: 'row',
        backgroundColor: 'white',
        padding: 8,
        borderRadius: 16,
        alignItems: 'center',
    },
    labelContainer: {
        position: 'absolute',
        top: 120,
        left: 16,
        flexDirection: 'row',
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 16,
        alignItems: 'center',
    },
    participantText: {
        fontFamily: 'NeueMontreal-Medium',
        marginLeft: 8,
        color: '#000',
        fontSize: 16,
        fontWeight: 'bold',
    },
    statusLabel: {
        position: 'absolute',
        bottom: 16,
        left: 16,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        paddingVertical: 4,
        paddingHorizontal: 12,
        borderRadius: 16,
    },
    statusText: {
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: 'bold',
    },
    cardContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        padding: 8,
        backgroundColor: 'white',
    },
    cardText: {
        flex: 1,
    },
    challengeStatus: {
        fontFamily: 'NeueMontreal-Medium',
        fontSize: 14,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 4,
    },
    challengeTitle: {
        fontFamily: 'NeueMontreal-Medium',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    challengeDescription: {
        fontFamily: 'NeueMontreal-Regular',
        fontSize: 14,
        color: 'grey',
    },
    challengePrice: {
        fontFamily: 'NeueMontreal-Medium',
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
    },
});
