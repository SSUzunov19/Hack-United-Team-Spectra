import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export function SearchScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Search Screen</Text>
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
