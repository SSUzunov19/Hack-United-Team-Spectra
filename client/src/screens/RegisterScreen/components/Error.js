import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { isValidEmail } from './EmailInput';
import { isValidFullName } from './FullNameInput';
import { isValidUsername } from './UsernameInput';
import { isValidPassword } from './PasswordInput';

const ErrorComponent = ({ email, username, fullName, password }) => {
  if (!isValidEmail(email)) {
    return (
      <Text style={styles.errorText}>Please enter a valid email address.</Text>
    );
  } else if (!isValidFullName(fullName)) {
    return (
      <Text style={styles.errorText}>
        Full name must contain at least two words.
      </Text>
    );
  } else if (!isValidUsername(username)) {
    return (
      <Text style={styles.errorText}>
        Username must be 4-20 characters and can include letters, numbers, underscores, or hyphens.
      </Text>
    );
  } else if (!isValidPassword(password)) {
    return (
      <Text style={styles.errorText}>
        Password must be at least 8 characters and include uppercase letters, lowercase letters, numbers, and special characters.
      </Text>
    );
  } else {
    return null;
  }
};

const styles = StyleSheet.create({
  errorText: {
    color: '#FF4242',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 30,
  },
});

export default ErrorComponent;
