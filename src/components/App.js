import { registerRootComponent } from 'expo';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, FlatList } from 'react-native';
import { Header, ListItem, Avatar } from 'react-native-elements'
import { styles } from '../styles/AppStyles.js';
import Login from './Login.js'

const App = () => {
  return (
    <Login/>
  );
}

export default registerRootComponent(App);


