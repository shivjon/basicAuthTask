import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import ProductBox from '../comman/ ProductBox'
import { widthPercentageToDP } from 'react-native-responsive-screen'
import { VerticalBox } from '../utils/Styles'

const ProjectList = ({data,onPress}) => {
    renderItem = ({item}) =>{
        return (
            <TouchableOpacity style={styles.box} onPress={()=>onPress(item)} activeOpacity={1}>
                <ProductBox item={item}  />
            </TouchableOpacity>
        )
    }
  return (
    <View style={styles.boxConatiner}>
      <FlatList 
        data={data}
        renderItem={renderItem}
        horizontal={true}
        keyExtractor={(item,index) => index.toString()}
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={()=><VerticalBox style={5} />}
      />
    </View>
  )
}
export default ProjectList

const styles = StyleSheet.create({
    box:{
        width:widthPercentageToDP(35),
        marginHorizontal:2,
    },
    boxConatiner:{
        paddingLeft:10,

    },
})