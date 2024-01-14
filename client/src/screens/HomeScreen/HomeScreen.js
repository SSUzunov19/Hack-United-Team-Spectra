import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Hello!</Text>
            <Text style={styles.name}>Galin Georgiev</Text>

            <Text style={styles.subtitle}>No Active Challenges</Text>

            <TouchableOpacity
                onPress={() => navigation.navigate('CreateChallengeScreen')}
                style={styles.challengeBox}>
                <AntDesign name="plus" size={24} color="black" style={styles.icon} />
                <View style={styles.challengeTextContainer}>
                    <Text style={styles.challengeTitle}>Host a challenge</Text>
                    <Text style={styles.challengeDescription}>Inspire Friends to Get Fit</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => navigation.navigate('Search')}
                style={styles.challengeBox}>
                <AntDesign name="plus" size={24} color="black" style={styles.icon} />
                <View style={styles.challengeTextContainer}>
                    <Text style={styles.challengeTitle}>Join a challenge</Text>
                    <Text style={styles.challengeDescription}>Explore existing challenges</Text>
                </View>
            </TouchableOpacity>

            <View style={styles.helpBox}>
                <Text style={styles.helpTitle}>Need help?</Text>
                <Text style={styles.helpDescription}>
                    Contact us about challenges, payments, missing activities, cheater reports or anything else.
                </Text>
                <TouchableOpacity style={styles.helpButton}>
                    <Text style={styles.helpButtonText}>Ask Spectra</Text>
                </TouchableOpacity>
            </View>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 50,
        paddingHorizontal: 20,
    },
    header: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 30,
    },
    subtitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 20,
    },
    helpBox: {
        backgroundColor: '#F4FFF6', // Adjust the color to match your design
        borderRadius: 20,
        padding: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginTop: 30, // Adjust spacing as needed
    },
    helpTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    helpDescription: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 20,
    },
    helpButton: {
        backgroundColor: 'black', // Adjust button color to match your design
        paddingHorizontal: 30,
        paddingVertical: 10,
        borderRadius: 25,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    helpButtonText: {
        color: '#FFF', // This is the text color
        fontSize: 18,
        fontWeight: 'bold',
    },
    text: {
        fontSize: 24,
    },
    challengeBox: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 16,
        paddingHorizontal: 20,
        borderWidth: 1,
        borderColor: 'transparent',
        borderRadius: 10,
        marginVertical: 8,
        borderStyle: 'dashed',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: 'lightgrey',
    },
    icon: {
        marginRight: 16,
        borderWidth: 1,
        borderColor: 'lightgrey',
        borderRadius: 5,
        borderStyle: 'dashed',
        padding: 16,
    },
    challengeTextContainer: {
        flex: 1,
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
});
