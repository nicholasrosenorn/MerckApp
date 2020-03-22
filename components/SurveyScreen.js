import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Dimensions, Alert } from 'react-native';

export default class SurveyScreen extends Component {
    navigateToFinishSurvey = () => {
        this.props.navigation.navigate('FinishSurvey');
    }
    render() {
        return (
            <View style={{flex: 1, backgroundColor: 'black'}}>
              <View style={{alignItems: 'center', justifyContent: 'center', top: 30 }}> 
               <Text style = {{fontSize: 20, color: '#d2f7f1'}}>Rate Your Pain on a Scale From 1 to 7:</Text>
              </View>
        
              <View style = {{position: 'absolute', top: 80, left: 90 }}>
               <TouchableOpacity onPress={() => Alert.alert('Pain is a Level 1')}style={styles.surveyButtons}>
                 <Text style={styles.surveyButtonsText}>1</Text>
                </TouchableOpacity>
              </View> 
        
              <View style = {{position: 'absolute', top: 80, left: 180}}>
               <TouchableOpacity onPress={() => Alert.alert('Pain is a Level 2')}style={styles.surveyButtons}>
                 <Text style={styles.surveyButtonsText}>2</Text>
                </TouchableOpacity>
              </View> 
        
              <View style = {{position: 'absolute', top: 80, left: 270}}>
               <TouchableOpacity onPress={() => Alert.alert('Pain is a Level 3')}style={styles.surveyButtons}>
                 <Text style={styles.surveyButtonsText}>3</Text>
                </TouchableOpacity>
              </View>
        
              <View style = {{position: 'absolute', top: 170, left: 45}}>
               <TouchableOpacity onPress={() => Alert.alert('Pain is a Level 4')}style={styles.surveyButtons}>
                 <Text style={styles.surveyButtonsText}>4</Text>
                </TouchableOpacity>
              </View>
        
              <View style = {{position: 'absolute', top: 170, left: 135}}>
               <TouchableOpacity onPress={() => Alert.alert('Pain is a Level 5')}style={styles.surveyButtons}>
                 <Text style={styles.surveyButtonsText}>5</Text>
                </TouchableOpacity>
              </View>
        
              <View style = {{position: 'absolute', top: 170, left: 225}}>
               <TouchableOpacity onPress={() => Alert.alert('Pain is a Level 6')}style={styles.surveyButtons}>
                 <Text style={styles.surveyButtonsText}>6</Text>
                </TouchableOpacity>
              </View>
        
              <View style = {{position: 'absolute', top: 170, left: 315}}>
               <TouchableOpacity onPress={() => Alert.alert('Pain is a Level 7')}style={styles.surveyButtons}>
                 <Text style={styles.surveyButtonsText}>7</Text>
                </TouchableOpacity>
              </View>
        
              <View style = {{position: "absolute", top: 260, left: 45}}>
                <Text>________________________________________________</Text>
              </View>
        
              <View style={{ alignItems: 'center', justifyContent: 'center', top: 270 }}> 
               <Text style = {{fontSize: 18, color: '#d2f7f1'}}>Rate Your Happiness on a Scale From 1 to 7:</Text>
              </View>
        
              <View style = {{position: 'absolute', top: 350, left: 90 }}>
               <TouchableOpacity onPress={() => Alert.alert('Happiness is a Level 1')}style={styles.surveyButtons}>
                 <Text style={styles.surveyButtonsText}>1</Text>
                </TouchableOpacity>
              </View> 
        
              <View style = {{position: 'absolute', top: 350, left: 180}}>
               <TouchableOpacity onPress={() => Alert.alert('Happiness is a Level 2')}style={styles.surveyButtons}>
                 <Text style={styles.surveyButtonsText}>2</Text>
                </TouchableOpacity>
              </View> 
        
              <View style = {{position: 'absolute', top: 350, left: 270}}>
               <TouchableOpacity onPress={() => Alert.alert('Happiness is a Level 3')}style={styles.surveyButtons}>
                 <Text style={styles.surveyButtonsText}>3</Text>
                </TouchableOpacity>
              </View>
        
              <View style = {{position: 'absolute', top: 440, left: 45}}>
               <TouchableOpacity onPress={() => Alert.alert('Happiness is a Level 4')}style={styles.surveyButtons}>
                 <Text style={styles.surveyButtonsText}>4</Text>
                </TouchableOpacity>
              </View>
        
              <View style = {{position: 'absolute', top: 440, left: 135}}>
               <TouchableOpacity onPress={() => Alert.alert('Happiness is a Level 5')}style={styles.surveyButtons}>
                 <Text style={styles.surveyButtonsText}>5</Text>
                </TouchableOpacity>
              </View>
        
              <View style = {{position: 'absolute', top: 440, left: 225}}>
               <TouchableOpacity onPress={() => Alert.alert('Happiness is a Level 6')}style={styles.surveyButtons}>
                 <Text style={styles.surveyButtonsText}>6</Text>
                </TouchableOpacity>
              </View>
        
              <View style = {{position: 'absolute', top: 440, left: 315}}>
               <TouchableOpacity onPress={() => Alert.alert('Happiness is a Level 7')}style={styles.surveyButtons}>
                 <Text style={styles.surveyButtonsText}>7</Text>
                </TouchableOpacity>
              </View>

              <View style = {{position: 'absolute', top: 540, left: 220}}>
                <TouchableOpacity onPress={() => this.navigateToFinishSurvey()}style={styles.finishButton}>
                <Text style={styles.finishButtonText}>Finish Survey</Text>
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