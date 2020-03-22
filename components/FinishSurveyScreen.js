import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Dimensions, Alert } from 'react-native';
import { black } from 'colorette';

export default class FinishSurveyScreen extends Component {
    navigateToHome = () => {
        this.props.navigation.navigate('Home');
    }

    render() {
        return (
            <View style = {{flex:1, backgroundColor: 'black'}}>
            <View style={{ alignItems: 'center', justifyContent: 'center', top: 250}}> 
                <Text style = {{fontSize: 20, color: '#d2f7f1'}}>Thank You for Completing the Survey!</Text>
            </View>

            <View style = {{position: 'absolute', top: 520, left: 125}}>
                <TouchableOpacity onPress={() => this.navigateToHome()}style={styles.finishButton}>
                <Text style={styles.finishButtonText}>Back to Home</Text>
                </TouchableOpacity>
            </View>
            </View>
          );
    }
}

const styles = StyleSheet.create({
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
    },
    myButtonText: {
      fontSize: 20,
      color: '#fff',
    },
    surveyButtons: {
      backgroundColor: "#10B09F",
      padding: 15,
      borderRadius: 5,
    },
    surveyButtonsText: {
      fontSize: 20,
      color: '#fff',
    },
    finishButton: {
      backgroundColor: "#1C1C1C",
      padding: 18,
      borderRadius: 5,
      borderWidth: 2,
      borderColor: '#2a4944'
    },
    finishButtonText: {
      fontSize: 15,
      color: '#d2f7f1',
    },
  });