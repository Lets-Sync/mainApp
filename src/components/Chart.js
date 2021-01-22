import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';

export default function Chart(props) {
    const labels = [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const screenWidth = Dimensions.get("window").width;

    return (
        <LineChart
            data={{
              labels: labels,
              datasets: [
                {
                  data: props.data
                }
              ]
            }}
            width={screenWidth} // from react-native
            height={320}
            yAxisSuffix="%"
            // onDataPointClick={(currentPoint) => {
            //   setModalVisible(true);
            //   setSelectedTime(labels[currentPoint.index])
            // }}
            yAxisInterval={20} // optional, defaults to 1
            chartConfig={{
              backgroundColor: "#f76c6c",
              backgroundGradientFrom: "#f76c6c",
              backgroundGradientTo: "#f76c6c",
              decimalPlaces: 0, // optional, defaults to 2dp
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              style: {
                borderRadius: 16
              },
              propsForDots: {
                r: "6",
                strokeWidth: "2",
                stroke: "#f76c6c"
              }
            }}
            style={{
              marginVertical: 8,
              borderRadius: 16
            }}
          />
    )
}