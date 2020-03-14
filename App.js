import 'react-native-gesture-handler';
import * as React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, navigation, Alert } from 'react-native';
import logo from '/Users/nicholasrosenorn/Desktop/AwesomeProject/assets/merckPhoto.png'
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';


function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={logo} style={{ width: 305, height: 300 }} /> 
      <Text>Welcome to the Merck Biometric Application!</Text>
      <Text></Text>
      <TouchableOpacity onPress={() => navigation.navigate('Survey')}style={styles.myButton}>
        <Text style={styles.myButtonText}>Start</Text>
      </TouchableOpacity>
    </View>
  );
}


function SurveyScreen( { navigation } ) {
  return (
    <View style={{flex: 1}}>
      <View style={{alignItems: 'center', justifyContent: 'center', top: 30 }}> 
       <Text style = {{fontSize: 20}}>Rate Your Pain on a Scale From 1 to 7:</Text>
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
       <Text style = {{fontSize: 20}}>Rate Your Happiness on a Scale From 1 to 7:</Text>
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
      <View style = {{position: 'absolute', top: 540, left: 275}}>
        <TouchableOpacity onPress={() => navigation.navigate('FinishSurvey')}style={styles.finishButton}>
        <Text style={styles.finishButtonText}>Finish Survey</Text>
        </TouchableOpacity>
      </View>
    </View> 
  );
}

function FinishSurveyScreen( {navigation}) {
  return(
    <View style = {{flex:1}}>
      <View style={{ alignItems: 'center', justifyContent: 'center', top: 250}}> 
        <Text style = {{fontSize: 20}}>Thank You for Completing the Survey!</Text>
      </View>

      <View style = {{position: 'absolute', top: 520, left: 125}}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}style={styles.myButton}>
          <Text style={styles.myButtonText}>Back to Home</Text>
        </TouchableOpacity>
      </View>
      </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Survey" component={SurveyScreen} />
        <Stack.Screen name ="FinishSurvey" component={FinishSurveyScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
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
  },
  finishButtonText: {
    fontSize: 15,
    color: '#10B09F',
  },
});


export default App;
