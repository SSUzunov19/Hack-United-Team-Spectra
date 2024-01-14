import React from 'react';
import { View, StyleSheet } from 'react-native';
import MainMapComponent from './components/MainMapComponent';

export function MainMapScreen({route}) {
  const { challenge } = route.params;
  return (
    <View style={styles.container}>
      <MainMapComponent challenge={challenge} />
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
