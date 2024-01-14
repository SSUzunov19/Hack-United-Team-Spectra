import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const LogOut = ({ onPress }) => (
  <View style={styles.container}>
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.clickableText}>Sign out</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    height: 52,
    width: '90%',
    marginTop: 180,
    marginBottom: 100,
    borderRadius: 20,
    backgroundColor: '#FFCCCC',
    justifyContent: 'center',
    alignItems: 'center',
  },
  clickableText: {
    color: '#C42400',
    fontSize: 16,
  },
});

export default LogOut;
