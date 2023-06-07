import { StyleSheet, PixelRatio, View} from 'react-native';
import { color } from './theme';
import { scale } from 'react-native-size-matters';

export const VerticalBox = ({style}) => {
    return (
        <View style={{paddingHorizontal:style ||10}}>
        
        </View>
    )
}

export const PaddingBox = ({style}) => {
    return (
        <View style={{height:style || 20}}>
        
        </View>
    )
}



export const Styles = StyleSheet.create({
        container:{
                flex:1,
                backgroundColor:color.white
        },
        line:{
            width:"100%",
            height:1,
            backgroundColor:color.placeholder,
        },
        rowBitween:{
            flexDirection:"row",
            justifyContent:"space-between",
            alignItems:'center',
        },
        rowAlign:{
            flexDirection:"row",
            justifyContent:'center',
            alignItems:'center',
        },
        shadow:{
            shadowColor: '#171717',
            shadowOffset: {width: -2, height: 4},
            shadowOpacity: 0.2,
            shadowRadius: 3,
            elevation:5,
        },
        textInput:{
            padding:0,
            borderBottomWidth:2,
            borderColor:color.white,
            width:"100%",
            letterSpacing:.5,
            height:scale(40),
        },
        cardInput:{
            width:'90%',
            alignSelf:"center",
        },
        text12L: {
            fontFamily:"Poppins-Light", 
            fontSize: 12/PixelRatio.getFontScale(),
            color: color.black
        },
        text12SB: {
            fontFamily: "Poppins-SemiBold",
            fontSize: 12/PixelRatio.getFontScale(),
            color: color.black
        },
        text12M: {
            fontFamily: "Poppins-Medium",
            fontSize: 12/PixelRatio.getFontScale(),
            color: color.black
        },
        text12RCGM: {
            fontFamily: "Poppins-Regular",
            fontSize: 12/PixelRatio.getFontScale(),
            color: color.greyMedium,
        },
        text12R: {
            fontFamily: "Poppins-Regular",
            fontSize: 12/PixelRatio.getFontScale(),
            color: color.black
        },
        text9R: {
            fontFamily: "Poppins-Regular",
            fontSize: 9/PixelRatio.getFontScale(),
            color: color.black
        },
        text8R: {
            fontFamily: "Poppins-Regular",
            fontSize: 8/PixelRatio.getFontScale(),
            color: color.black
        },
        text18SN: {
            fontFamily: "Poppins-SemiBold",
            fontSize: 18/PixelRatio.getFontScale(),
            color: color.black
        },
        text14L: {
            fontFamily:"Poppins-Light", 
            fontSize: 14/PixelRatio.getFontScale(),
        },
        text14LR: {
            fontFamily: "Poppins-Light",
            fontSize: 14/PixelRatio.getFontScale(),
            
            color: color.red,
            paddingHorizontal: 5,
            paddingTop: 2
        },
        text14SB: {
            fontFamily: "Poppins-SemiBold",
            fontSize: 14/PixelRatio.getFontScale(),
            color: color.black
        },
        text14B: {
            fontFamily: 'Poppins-Bold',
            fontSize: 14/PixelRatio.getFontScale(),
            color: color.black,
        },
        text14R: {
            fontFamily: "Poppins-Regular",
            fontSize: 14/PixelRatio.getFontScale(),
            color: color.black
        },
        text14M: {
            fontFamily: "Poppins-Medium",
            fontSize: 14/PixelRatio.getFontScale(),
            color: color.black
        },
        text16B: {
            fontSize: 16/PixelRatio.getFontScale(),
            fontFamily: "Poppins-Bold",
            color:color.black,
        },
        text16LB: {
            fontFamily: "Poppins-Bold",
            fontSize: 16/PixelRatio.getFontScale(),
            color: color.black
        },
        text16R: {
            fontFamily: "Poppins-Regular",
            fontSize: 16/PixelRatio.getFontScale(),
            color: color.black
        },
        text16M: {
            fontFamily:"Poppins-Medium", 
            fontSize: 16/PixelRatio.getFontScale(),
            color: color.black
        },
        text18R: {
            fontFamily: "Poppins-Regular",
            fontSize: 18/PixelRatio.getFontScale(),
            color: color.black
        },
        text18SB: {
            fontFamily: "Poppins-SemiBold",
            fontSize: 18/PixelRatio.getFontScale(),
            fontWeight:"800",
            color: color.white
        },
        text18M: {
            fontSize: 18/PixelRatio.getFontScale(),
            color:color.black,
        },
        text15L: {
            fontFamily: "Poppins-Light",
            fontSize: 15/PixelRatio.getFontScale(),
            color: color.black
        },
        text10L: {
            fontFamily: "Poppins-Light",
            fontSize: 10/PixelRatio.getFontScale(),
            color: color.black
        },
        text10M: {
            fontFamily: "Poppins-Medium",
            fontSize: 10/PixelRatio.getFontScale(),
            color: color.black
        },
        text15R: {
            fontFamily: "Poppins-Regular",
            fontSize: 15/PixelRatio.getFontScale(),
            color: color.black
        },
        text15B: {
            fontFamily: "Poppins-SemiBold",
            fontSize: 15/PixelRatio.getFontScale(),
            color:color.black
        },
        text15RCB: {
            fontFamily: "Poppins-Regular",
            fontSize: 18/PixelRatio.getFontScale(),
            color: color.greyMedium,
        },
        text15RCR: {
            fontFamily: "Poppins-Regular",
            fontSize: 18/PixelRatio.getFontScale(),
            color: color.white
        },
        text15M: {
            fontFamily: "Poppins-Medium",
            fontSize: 15/PixelRatio.getFontScale(),
        },
        text20M: {
            fontFamily:"Poppins-Medium", 
            color:color.black,
            fontSize: 20/PixelRatio.getFontScale(),
        },
        text40M: {
            fontFamily:"Poppins-Medium", 
            fontSize: 40/PixelRatio.getFontScale(),
        },
        text20SM: {
            fontFamily: "Poppins-SemiBold",
            fontSize: 20/PixelRatio.getFontScale(),
        },
        text25SM: {
            fontFamily: "Poppins-SemiBold",
            fontSize: 25/PixelRatio.getFontScale(),
        },
        text25R: {
            fontFamily: "Poppins-Regular",
            fontSize: 25/PixelRatio.getFontScale(),
        },
        text20R: {
            fontFamily: "Poppins-Regular",
            fontSize: 20/PixelRatio.getFontScale(),
        },
        text10R: {
            fontFamily: "Poppins-Regular",
            fontSize: 10/PixelRatio.getFontScale(),
        },
        text22SB: {
            fontFamily: "Poppins-SemiBold",
            fontSize: 22/PixelRatio.getFontScale(),
            color: color.black
        },
        textLogo1: {
            fontFamily: "StorytellerScript-Regular",
            fontSize: 30/PixelRatio.getFontScale(),
            color: "#2d7dc2",
        },
        textLogo: {
            fontFamily: "Poppins-SemiBoldItalic",
            fontSize: 30/PixelRatio.getFontScale(),
            color: "#2d7dc2",
        },
        text22B: {
            fontFamily:"Poppins-Bold",
            fontSize: 22/PixelRatio.getFontScale(),
        },
})