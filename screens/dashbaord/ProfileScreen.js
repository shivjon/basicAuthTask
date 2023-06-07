import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../../comman/Header';
import Button from '../../comman/Button';
import { color } from '../../utils/theme';

const ProfileScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header name={'Profile'} />
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.primary,
  },
});
