import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from '../screens/dashbaord/HomeScreen';
import LoginScreen from '../screens/authentication/LoginScreen';
import RegistrationScreen from '../screens/authentication/RegistrationScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {PaddingBox, Styles} from '../utils/Styles';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import { color } from '../utils/theme';
import { Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import ProfileScreen from '../screens/dashbaord/ProfileScreen';
import SettingScreen from '../screens/dashbaord/SettingScreen';
import LogoutScreen from '../screens/dashbaord/LogoutScreen';

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { 
        height:Platform.OS=="ios"? 90 :60
      },
        tabBarShowLabel: false,
        headerShown: false,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({focused, size}) => (
            <View style={styles.tabStyle}>
              <Feather name="home" size={24} color={focused ? color.primary : color.black} />
              <PaddingBox style={2} />
              <Text
                style={[
                  Styles.text10M,
                  {
                    color: focused ? color.primary : color.black,
                    fontSize: widthPercentageToDP(2.7),
                  },
                ]}>
                Home
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({focused, size}) => (
            <View style={styles.tabStyle}>
              <AntDesign name="user"  size={24} color={focused ? color.primary : color.black} />
              <PaddingBox style={2} />
              <Text
                style={[
                  Styles.text10M,
                  {
                    color: focused ? color.primary : color.black,
                    fontSize: widthPercentageToDP(2.7),
                  },
                ]}>
                Profile
              </Text>
            </View>
          ),
        }}
      />
       <Tab.Screen
        name="Logout"
        component={LogoutScreen}
        options={{
          tabBarLabel: 'Logout',
          tabBarIcon: ({focused, size}) => (
            <View style={styles.tabStyle}>
              <AntDesign name="logout"  size={24} color={focused ? color.primary : color.black}/>
              <PaddingBox style={2} />
              <Text
                style={[
                  Styles.text10M,
                  {
                    color: focused ? color.primary : color.black,
                    fontSize: widthPercentageToDP(2.7),
                  },
                ]}>
                Logout
              </Text>
            </View>
          ),
        }}
      />
       <Tab.Screen
        name="Setting"
        component={SettingScreen}
        options={{
          tabBarLabel: 'Setting',
          tabBarIcon: ({focused, size}) => (
            <View style={styles.tabStyle}>
              <AntDesign name="setting" size={24} color={focused ? color.primary : color.black} />
              <PaddingBox style={2} />
              <Text
                style={[
                  Styles.text10M,
                  {
                    color: focused ? color.primary : color.black,
                    fontSize: widthPercentageToDP(2.7),
                  },
                ]}>
                Setting
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabStyle: {
    alignItems:'center',justifyContent:'center',
},
customStyle:{
  alignItems:'center',justifyContent:'center',
},
imageStyle1:{width:20, height:20, tintColor:color.navColor},
imageStyle:{width:20, height:20, tintColor:color.dSecond}

});

export const AppNavigator = props => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={'LoginScreen'}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen
          name="RegistrationScreen"
          component={RegistrationScreen}
        />

        <Stack.Screen name="LogoutScreen" component={LogoutScreen} />
        <Stack.Screen name="SettingScreen" component={SettingScreen} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        <Stack.Screen name="HomeStack" component={HomeStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
