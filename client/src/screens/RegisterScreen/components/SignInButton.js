import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const LoginButton = ({ onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.loginButton}>
    <Text style={styles.loginText}>Register</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  loginButton: {
    backgroundColor: '#58CC02',
    height: 50,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  loginText: {
    color: '#FFFFFF',
    fontSize: 18,
  },
});

export default LoginButton;
