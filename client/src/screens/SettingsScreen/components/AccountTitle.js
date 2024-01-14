import React from 'react';
import { Text, StyleSheet } from 'react-native';

const AccountTitle = () => <Text style={styles.title}>Settings</Text>;

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    alignSelf: 'center',
    marginTop: 56,
  },
});

export default AccountTitle;
