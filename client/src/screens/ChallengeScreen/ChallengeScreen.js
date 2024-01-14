import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    TouchableOpacity,
    ScrollView
} from 'react-native';

export function ChallengeScreen({ route, navigation }) {
    const { challengeId } = route.params;

    return (
        <ScrollView style={styles.container}>
            <ImageBackground
                source={require('../../assets/images/challenge-image.png')}
                style={styles.image}
            >
                <View style={styles.dateContainer}>
                    <Text style={styles.dateText}>12 Jan 2024 - 15 Jan 2024</Text>
                    <Text style={styles.membersText}>57 members</Text>
                </View>
            </ImageBackground>

            <Text style={styles.title}>Newbie Steps</Text>
            <Text style={styles.description}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.
            </Text>

            <Text style={styles.goal}>10,000 total steps</Text>

            <View style={styles.detailsContainer}>
                <Text style={styles.detailItem}>Stake: 20€</Text>
                <Text style={styles.detailItem}>Prize Pool: 1140€</Text>
                <Text style={styles.detailItem}>Started: 12 Jan 2024</Text>
                <Text style={styles.detailItem}>Join before: 13 Jan 2024</Text>
                <Text style={styles.detailItem}>Ends: 14 Jan 2024</Text>
            </View>

            <View style={styles.hostContainer}>
                <Text style={styles.hostText}>HOSTED BY Spectra</Text>
                <TouchableOpacity style={styles.joinButton}>
                    <Text style={styles.joinButtonText}>Join Challenge</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.inviteButton}>
                <Text style={styles.inviteButtonText}>Invite Friends</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        width: '100%',
        height: 200, // Adjust as needed
        position: 'relative',
    },
    dateContainer: {
        position: 'absolute',
        top: 10,
        left: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        padding: 5,
        borderRadius: 5,
    },
    dateText: {
        color: '#000',
        fontWeight: 'bold',
    },
    membersText: {
        position: 'absolute',
        right: 10,
        top: 10,
        color: '#000',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        padding: 5,
        borderRadius: 5,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 10,
    },
    description: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 20,
    },
    goal: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 10,
    },
    detailsContainer: {
        // Add styles for the details container
    },
    detailItem: {
        fontSize: 16,
        textAlign: 'center',
        marginVertical: 5,
    },
    hostContainer: {
        alignItems: 'center',
        marginVertical: 10,
    },
    hostText: {
        fontSize: 16,
        marginBottom: 10,
    },
    joinButton: {
        backgroundColor: '#4CAF50',
        padding: 15,
        borderRadius: 25,
        width: '80%',
        alignItems: 'center',
    },
    joinButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    inviteButton: {
        backgroundColor: '#4CAF50',
        padding: 15,
        borderRadius: 25,
        width: '80%',
        alignItems: 'center',
        alignSelf: 'center',
        marginBottom: 20,
    },
    inviteButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});
