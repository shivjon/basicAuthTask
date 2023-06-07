import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import ProductBox from '../comman/ ProductBox'
import { widthPercentageToDP } from 'react-native-responsive-screen'
import { PaddingBox, VerticalBox } from '../utils/Styles'
import { color } from '../utils/theme'

const ProjectListHori = ({data, onPress}) => {
    renderItem = ({item}) =>{
        return (
            <TouchableOpacity style={styles.box}  onPress={()=>onPress(item)} activeOpacity={1}>
                <ProductBox item={item}  />
            </TouchableOpacity>
        )
    }
  return (
    <View style={styles.boxConatiner}>
      <FlatList 
        data={data}
        renderItem={renderItem}
        numColumns={2}
        scrollEnabled={false}
        columnWrapperStyle={{flexDirection:"row", justifyContent:"space-between"}}
        keyExtractor={(item,index) => index.toString()}
        showsHorizontalScrollIndicator={false}
        ListFooterComponent={()=><PaddingBox style={50} />}
      />
    </View>
  )
}
export default ProjectListHori

const styles = StyleSheet.create({
    box:{
        width:widthPercentageToDP(45),
          marginHorizontal:10,
    },
    boxConatiner:{
    },
})