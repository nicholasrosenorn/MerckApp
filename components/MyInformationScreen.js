import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Button } from 'react-native';

export default class MyInformationScreen extends React.Component {

  navigateToInfo = (item) => {
    var result = Object.entries(item).map(( [k, v] ) => ({ [k]: v }))
    this.props.navigation.navigate('Info', {item: result});
  }
  
  state = {
    appData: this.props.navigation.getParam('appData'),
  }

  render() {
      const { navigate } = this.props.navigation;
      return (
         <View style={{backgroundColor: 'black'}}>
            <ScrollView>
               {
                  this.state.appData.map((item, index) => (
                     <View key = {item.FIELD1} style = {styles.container2}>
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
});
