import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Button from '../../comman/Button';
import {color} from '../../utils/theme';
import Header from '../../comman/Header';

const LogoutScreen = props => {
  const onLogout = () => {
    props.navigation.navigate('LoginScreen');
  };
  return (
    <SafeAreaView style={styles.container}>
      <Header name={'Logout'} />
      <View style={styles.box}>
        <Button
          name={'Logout'}
          onPress={() => {
            onLogout();
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default LogoutScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.primary,
  },
  box: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});
