import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import logo from '/Users/nicholasrosenorn/Desktop/AwesomeProject/assets/merckPhoto.png'

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={logo} style={{ width: 305, height: 300 }} /> 
      <Text>Merck Application!</Text>

      <Text></Text>
      
      <TouchableOpacity onPress={() => alert('Welcome to Our Application!')} style={styles.myButton}>
        <Text style={styles.myButtonText}>Start</Text>
      </TouchableOpacity>
    </View>
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
