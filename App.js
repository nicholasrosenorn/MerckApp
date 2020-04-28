import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView,  } from 'react-native';

import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import MyInformationScreen from './components/MyInformationScreen';
import InfoScreen from './components/InfoScreen';
import SurveyScreen from './components/SurveyScreen';
import FinishSurveyScreen from './components/FinishSurveyScreen';
import ChartScreen from './components/ChartScreen';
import HomePageScreen from './components/HomePageScreen';
import LoginScreen from './components/LoginScreen';

const RootStack = createStackNavigator(
  {
    Login: {
      screen : LoginScreen,
      navigationOptions: {
        headerTitle: 'Login',
        headerStyle: {
          backgroundColor: 'black',
        },
        headerTintColor: "#d2f7f1",
      },
    },
    HomePage: {
      screen : HomePageScreen,
      navigationOptions: {
        headerTitle: 'HomePage',
        headerStyle: {
          backgroundColor: 'black',
        },
        headerTintColor: "#d2f7f1",
      },
    },
    MyInformation: {
      screen : MyInformationScreen,
      navigationOptions: {
        headerTitle: 'My Information',
        headerStyle: {
          backgroundColor: 'black',
        },
        headerTintColor: "#d2f7f1",
      },
    },
    Info : {
      screen : InfoScreen,
      navigationOptions: {
        headerTitle: 'Information',
        headerStyle: {
          backgroundColor: 'black',
        },
        headerTintColor: "#d2f7f1",
      },
    },
    Survey : {
      screen: SurveyScreen,
      navigationOptions: {
        headerTitle: 'Survey',
        headerStyle: {
          backgroundColor: 'black',
        },
        headerTintColor: "#d2f7f1",
      },
    },
    FinishSurvey: {
      screen: FinishSurveyScreen,
      navigationOptions: {
        headerTitle: 'Finish Survey',
        headerStyle: {
          backgroundColor: 'black',
        },
        headerTintColor: "#d2f7f1",
      }
    },
    Chart: {
      screen: ChartScreen,
      navigationOptions: {
        headerTitle: 'Chart',
        headerStyle: {
          backgroundColor: 'black',
        },
        headerTintColor: "#d2f7f1",
      },
    }
  },
)

export default createAppContainer(
  createSwitchNavigator({
    Login: LoginScreen,
    Root: RootStack
  },
  {
    initialRouteName: "Login",
  },
  )
);