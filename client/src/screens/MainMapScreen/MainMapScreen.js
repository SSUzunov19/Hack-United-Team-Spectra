import React from 'react';
import { View, StyleSheet } from 'react-native';
import MainMapComponent from './components/MainMapComponent';

export function MainMapScreen({locationId}) {
  return (
    <View style={styles.container}>
      <MainMapComponent locationId={locationId} />
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
