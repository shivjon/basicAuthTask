import {
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
import * as authAction from '../../redux/actions/authAction';
import { useDispatch } from 'react-redux';

import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {verticalScale} from 'react-native-size-matters';
import Button from '../../comman/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = props => {
  const dispatch = useDispatch();
  const [userLog, setuserLog] = useState({
    email: '',
    password: '',
  });

  const onChangeText = (key, value) => {
    setuserLog({...userLog, [key]: value});
  };

  const onSubmit = async () => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(userLog.email) === false) {
      alert("Please enter valid email id.")
      return 
    }
    if (userLog.email.length > 0 && userLog.password.length > 0) {
      const userData = await AsyncStorage.getItem('userDetails');
      const user = userData != null ? JSON.parse(userData) : [];
      let userGetData = user.filter(
        (item, index) =>
          item.email == userLog.email && item.password == userLog.password,
      );
      if (userGetData.length != 0) {
        dispatch(authAction.UserAuth(userGetData)).then(async res => {
            console.log(res);
        })

        ToastAndroid.show('Login Successfully.', ToastAndroid.SHORT);
        props.navigation.navigate('HomeStack');
      } else {
        ToastAndroid.show('Login Failed.', ToastAndroid.SHORT);
      }
    } else {
      ToastAndroid.show('Please enter all fields.', ToastAndroid.SHORT);
    }
  };

  return (
    <SafeAreaView style={Styles.container}>
      <StatusBar barStyle={'dark-content'} />
      <ImageBackground source={Images.BACKGROUND} style={styles.imageContainer}>
        <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
          <PaddingBox style={30} />
          <Image
            source={Images.LOGONAME}
            style={styles.imageBox}
            resizeMode="contain"
          />
          <Text style={{...styles.textLogin}}>Login</Text>
          <View style={Styles.cardInput}>
            <TextInput
              value={userLog.email}
              placeholder="Email"
              placeholderTextColor={color.white}
              style={{...Styles.textInput, ...Styles.text18SB}}
              onChangeText={value => onChangeText('email', value)}
              keyboardType="email-address"
            />
            <PaddingBox />
            <TextInput
              value={userLog.password}
              placeholder="Password"
              placeholderTextColor={color.white}
              secureTextEntry={true}
              style={{...Styles.textInput, ...Styles.text18SB}}
              onChangeText={value => onChangeText('password', value)}
            />
            <PaddingBox style={10} />
            <TouchableOpacity style={styles.forgetBox}>
              <Text style={{...Styles.text14B, color: color.white}}>
                Forget Passowrd?
              </Text>
            </TouchableOpacity>
            <PaddingBox />
            <View style={styles.buttonBox}>
              <Button
                name={'Login'}
                onPress={() => {
                  onSubmit();
                }}
              />
            </View>
          </View>
        </KeyboardAwareScrollView>
        <View style={styles.footerBox}>
          <Text style={{...Styles.text14M, color: color.white}}>
            Don’t have an account?{' '}
            <Text
              style={{...Styles.text14B, color: color.white}}
              onPress={() => {
                props.navigation.navigate('RegistrationScreen');
              }}>
              Sign Up
            </Text>
          </Text>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  imageContainer: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  textLogin: {
    color: color.white,
    fontSize: verticalScale(30),
    textAlign: 'center',
    fontWeight: 'bold',
  },
  imageBox: {
    width: widthPercentageToDP(90),
    height: heightPercentageToDP(25),
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
