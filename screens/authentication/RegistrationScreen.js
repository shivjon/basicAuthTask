import {
  Alert,
  Image,
  ImageBackground,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {PaddingBox, Styles, VerticalBox} from '../../utils/Styles';
import Images from '../../utils/Images';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {color} from '../../utils/theme';
import Button from '../../comman/Button';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
import * as authAction from '../../redux/actions/authAction';

const RegistrationScreen = props => {
  const dispatch = useDispatch();
  const [userLog, setuserLog] = useState({
    name:"",
    email: '',
    password: '',
    confrimPassowrd: '',
  });

  const onChangeText = (key, value) => {
    setuserLog({...userLog, [key]: value});
  };

  const onRegister = async () => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(userLog.email) === false) {
      alert("Please enter valid email id.")
      return 
    }
    if (userLog.name.length > 0 && userLog.email.length > 0  && userLog.password.length > 0 && userLog.confrimPassowrd.length > 0) {
      if (userLog.password === userLog.confrimPassowrd) {
        const userData =await AsyncStorage.getItem("userDetails");
        const user = userData != null? JSON.parse(userData) : [] ;
        console.log(JSON.stringify([...user,userLog]));
        AsyncStorage.setItem('userDetails',JSON.stringify([...user,userLog]));
        ToastAndroid.show("Registration Successfully.",ToastAndroid.SHORT);
        dispatch(authAction.UserAuth([userLog])).then(async res => {
          console.log(res);
      })
      props.navigation.navigate('HomeStack');
      }else{
        alert("Please enter passowrd and confrim password are same.")
      }
    }else{
     alert("Please enter all fields.")
    }
  };

  return (
    <SafeAreaView style={Styles.container}>
      <StatusBar barStyle={'dark-content'} />
      <ImageBackground source={Images.BACKGROUND} style={styles.imageContainer}>
        <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
          <Image source={Images.LOGONAME} style={styles.imageBox} resizeMode="contain" />
          <View style={Styles.cardInput}>
            <Text
              style={{
                ...Styles.text40M,
                color: color.white,
                textAlign: 'center',
              }}>
              WELCOME
            </Text>
            <Text
              style={{
                ...Styles.text20M,
                fontSize: 20,
                color: color.white,
                textAlign: 'center',
              }}>
              Create an account
            </Text>
            <PaddingBox style={20} />
            <TextInput
              value={userLog.name}
              placeholder="Full Name"
              placeholderTextColor={color.white}
              style={{...Styles.textInput, ...Styles.text18SB}}
              onChangeText={value => onChangeText('name', value)}
            />
            <PaddingBox style={20} />
            <TextInput
              value={userLog.email}
              placeholder="Email"
              placeholderTextColor={color.white}
              style={{...Styles.textInput, ...Styles.text18SB}}
              onChangeText={value => onChangeText('email', value)}
            />
            <PaddingBox />
            <TextInput
              value={userLog.password}
              placeholder="Password"
              secureTextEntry={true}
              placeholderTextColor={color.white}
              style={{...Styles.textInput, ...Styles.text18SB}}
              onChangeText={value => onChangeText('password', value)}
            />
            <PaddingBox />
            <TextInput
              value={userLog.confrimPassowrd}
              placeholder="Confrim Password"
              secureTextEntry={true}
              placeholderTextColor={color.white}
              style={{...Styles.textInput, ...Styles.text18SB}}
              onChangeText={value => onChangeText('confrimPassowrd', value)}
            />
            <PaddingBox style={30} />
            <View style={styles.buttonBox}>
              <Button
                name={'Create account'}
                onPress={() => {
                  onRegister();
                }}
              />
            </View>
          </View>
        </KeyboardAwareScrollView>
        <View style={styles.footerBox}>
          <Text style={{...Styles.text14M, color: color.white}}>
            Aready have an account?{' '}
            <Text style={{...Styles.text14B, color: color.white}} onPress={()=>{  props.navigation.navigate('LoginScreen');}}>LogIn</Text>
          </Text>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default RegistrationScreen;

const styles = StyleSheet.create({
  imageBox: {
    width: widthPercentageToDP(90),
    height: heightPercentageToDP(20),
  },
  imageContainer: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  footerBox: {
    marginBottom: 20,
  },
  forgetBox: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  buttonBox: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
