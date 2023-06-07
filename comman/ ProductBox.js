import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import {color} from '../utils/theme';
import {PaddingBox, Styles} from '../utils/Styles';
import AntDesign from 'react-native-vector-icons/AntDesign';

const ProductBox = ({item}) => {
  return (
    <View style={styles.container}>
      <Image
        source={{uri: item.image}}
        style={styles.imageBox}
        resizeMode="stretch"
      />
      <PaddingBox style={5} />
      <Text numberOfLines={1} style={Styles.text14B}>
        {item.title}
      </Text>
      <View style={{...Styles.rowAlign, justifyContent: 'flex-start', alignItems:"center"}}>
        <Text style={Styles.text12L}>{item.category} </Text>
        <AntDesign name="star" size={12} color={color.red} />
        <Text style={Styles.text12L}> {item.rating.rate}</Text>
      </View>

      <Text style={Styles.text12M}>
        Rs. {item.price}{' '}
        <Text style={{textDecorationLine: 'line-through', ...Styles.text10L}}>
          Rs.({item.price})
        </Text>
      </Text>
      <Text style={{...Styles.text14M, color: color.red}}>( 43% OFF)</Text>
    </View>
  );
};

export default ProductBox;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 250,
    paddingHorizontal: 10,
    backgroundColor: color.white,
    elevation: 4,
    borderRadius: 5,
    marginVertical: 10,
    padding: 10,
  },
  imageBox: {
    width: '100%',
    height: 140,
  },
});
