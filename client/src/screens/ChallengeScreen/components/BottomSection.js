import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

// import { pfp } from '../../../assets/images/spectra-icon.png';

export function BottomSection() {
    return (
        <View style={styles.bottomContainer}>
        <View style={styles.profileContainer}>
            <Image
                source={{ uri: 'https://media.discordapp.net/attachments/1192011345835601930/1196097670759071854/spectra-icon.png?ex=65b663c3&is=65a3eec3&hm=d136be7bbc7f5ae1790d2fcca8c2cbfbe3ed1b680c7a4dbce40855b5be6b3845&=&format=webp&quality=lossless&width=84&height=84' }}
                style={styles.profileImage}
            />
            <View style={styles.textContainer}>
                <Text style={styles.hostText}>HOSTED BY</Text>
                <Text style={styles.hosteeText}>Spectra</Text>
            </View>
        </View>
        <TouchableOpacity style={styles.inviteButton}>
            <Text style={styles.buttonText}>Join Challenge</Text>
        </TouchableOpacity>
    </View>
    );
}

const styles = StyleSheet.create({
    bottomContainer: {
        marginTop: 10,
        alignSelf: 'center',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: 10,
        // backgroundColor: '#fff', // or any color you want for the background
      },
    profileContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    textContainer: {
        marginLeft: 15,
    },
    hostText: {
        fontFamily: 'NeueMontreal-Regular',
        fontSize: 12,
    },
    hosteeText: {
        fontFamily: 'NeueMontreal-Medium',
        fontSize: 18,
    },
    profileImage: {
        width: 50,
        height: 50,
        backgroundColor: 'red',
        borderRadius: 100,
    },
    inviteButton: {
        backgroundColor: '#4CAF50',
        padding: 15,
        borderRadius: 25,
        width: 175,
        alignItems: 'center',
    },
    buttonText: {
        fontFamily: 'NeueMontreal-Medium',
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});
