import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {color} from '../../utils/theme';
import Header from '../../comman/Header';

const SettingScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header name={'Setting'} />
    </SafeAreaView>
  );
};

export default SettingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.primary,
  },
});
