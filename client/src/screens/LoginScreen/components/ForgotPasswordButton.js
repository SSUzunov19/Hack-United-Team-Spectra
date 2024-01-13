import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const ForgotPasswordButton = ({ onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.forgotPasswordButton}>
    <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  forgotPasswordButton: {
    alignSelf: 'flex-end',
  },
  forgotPasswordText: {
    color: '#58CC02',
    fontSize: 16,
    marginBottom: 20,
    fontWeight: 'bold',
  },
});

export default ForgotPasswordButton;
