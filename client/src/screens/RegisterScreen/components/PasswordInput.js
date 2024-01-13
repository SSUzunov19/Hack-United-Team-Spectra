import React from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';

const PasswordInput = ({
  value,
  onChangeText,
  secureTextEntry,
  onToggleVisibility,
}) => (
  <View style={styles.inputContainer}>
    <TextInput
      placeholder="Password"
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
      style={styles.inputPass}
    />
    <TouchableOpacity onPress={onToggleVisibility} style={styles.eyeIcon}>
      <Ionicons
        name={secureTextEntry ? 'eye-off' : 'eye'}
        size={24}
        color="#58CC02"
      />
    </TouchableOpacity>
    {!!value && (
      <Octicons
        style={styles.circle}
        name={isValidPassword(value) ? 'check-circle' : 'x-circle'}
        size={24}
        color={isValidPassword(value) ? '#58CC02' : 'red'}
      />
    )}
  </View>
);

export const isValidPassword = (password) => {
  const minLength = 8;
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumbers = /\d/.test(password);
  const hasSpecialChars = /[^A-Za-z0-9]/.test(password);

  return (
    password.length >= minLength &&
    hasUpperCase &&
    hasLowerCase &&
    hasNumbers &&
    hasSpecialChars
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  inputPass: {
    flex: 1,
    height: 50,
    borderColor: '#E4E4E4',
    backgroundColor: '#FAFAFA',
    borderWidth: 1,
    paddingLeft: 18,
    paddingRight: 40,
    borderRadius: 6,
  },
  eyeIcon: {
    position: 'absolute',
    right: 10,
    padding: 8,
    height: 50,
    justifyContent: 'center',
  },
  circle: {
    position: 'absolute',
    right: 45,
    padding: 8,
    justifyContent: 'center',
  },
});

export default PasswordInput;
