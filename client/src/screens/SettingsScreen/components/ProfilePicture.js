import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const Profile = () => (
  <View style={styles.container}>
    <View style={styles.circularImageContainer}>
      <Image
        style={styles.circularImage}
        source={require('../../../assets/images/profile-pic.png')}
      />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 72,
  },
  circularImageContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    overflow: 'hidden',
  },
  circularImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});

export default Profile;
