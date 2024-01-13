import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export function HomeScreen() {
    return (
        <View style={styles.container}>
            {/* <Image source={require('../../assets/level-image.png')} /> */}
            <Text style={styles.text}>Home Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    text: {
        fontSize: 24,
    },
});
