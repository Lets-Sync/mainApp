import React, { useState } from 'react';
import { Alert, StyleSheet, Text, View, SafeAreaView, ScrollView, Button, TouchableOpacity } from 'react-native';
import { Header } from 'react-native-elements'
import Chart from './Chart.js';
import ListModal from './ListModal.js';
import People from './People.js';
import calculateChart from '../helpers/calculateChart.js';
import Invite from './Invite.js';
import InviteModal from './InviteModal.js'

// const exampleData = [
//     {name: "Ted", range: "12-5"},
//     {name: "Jeff", range: "1-6"},
//     {name: "Terry", range: "2-4"},
//     {name: "Nadiya", range: "3-7"},
//     {name: "Josh", range: "12-8"},
//     {name: "Howard", range: "4-9"},
//     {name: "Tony", range: "6-10"},
// ]

export default function Schedule (props) {
    const [people, setPeople] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [addModalVisible, setAddModalVisible] = useState(false);
    const [selectedTime, setSelectedTime] = useState(0);
    const [labels] = useState([12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    const [exampleData, setExampleData] = useState([
        {name: "Ted", range: "12-5"},
        {name: "Jeff", range: "1-6"},
        {name: "Terry", range: "2-4"},
        {name: "Nadiya", range: "3-7"},
        {name: "John", range: "12-8"},
        {name: "Howard", range: "4-9"},
        {name: "Tony", range: "6-10"},
    ])
    const [data, setData] = useState(calculateChart(exampleData))
  
    // const data = [0, 25, 50, 75, 100, 80, 20, 30, 10, 50, 70]
    // const data = calculateChart(exampleData);
    
    const getDateString = () => {
      const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
      const date = new Date();
      return `Current Schedule for ${months[date.getMonth()]} ${date.getDate()}, ${date.getUTCFullYear()}`
    }
  
    const getBestTime = (times) => {
      return `Looks like the best time to meet is: ${labels[data.indexOf((Math.max(...times)).toString())]}:00`
    }

    return (
        <SafeAreaView style={styles.container}>
            <Header
                backgroundColor='#374785'
                leftComponent={{ icon: 'menu', color: '#fff' }}
                centerComponent={{ text: "LET'S SYNC", color: '#fff', style: {color: "#fff", fontSize: 18} }}
                rightComponent={<Invite setAddModalVisible={setAddModalVisible}/>}
            />
            <ListModal selectedTime={selectedTime} visible={modalVisible} setModalVisible={setModalVisible} data={exampleData}/>
            <InviteModal visible={addModalVisible} setAddModalVisible={setAddModalVisible} />
            <ScrollView>
                <Chart data={data} labels={labels} setSelectedTime={setSelectedTime} setModalVisible={setModalVisible}/>
                <Text style={styles.text}>
                    {getDateString()}
                </Text>
                <Text style={styles.text}>
                    {getBestTime(data)}
                </Text>
                <TouchableOpacity style={styles.availButton} 
                onPress={() => Alert.prompt("Add your availability", 
                "Enter in the form of '12-2'",
                (text) => {
                    let newData = exampleData;
                    let newUser = {name: "Josh", range: text}
                    newData.push(newUser);
                    console.log(newData)
                    setExampleData(newData);
                }
                 )}>
                    <Text style={{color: "white"}}>
                        Add Availability
                    </Text>
                </TouchableOpacity>
                <People exampleData={exampleData} setExampleData={setExampleData}/>

            </ScrollView>
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#24305e',
      alignContent: "center"
    },
    text: {
      color: "#fff",
      textAlign: "center",
      fontSize: 20,
      margin: 10
    },
    availButton: {
        alignItems: "center",
        justifyContent: "center",
        margin: 20,
        backgroundColor: "#f76c6c",
        height: 40,
        width: 200,
        borderRadius: 10,
        left: 75
    }
  });
