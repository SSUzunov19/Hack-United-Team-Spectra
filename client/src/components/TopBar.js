import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Fontisto } from '@expo/vector-icons';

export function TopBar({ additionalMargin }) {
    // Original styles
    const originalStyles = styles.header;

    // Create a new style object with additional margin
    const modifiedStyles = { ...originalStyles, marginBottom: additionalMargin };

    return (
        <View style={modifiedStyles}>
            <TextInput
                style={styles.searchInput}
                placeholder="Search by place or name..."
            />
            <TouchableOpacity
                style={styles.mapButton}
                onPress={() => navigation.navigate('OverviewMap')}
            >
                <Fontisto name="map" size={30} color={"#000000"} />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
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
});
