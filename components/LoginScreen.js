import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Button, TextInput, Alert } from 'react-native';
import logo from '../assets/MSD2.png'
import firebase from './../firebase';

export default class LoginScreen extends React.Component {
    state = {
        email: '',
        password: ''
     }
     handleEmail = (text) => {
        this.setState({ email: text })
     }
     handlePassword = (text) => {
        this.setState({ password: text })
     }

     componentDidMount() {

     }
     
    render() {
        return (
            <View style={{flex: 1, backgroundColor: 'black', alignItems: 'center'}}>
                <ScrollView>
                    <View style={{flex:1, backgroundColor: 'black', alignItems: 'center'}}>
                        <Image source={logo} style={{ width: 340 , height: 270, marginTop: 30, marginBottom: 15 }} />
                        <TextInput style = {styles.input}
                            underlineColorAndroid = "transparent"
                            placeholder = "Email"
                            placeholderTextColor = "#d2f7f1"
                            color = "#d2f7f1"
                            autoCapitalize = "none"
                            onChangeText = {this.handleEmail}
                            textAlign={'center'}
                        />
                        
                        <TextInput style = {styles.input}
                            underlineColorAndroid = "transparent"
                            placeholder = "Password"
                            placeholderTextColor = "#d2f7f1"
                            color = "#d2f7f1"
                            autoCapitalize = "none"
                            onChangeText = {this.handlePassword}
                            textAlign={'center'}
                            secureTextEntry={true}
                        />
                        
                        <TouchableOpacity
                            style = {styles.submitButton}
                            onPress = {
                                () => {
                                    firebase
                                    .auth()
                                    .signInWithEmailAndPassword(this.state.email, this.state.password)
                                    .then(userCredentials => {
                                        this.props.navigation.navigate('HomePage');
                                    })
                                    .catch(error => {
                                        Alert.alert('Couldnt sign in')
                                    });
                                    
                                }
                            }>
                            <Text style = {styles.submitButtonText}> Sign In </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style = {styles.submitButton}
                            onPress = {
                                () => {

                                    firebase
                                    .auth()
                                    .createUserWithEmailAndPassword(this.state.email, this.state.password)
                                    .then(userCredentials => {
                                        this.props.navigation.navigate('HomePage');
                                    })
                                    .catch(error => {
                                        Alert.alert('Couldnt sign up')
                                    });
                                    
                                }
                            }>
                            <Text style = {styles.submitButtonText}> Sign Up </Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
            // <View style={{flex:1, backgroundColor: 'black', alignItems: 'center'}}>
            //     <Image source={logo} style={{ width: 305, height: 300, marginTop: 30 }} />
            //     <TouchableOpacity onPress={() => this.navigateToSurvey()} style={styles.myButton}>
            //         <Text style={styles.myButtonText}>Take Survey</Text>
            //     </TouchableOpacity>
            //     <TouchableOpacity onPress={() => this.navigateToCharts()} style={styles.myButton}>
            //         <Text style={styles.myButtonText}>Chart Info</Text>
            //     </TouchableOpacity>
            //     <TouchableOpacity onPress={() => this.navigateToMyInfo()} style={styles.myButton}>
            //         <Text style={styles.myButtonText}>Your Information</Text>
            //     </TouchableOpacity>
            // </View>
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
    container: {
        paddingTop: 23,
        backgroundColor: 'black'
     },
     input: {
        margin: 15,
        height: 50,
        width: 300,
        borderColor: '#2a4944',
        borderWidth: 2.5,
        fontWeight:'bold',
        borderRadius: 5
     },
     submitButton: {
        backgroundColor: '#1C1C1C',
        margin: 15,
        height: 50,
        width: 250,
        borderColor: '#2a4944',
        borderWidth: 2.5,
        borderRadius: 20
     },
     submitButtonText:{
        color: '#d2f7f1',
        textAlign: 'center',
        padding: 12,
        fontSize: 20,
        fontWeight:'bold'
     }
  });