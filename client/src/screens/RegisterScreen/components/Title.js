import React from 'react';
import { Text, StyleSheet } from 'react-native';

const Title = () => <Text style={styles.title}> Spectra </Text>;

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Roboto',
    fontSize: 64,
    alignSelf: 'center',
    marginBottom: 20,
    color: '#58CC02',
  },
});

export default Title;
