import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export function InfoSection() {
    return (
        <View style={styles.container}>
            <View style={styles.financialInfo}>
                <View style={styles.infoRow}>
                    <Text style={styles.infoTitle}>Stake</Text>
                    <Text style={styles.infoValue}>20€</Text>
                </View>
                <View style={styles.infoRow}>
                    <Text style={styles.infoTitle}>Prize Pool</Text>
                    <Text style={styles.infoValue}>1140€</Text>
                </View>
                <View style={styles.infoRow}>
                    <Text style={styles.infoTitle}>Started</Text>
                    <Text style={styles.infoValue}>12 Jan 2024</Text>
                </View>
                <View style={styles.infoRow}>
                    <Text style={styles.infoTitle}>Join Before</Text>
                    <Text style={styles.infoValue}>13 Jan 2024</Text>
                </View>
                <View style={styles.infoRow}>
                    <Text style={styles.infoTitle}>Ends</Text>
                    <Text style={styles.infoValue}>15 Jan 2024</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
    },
    balanceAmount: {
        fontFamily: 'NeueMontreal-Medium',
        fontSize: 48,
        fontWeight: 'bold',
        color: 'black',
        alignSelf: 'center',
    },
    balanceLabel: {
        fontSize: 14,
        color: 'grey',
        alignSelf: 'center',
        marginBottom: 24,
    },
    financialInfo: {
        fontFamily: 'NeueMontreal-Medium',
        alignSelf: 'center',
        marginBottom: 24,
    },
    infoRow: {
        fontFamily: 'NeueMontreal-Medium',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 320,
        marginBottom: 8,
    },
    infoTitle: {
        fontFamily: 'NeueMontreal-Medium',
        fontSize: 18,
        color: 'grey',
    },
    infoValue: {
        fontFamily: 'NeueMontreal-Medium',
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 32,
    },
    button: {
        backgroundColor: '#4CAF50',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 30,
        marginHorizontal: 8,
    },
    buttonText: {
        fontFamily: 'NeueMontreal-Medium',
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    orText: {
        fontFamily: 'NeueMontreal-Regular',
        fontSize: 18,
        color: 'grey',
        marginHorizontal: 10,
    },
});
