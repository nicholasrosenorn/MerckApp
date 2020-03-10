import 'react-native-gesture-handler';
import * as React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, navigation, Button } from 'react-native';
import logo from '/Users/nicholasrosenorn/Desktop/AwesomeProject/assets/merckPhoto.png'
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// In App.js in a new project
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

function SurveyScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Survey Screen</Text>
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
});


export default App;
