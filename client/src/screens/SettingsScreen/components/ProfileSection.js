import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export function ProfileSection() {
    return (
        <View>
            {/* Profile Section */}
            <View style={styles.separator}>
                <Text style={styles.header}>Profile</Text>
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
        </View>
    );
}

const styles = StyleSheet.create({
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
    header: {
        fontSize: 26,
        fontWeight: 'bold',
        color: 'black',
        alignSelf: 'center',
        marginTop: 32,
        marginBottom: 16,
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
