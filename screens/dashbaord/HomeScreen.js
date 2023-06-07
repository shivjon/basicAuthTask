import { Alert, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import Header from '../../comman/Header'
import { useSelector } from 'react-redux';
import { PaddingBox, Styles } from '../../utils/Styles';

const HomeScreen = (props) => {
  const user = useSelector(state => state.auth.user);
  useEffect(() => {
    
  }, [user]);
  return (
  <SafeAreaView>
    <Header name={'Home'} />
    <PaddingBox style={10} />
    <View style={styles.box}>
      <Text style={Styles.text16B}>
        Hii {user[0].name}
      </Text>
    </View>
 
  </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  box:{
    paddingHorizontal:10,
  },
})