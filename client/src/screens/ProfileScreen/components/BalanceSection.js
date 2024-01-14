import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export function BalanceSection() {
    return (
        <View style={styles.container}>
            <Text style={styles.balanceAmount}>23,00€</Text>
            <Text style={styles.balanceLabel}>available balance</Text>

            <View style={styles.financialInfo}>
                <View style={styles.infoRow}>
                    <Text style={styles.infoTitle}>Joined</Text>
                    <Text style={styles.infoValue}>12 Jan 2024</Text>
                </View>
                <View style={styles.infoRow}>
                    <Text style={styles.infoTitle}>Withdrawable</Text>
                    <Text style={styles.infoValue}>18.00€</Text>
                </View>
                <View style={styles.infoRow}>
                    <Text style={styles.infoTitle}>Total won</Text>
                    <Text style={styles.infoValue}>13.00€</Text>
                </View>
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Withdraw</Text>
                </TouchableOpacity>
                <Text style={styles.orText}>or</Text>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Add Funds</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 32,
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
        width: 280,
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
