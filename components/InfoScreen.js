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
       </ScrollView>
            // <View style={styles.container}>
            //      <ProgressCircle
            //         percent={parseFloat(this.state.item.Total_Miles) * 100.0 / 5.0}
            //         radius={50}
            //         borderWidth={8}
            //         color="#3399FF"
            //         shadowColor="#999"
            //         bgColor="#fff"
            //         outerCircleStyle={styles.idk}
            //     >
            //         <Text style={{ fontSize: 18 }}>{parseFloat(parseFloat(this.state.item.Total_Miles) * 100 / 5.0).toFixed(2) + '%'}</Text>
            //     </ProgressCircle>
            //     <Text style={styles.miles}>
            //         Miles : {this.state.item.Total_Miles}
            //     </Text>

            //     <ProgressCircle
            //         percent={parseFloat(this.state.item.Floors_Climbed) * 100.0 / 13.0}
            //         radius={50}
            //         borderWidth={8}
            //         color="#3399FF"
            //         shadowColor="#999"
            //         bgColor="#fff"
            //         outerCircleStyle={styles.idk}
            //     >
            //         <Text style={{ fontSize: 18 }}>{parseFloat(parseFloat(this.state.item.Floors_Climbed) * 100 / 12.0).toFixed(2) + '%'}</Text>
            //     </ProgressCircle>
            //     <Text style={styles.floors}>
            //         Floors Climbed : {this.state.item.Floors_Climbed}
            //     </Text>
                
            //     <ProgressCircle
            //         percent={parseFloat(this.state.item.Steps) * 100.0 / 10000.0}
            //         radius={50}
            //         borderWidth={8}
            //         color="#3399FF"
            //         shadowColor="#999"
            //         bgColor="#fff"
            //         outerCircleStyle={styles.idk}
            //     >
            //         <Text style={{ fontSize: 18 }}>{parseFloat(parseFloat(this.state.item.Steps) * 100 / 10000.0).toFixed(2) + '%'}</Text>
            //     </ProgressCircle>
            //     <Text style={styles.steps}>
            //         Steps : {this.state.item.Steps}
            //     </Text>

                
            // </View>
            )
        
        
    }
}


const styles = StyleSheet.create({
  item2: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: 30,
    margin: 2,
    borderColor: '#2a4944',
    borderWidth: 1,
    backgroundColor: '#d2f7f1',
  },
  idk: {
    marginLeft: 130,
    marginTop: 5,
    marginBottom: 5
  },
    container: {
      flex: 1,
      paddingTop: 5,
    },
    miles: {
      fontSize: 18,
      textAlign: 'left',
      marginLeft: 130,
      paddingTop: 10,
      color: '#005cf1',
      fontWeight: 'bold'
    },
    floors: {
      fontSize: 18,
      textAlign: 'left',
      marginLeft: 100,
      paddingTop: 10,
      color: '#005cf1',
      fontWeight: 'bold'
    },
    steps: {
      fontSize: 18,
      textAlign: 'left',
      marginLeft: 130,
      paddingTop: 10,
      color: '#005cf1',
      fontWeight: 'bold'
    },
    post: {
      fontSize: 25,
      textAlign: 'left',
      marginLeft: 30,
      marginRight: 30,
      paddingTop: 20,
      color: '#005cf1'
    },
    date: {
      textAlign: 'right',
      marginRight: 10,
      fontSize: 10,
      paddingTop: 10,
      paddingBottom: 5,
      color: '#005cf1'
    },
    like: {
      fontSize: 18,
      marginHorizontal: 70,
      color: '#005cf1'
    },
    quote: {
      fontSize: 18,
      marginHorizontal: 70,
      color: '#005cf1'
    },
    border: {
      borderColor: '#005cf1',
      borderWidth: 2,
      margin: 5
    },
    container2: {
      borderColor: 'white',
    borderWidth: 1,
    backgroundColor: 'black'
    }
  });