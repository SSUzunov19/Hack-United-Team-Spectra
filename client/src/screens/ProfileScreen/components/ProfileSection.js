import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export function ProfileSection({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.header}>Profile</Text>
                <TouchableOpacity
                    style={styles.settingsButton}
                    onPress={() => navigation.navigate('Settings')}
                >
                    <Ionicons name="settings" size={24} color="black" />
                </TouchableOpacity>
            </View>
            <Image
                source={require('../../../assets/images/profile-pic.png')}
                style={styles.profileImage}
            />
            <Text style={styles.name}>Galin Georgiev</Text>
            <Text style={styles.socialHandles}>@galoinsta | @galotwitter</Text>
            <Text style={styles.description}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.
                Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis
                ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 5,
        backgroundColor: '#FBFFFC',
        borderRadius: 10,
        marginBottom: 22,
        paddingTop: 32,
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        marginBottom: 16,
    },

    separator: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 5,
        backgroundColor: '#FBFFFC',
        borderRadius: 10,
        marginBottom: 22,
    },
    settingsButton: {
        // Add any additional styles for the button if necessary
    },
    header: {
        fontSize: 26,
        fontWeight: 'bold',
        color: 'black',
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 60,
        alignSelf: 'center',
        marginBottom: 8,
    },
    name: {
        fontSize: 22,
        fontWeight: 'bold',
        alignSelf: 'center',
        marginBottom: 4,
    },
    socialHandles: {
        fontSize: 16,
        color: 'grey',
        alignSelf: 'center',
        marginBottom: 16,
    },
    description: {
        fontSize: 14,
        paddingHorizontal: 32,
        color: 'grey',
        textAlign: 'center',
        marginBottom: 32,
    },
});
