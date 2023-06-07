import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {scale} from 'react-native-size-matters';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import {PaddingBox, Styles, VerticalBox} from '../utils/Styles';
import {color} from '../utils/theme';

const Header = ({name, back}) => {
  return (
    <View style={styles.container}>
        <Text style={Styles.text16B}>
          {name}
        </Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    height: scale(50),
    alignItems: 'center',
    backgroundColor:color.white,
    paddingHorizontal: 15,
    justifyContent:"space-between"
  },
  searchBox:{
    height:scale(45),
    borderRadius:10,
    backgroundColor:color.whiteLite,
    width:"80%",
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
    paddingHorizontal:10,
  },
});
