import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const SignUpText = ({ onPress }) => (
  <View style={styles.container}>
    <View style={styles.lineContainer}>
      <View style={styles.lineLeft}></View>
      <Text style={styles.orText}>OR</Text>
      <View style={styles.lineRight}></View>
    </View>
    <Text style={styles.noAccountText}>
      Don't have an account?{' '}
      <Text onPress={onPress} style={styles.signUpLink}>
        Register
      </Text>
    </Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    alignItems: 'center',
  },
  lineContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  lineLeft: {
    borderBottomWidth: 1,
    borderBottomColor: '#E3E3E3',
    width: 150,
    marginRight: 10,
  },
  lineRight: {
    borderBottomWidth: 1,
    borderBottomColor: '#E3E3E3',
    width: 150,
    marginLeft: 10,
  },
  orText: {
    fontSize: 16,
    color: '#8C8C8C',
  },
  noAccountText: {
    fontSize: 18,
  },
  signUpLink: {
    color: '#007BFF',
    fontSize: 18,
    textDecorationLine: 'underline',
  },
});

export default SignUpText;
