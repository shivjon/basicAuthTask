import {StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {scale} from 'react-native-size-matters';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import {PaddingBox, Styles, VerticalBox} from '../utils/Styles';
import {color} from '../utils/theme';
import AntDesign from 'react-native-vector-icons/AntDesign';

const HeaderArrow = ({onPress}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.cricle} onPress={onPress}>
      <AntDesign name="arrowleft" size={24} color="black" />
      </TouchableOpacity>
      <View style={{flexDirection:"row",justifyContent:"center"}}>
        <View style={styles.cricle}>
        <Entypo name="heart-outlined" size={24} color="black" />
        </View>
        <VerticalBox style={10} />
        <View style={styles.cricle}>
        <FontAwesome name="shopping-basket" size={18} color="black" />
        </View>
      </View>
    </View>
  );
};

export default HeaderArrow;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    zIndex:100,
    flexDirection: 'row',
    width: '100%',
    height: scale(50),
    alignItems: 'center',
    paddingHorizontal: 15,
    justifyContent: 'space-between',
  },
  cricle:{
    width:30,
    height:30,
    borderRadius:20,
    borderWidth:1,
    justifyContent:"center",
    alignItems:"center"
  },
  searchBox: {
    height: scale(45),
    borderRadius: 10,
    backgroundColor: color.whiteLite,
    width: '80%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
});
