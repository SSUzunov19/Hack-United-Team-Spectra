import React from 'react';
import { StyleSheet, Text } from 'react-native';

const AgreeText = ({ onPress }) => (
  <Text style={styles.termsText}>
    By registering, you agree to our{' '}
    <Text onPress={onPress} style={styles.signUpLink}>
      Terms of Use
    </Text>{' '}
    and{' '}
    <Text onPress={onPress} style={styles.signUpLink}>
      Privacy Policy
    </Text>
  </Text>
);

const styles = StyleSheet.create({
  termsText: {
    color: '#939393',
    textAlign: 'center',
    fontSize: 12,
    marginHorizontal: 30,
  },
  signUpLink: {
    color: '#00229A',
  },
});

export default AgreeText;
