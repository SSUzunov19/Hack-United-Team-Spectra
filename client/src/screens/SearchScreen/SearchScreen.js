import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Image, FlatList } from 'react-native';
import { Fontisto, MaterialCommunityIcons } from '@expo/vector-icons';

const challengeData = [
    {
        id: 'challenge-1',
        participants: 57,
        status: 'STARTED',
        title: 'Newbie Steps',
        description: 'Lightwork, no reaction. Test yourself.',
        price: '35€',
        imageUrl: require('../../assets/images/challenge-image.png'),
    },
    {
        id: 'challenge-2',
        participants: 57,
        status: 'STARTED',
        title: 'Newbie Steps',
        description: 'Lightwork, no reaction. Test yourself.',
        price: '35€',
        imageUrl: require('../../assets/images/challenge-image.png'),
    },
];

export function SearchScreen({ navigation }) {
    const typesOfChallenges = [
        "Easy Challenges",
        "Weekend Challenges",
        "Medium Challenges",
        "Hard Challenges",
        "Eliminate Challenges"
    ];

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Search by place or name..."
                />
                <TouchableOpacity
                    style={styles.mapButton}
                    onPress={() => navigation.navigate('Map')}
                >
                    <Fontisto name="map" size={30} color={"#000000"} />
                </TouchableOpacity>
            </View>

            <Text style={styles.subHeader}>Types of challenges</Text>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.typesContainer}
            >
                {typesOfChallenges.map((challenge, index) => (
                    <View key={`type-${index}`} style={styles.typeContainer}>
                        <View style={styles.typeCircle} />
                        <Text style={styles.typeText}>{challenge}</Text>
                    </View>
                ))}
            </ScrollView>

            <Text style={styles.subHeader}>Featured</Text>
            <FlatList
                horizontal
                data={challengeData}
                renderItem={renderChallengeCard}
                keyExtractor={item => item.id}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.featuredContainer}
            />
        </ScrollView>
    );
}

const renderChallengeCard = ({ item }) => (
    <View style={styles.card}>
        <Image source={item.imageUrl} style={styles.cardImage} />
        <View style={styles.participantCounter}>
            <MaterialCommunityIcons name="run" size={24} color="#000" />
            <Text style={styles.participantText}>{item.participants}</Text>
        </View>
        <View style={styles.labelContainer}>
            <Text style={styles.challengeStatus}>{item.status}</Text>
        </View>
        <View style={styles.cardContent}>
            <View style={styles.cardText}>
                <Text style={styles.challengeTitle}>{item.title}</Text>
                <Text style={styles.challengeDescription}>{item.description}</Text>
            </View>
            <Text style={styles.challengePrice}>{item.price}</Text>
        </View>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 50,
        paddingHorizontal: 16,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    searchInput: {
        flex: 1,
        marginHorizontal: 16,
        paddingHorizontal: 32,
        height: 60,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 30,
        fontSize: 16,
    },
    mapButton: {
        padding: 14,
    },
    typesContainer: {
        marginBottom: 16,
        marginHorizontal: 20
    },
    typeContainer: {
        alignItems: 'center',
        marginRight: 16,
    },
    typeCircle: {
        width: 100,
        height: 100,
        borderRadius: 60,
        backgroundColor: '#F0F1F6',
        marginBottom: 8,
    },
    typeText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'black',
    },
    subHeader: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 24,
        marginBottom: 16,
        paddingHorizontal: 16,
    },
    featuredContainer: {
        paddingHorizontal: 16,
    },
    card: {
        backgroundColor: '#F0F1F6',
        borderRadius: 12,
        marginBottom: 16,
        overflow: 'hidden',
        width: 300,
        marginLeft: 8,
    },
    cardImage: {
        width: '100%',
        height: 180,
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
        fontSize: 14,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 4,
    },
    challengeTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    challengeDescription: {
        fontSize: 14,
        color: 'grey',
    },
    challengePrice: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
    },
});
