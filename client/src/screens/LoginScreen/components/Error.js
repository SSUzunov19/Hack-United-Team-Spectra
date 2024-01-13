import React from 'react';
import { Text, StyleSheet } from 'react-native';

const ErrorComponent = ({ error }) => {
  if (!error) {
    return null;
  }

  return (
    <Text style={styles.errorText}>
      Sorry, your password is incorrect. Please check your password again.
    </Text>
  );
};

const styles = StyleSheet.create({
  errorText: {
    color: '#58CC02',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 30,
  },
});

export default ErrorComponent;
