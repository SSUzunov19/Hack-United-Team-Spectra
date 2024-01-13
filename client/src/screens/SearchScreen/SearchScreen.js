import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Fontisto } from '@expo/vector-icons';

export function SearchScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.settingsButton}
                onPress={() => navigation.navigate('Map')}
            >
                <Fontisto name={"map"} size={28} color={"#000000"} />
            </TouchableOpacity>

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
