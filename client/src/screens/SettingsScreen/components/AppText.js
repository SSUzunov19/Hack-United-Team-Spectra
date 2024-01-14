import React from 'react';
import { Text, StyleSheet } from 'react-native';

const AccountText = () => <Text style={styles.text}>Application</Text>;

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    marginTop: 45,
    left: 30,
    top: 10,
  },
});

export default AccountText;
