import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Styles } from '../utils/Styles'
import { scale, verticalScale } from 'react-native-size-matters'
import { color } from '../utils/theme'

const Button = ({name,onPress,}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={{...Styles.text16B, color:color.white}}>{name}</Text>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
    container:{
        paddingHorizontal:scale(30),
        paddingVertical:verticalScale(10),
        borderWidth:2,
        borderColor:color.white,
        alignItems:'center',
        justifyContent:'center', 
        borderRadius:30,       
    },
})