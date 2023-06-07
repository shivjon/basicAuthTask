import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { scale, verticalScale } from 'react-native-size-matters'
import { Styles, VerticalBox } from '../utils/Styles'
import { color } from '../utils/theme'

const ButtomIcon = (props) => {
  return (
    <View style={[styles.conatiner, props.fill? {backgroundColor:color.red,borderWidth:0}: null ]}>
        {props.children}
        <VerticalBox style={5} />
      <Text style={[Styles.text14L,props.fill?{color:color.white, }:{}]}>{props.title}</Text>
    </View>
  )
}

export default ButtomIcon

const styles = StyleSheet.create({
    conatiner:{
        width:'45%',
        height:verticalScale(45),
        flexDirection:"row",
        borderWidth:1,
        paddingHorizontal:20,
        justifyContent:"center",
        alignItems:'center',
        borderRadius:5,
        borderColor:color.placeholder,
        backgroundColor:'#fff',
    },
})