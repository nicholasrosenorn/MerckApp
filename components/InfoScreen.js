import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import ProgressCircle from 'react-native-progress-circle'

export default class InfoScreen extends Component {

    state = {
        item: this.props.navigation.getParam('item'),
        num : 1,
        maxSteps : 15000,
        maxFloors_Climbed : 50,
        maxTotal_Miles : 7,
        maxLightly_Active_Miles: 5,
        maxModerately_Active_Miles: 4,
        maxVery_Active_Miles: 2,
        maxSedentary_Minutes: 1000,
        maxLightly_Active_Minutes: 300,
        maxFairly_Active_Minutes: 20,
        maxVery_Active_Minutes: 30,
        maxHR_30_100_Minutes: 1600,
        maxHR_100_140_Minutes: 150,
        maxHR_140_170_Minutes: 120,
        maxHR_170_220_Minutes: 120,
        maxAverage_Resting_HR: 120,
        maxBMI: 50,
        maxMinutes_Alseep: 700,
        maxSleep_Efficiency: 200,
        maxWeight: 300
    }

    render() {
      return(
        <ScrollView>
        {
          this.state.item.map((c, index) => {
            var key = Object.keys(c)[0];
            var value = Object.values(c)[0];
            var maxKey = "max".concat(key)
            var maxx = parseFloat(this.state[maxKey])

            if (index <= 1) {
              return (
                <View style={styles.container2}>
                  <Text style={{textAlign: 'center', fontSize: 20, color: '#d2f7f1'}}>{key} : {value}</Text>
                </View>
              )
            }
            else if (value == null) {
              return(
                <View style={styles.container2}>
                  <Text style={{textAlign: 'center', fontSize : 20, color: '#d2f7f1'}}>{key} is unavailable. Goal is {maxx}</Text>
                </View>
              )
            }
            else {
              return (
                <View style={styles.container2}>
                  <ProgressCircle
                      percent={parseFloat(value) * 100.0 / maxx}
                      radius={50}
                      borderWidth={8}
                      color="#009590"
                      shadowColor="#d2f7f1"
                      bgColor="black"
                      outerCircleStyle={styles.idk}
                  >
                      <Text style={{ textAlign: 'center', fontSize : 20, color: '#d2f7f1' }}>{parseFloat(parseFloat(value) * 100 / maxx).toFixed(2) + '%'}</Text>
                  </ProgressCircle>
                  <Text style={{textAlign: 'center', fontSize : 20, color: '#d2f7f1'}}>{key} : {value}, Goal is {maxx}</Text>
                </View>
                
              ) 
            }
          })
        }
       </ScrollView>)
        
        
    }
}


const styles = StyleSheet.create({
  idk: {
    marginLeft: 130,
    marginTop: 5,
    marginBottom: 5
  },
  container2: {
    borderColor: 'white',
    borderWidth: 1,
    backgroundColor: 'black'
  }
});