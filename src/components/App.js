import React from 'react';
import { Text, View, FlatList } from 'react-native';
import { Header, ListItem, Avatar } from 'react-native-elements'
import { styles } from '../styles/AppStyles.js';
import Login from './Login.js'
import { registerRootComponent } from 'expo';
import Splash from './Splash.js';
import Home from './Home.js';
import Schedule from './Schedule.js';

const App = () => {
  return (
    <Schedule />
  )
}

export default registerRootComponent(App);


