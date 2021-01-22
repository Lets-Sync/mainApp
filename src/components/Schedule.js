import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';
import Chart from './Chart.js';

export default function Schedule () {
    const [people, setPeople] = useState([])
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedTime, setSelectedTime] = useState(0);
  
    const data = [0, 25, 50, 75, 100, 80, 20, 30, 10, 50, 70]
    const labels = [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const screenWidth = Dimensions.get("window").width;
    
    const getDateString = () => {
      const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
      const date = new Date();
      return `Current Schedule for ${months[date.getMonth()]} ${date.getDate()}, ${date.getUTCFullYear()}`
    }
  
    const getBestTime = (times) => {
      return `Looks like the best time to meet is: ${labels[data.indexOf(Math.max(...times))]}:00`
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Chart data={data}/>
                <Text style={styles.text}>
                    {getDateString()}
                </Text>
                <Text style={styles.text}>
                    {getBestTime(data)}
                </Text>


            </ScrollView>
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#374785',
      alignContent: "center"
    },
    text: {
      color: "#fff",
      textAlign: "center",
      fontSize: 20,
      margin: 10
    },
  });
  