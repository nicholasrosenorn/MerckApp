import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Info from './InfoScreen';
import Survey from './SurveyScreen';
import Papa from 'papaparse';

export default class HomeScreen extends React.Component {

  navigateToInfo = (item) => {
    var result = Object.entries(item).map(( [k, v] ) => ({ [k]: v }))
    this.props.navigation.navigate('Info', {item: result});
  }

  navigateToSteps = () => {
    //var addSteps = []

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
        //console.log(key2)
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

  navigateToChart = () => {
    this.props.navigation.navigate('Chart');
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
      const { navigate } = this.props.navigation;
      return (
         <View style={{backgroundColor: 'black'}}>
            <TouchableOpacity onPress={() => this.navigateToSurvey()} style={styles.myButton}>
              <Text style={styles.myButtonText}>Take Survey</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.navigateToSteps()} style={styles.myButton}>
              <Text style={styles.myButtonText}>Chart Info</Text>
            </TouchableOpacity>
            <ScrollView>
               {
                  this.state.appData.map((item, index) => (
                     <View key = {item.FIELD1} style = {styles.container2}>
                        {/* <Text>{item.name}</Text> */}
                        <TouchableOpacity style = {{marginLeft: 5, marginRight: 5, marginTop: 20, marginBottom: 20}}onPress = {() => this.navigateToInfo(item)}>
                          <Text style={{textAlign: 'center', fontSize: 20, color: '#d2f7f1'}}>{item.Date}</Text>
                        </TouchableOpacity>
                     </View>
                  ))
               }
            </ScrollView>
         </View>
      )
  }
}

const styles = StyleSheet.create({
  container2: {
    borderColor: 'white',
  borderWidth: 1,
  backgroundColor: 'black'
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 30,
    margin: 2,
    borderColor: '#2a4944',
    borderWidth: 1,
    backgroundColor: '#d2f7f1',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  myButton: {
    backgroundColor: "#10B09F",
    padding: 20,
    borderRadius: 5,
    marginTop: 5,
    marginLeft: 20,
    marginRight: 20,
  },
  myButtonText: {
    fontSize: 20,
    color: '#fff',
    alignSelf: "center",
  }, 
});
