import { registerRootComponent } from 'expo';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import { styles } from '../styles/AppStyles.js';

class App extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <Text>Test Test 2</Text>
        <StatusBar style="auto" />
      </View>
    );
  }
}

export default registerRootComponent(App);


