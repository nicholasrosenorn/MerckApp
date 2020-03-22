import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Button } from 'react-native';
import logo from '../assets/merckPhoto.png'

export default class HomePageScreen extends React.Component {
    
      navigateToCharts = () => {
    
        this.setState({
          addSteps : [],
          addFloors_Climbed : [],
          addTotal_Miles : [],
          addLightly_Active_Miles: [],
          addModerately_Active_Miles: [],
          addVery_Active_Miles: [],
          addSedentary_Minutes: [],
          addLightly_Active_Minutes: [],
          addFairly_Active_Minutes: [],
          addVery_Active_Minutes: [],
          addHR_30_100_Minutes: [],
          addHR_100_140_Minutes: [],
          addHR_140_170_Minutes: [],
          addHR_170_220_Minutes: [],
          addAverage_Resting_HR: [],
          addBMI: [],
          addMinutes_Alseep: [],
          addSleep_Efficiency: [],
          addWeight: []
        })
    
        for (var key in this.state.appData) {
          for (var key2 in this.state.appData[key]) {
            var word = 'add'.concat(key2)
            if (key2 != "FIELD1" &&  key2 != "Date") {
              if (this.state.appData[key][key2] === undefined) {
                this.state[word].push(0.0)
              }
              else {
                this.state[word].push(parseFloat(this.state.appData[key][key2]))
              }
            }
          }
        }
    
        var finalArr = []
    
        finalArr.push(this.state.addSteps)
        finalArr.push(this.state.addFloors_Climbed)
        finalArr.push(this.state.addTotal_Miles)
        finalArr.push(this.state.addLightly_Active_Miles)
        finalArr.push(this.state.addModerately_Active_Miles)
        finalArr.push(this.state.addVery_Active_Miles)
        finalArr.push(this.state.addSedentary_Minutes)
        finalArr.push(this.state.addLightly_Active_Minutes)
        finalArr.push(this.state.addFairly_Active_Minutes)
        finalArr.push(this.state.addVery_Active_Minutes)
        finalArr.push(this.state.addHR_30_100_Minutes)
        finalArr.push(this.state.addHR_100_140_Minutes)
        finalArr.push(this.state.addHR_140_170_Minutes)
        finalArr.push(this.state.addHR_170_220_Minutes)
        finalArr.push(this.state.addAverage_Resting_HR)
        finalArr.push(this.state.addBMI)
        finalArr.push(this.state.addMinutes_Alseep)
        finalArr.push(this.state.addSleep_Efficiency)
        finalArr.push(this.state.addWeight)
    
        this.props.navigation.navigate('Chart', {
          arr : finalArr
        });
      }
    
      navigateToSurvey = () => {
        this.props.navigation.navigate('Survey');
      }

      navigateToMyInfo = () => {
        this.props.navigation.navigate('MyInformation', {
            appData : this.state.appData
        });
      }

      state = {
        appData: [],
        addSteps : [],
        addFloors_Climbed : [],
        addTotal_Miles : [],
        addLightly_Active_Miles: [],
        addModerately_Active_Miles: [],
        addVery_Active_Miles: [],
        addSedentary_Minutes: [],
        addLightly_Active_Minutes: [],
        addFairly_Active_Minutes: [],
        addVery_Active_Minutes: [],
        addHR_30_100_Minutes: [],
        addHR_100_140_Minutes: [],
        addHR_140_170_Minutes: [],
        addHR_170_220_Minutes: [],
        addAverage_Resting_HR: [],
        addBMI: [],
        addMinutes_Alseep: [],
        addSleep_Efficiency: [],
        addWeight: []
      }
    
      componentDidMount() {
        const customData = require('../convertcsv.json')
        this.setState({
          appData : customData
        })
      }

    render() {
        return (
            <View style={{flex:1, backgroundColor: 'black', alignItems: 'center'}}>
                <Image source={logo} style={{ width: 305, height: 300, marginTop: 30 }} />
                <TouchableOpacity onPress={() => this.navigateToSurvey()} style={styles.myButton}>
                    <Text style={styles.myButtonText}>Take Survey</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.navigateToCharts()} style={styles.myButton}>
                    <Text style={styles.myButtonText}>Chart Info</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.navigateToMyInfo()} style={styles.myButton}>
                    <Text style={styles.myButtonText}>Your Information</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    myButton: {
      backgroundColor: "#10B09F",
      padding: 20,
      borderRadius: 5,
      marginTop: 10
    },
    myButtonText: {
      fontSize: 20,
      color: '#fff',
    },
  });