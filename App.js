import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView,  } from 'react-native';

import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import HomeScreen from './components/HomeScreen';
import InfoScreen from './components/InfoScreen';
import SurveyScreen from './components/SurveyScreen';
import FinishSurveyScreen from './components/FinishSurveyScreen';
import ChartScreen from './components/ChartScreen';

const RootStack = createStackNavigator(
  {
    Home: {
      screen : HomeScreen,
      navigationOptions: {
        headerTitle: 'Home',
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
    Home: HomeScreen,
    Root: RootStack
  },
  {
    initialRouteName: "Home",
  },
  )
);