import React, {Component} from 'react';
import {StyleSheet, View, ScrollView, Text} from 'react-native';
import { BarChart, XAxis, LineChart, YAxis, Grid } from 'react-native-svg-charts'

class ChartScreen extends Component
{
  constructor (props)
  {
    super(props);
  }

  state = {
      arr: this.props.navigation.getParam('arr'),
      iArr: []
  }

  render () {
        const contentInset = { top: 20, bottom: 20 }
        const copyState = this.state.arr
        var n = ["Steps", "Floors Climbed","Total Miles","Lightly Active Miles","Moderately Active Miles","Very Active Miles","Sedentary Minutes","Lightly Active Minutes","Fairly Active Minutes","Very Active Minutes","HR 30 100 Minutes","HR 100 140 Minutes","HR 140 170 Minutes","HR 170 220 Minutes","Average Resting HR","BMI","Minutes Alseep","Sleep Efficiency","Weight"]
        return(
            <ScrollView style={{backgroundColor: 'black'}}>
             
             {
                 Object.keys(copyState).map(function(key, index) {
                    const idk = copyState[key].map(Number)
                    console.log(idk)
                    return(
                        <View style={{flex : 1, borderColor: 'white', borderWidth: 1, backgroundColor: 'black'}}>
                            <Text style={{textAlign: 'center', fontSize : 20, color: '#d2f7f1'}}>{n[key]} Graph</Text>
                            <View style={{ height: 200, flexDirection: 'row'}}>
                                
                                <YAxis
                                    data={idk}
                                    contentInset={contentInset}
                                    svg={{
                                        fill: '#d2f7f1',
                                        fontSize: 10,
                                    }}
                                    numberOfTicks={10}
                                    formatLabel={(value) => `${value}`}
                                />
                                <LineChart
                                    style={{ flex: 1, marginLeft: 16 }}
                                    data={idk}
                                    svg={{ stroke: 'rgb(134, 65, 244)' }}
                                    contentInset={contentInset}
                                >
                                <Grid svg={{
                                        stroke: '#009590', fontSize: 10
                                    }}/>
                                </LineChart>
                                
                            </View>
                        </View>
                    )
                  })
             }

            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    height: '60%'
  },
  container2: {
    borderColor: 'white',
    borderWidth: 1,
    backgroundColor: 'black',
  }
});

export default ChartScreen;