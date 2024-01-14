import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import * as Blur from '@react-native-community/blur';

export function TopBar() {
    return (
        <View style={styles.topBar}>
            <View style={styles.gradient}>
                {/* <View style={styles.container}>

                </View> */}
            </View>
        </View>
    );

}

const styles = StyleSheet.create({
    topBar: {
        height: '15%',
        width: '100%',
        marginTop: '15%',
        // backgroundColor: '#0000ff',
    },
    gradient: {
        height: 75,
        width: 75,
        borderRadius: 100,
        marginLeft: 25,
        marginTop: 'auto',
        marginBottom: 'auto',
        backgroundColor: '#00ff00',
        
    },
})