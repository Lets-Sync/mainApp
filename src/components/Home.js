import React, { useState } from 'react';
import { Text, View, FlatList } from 'react-native';
import { Header, ListItem, Avatar } from 'react-native-elements'
import { StatusBar } from 'expo-status-bar';
import { styles } from '../styles/AppStyles.js';

// TODO: make this dynamically render from db
const list = [
  {
    name: 'Group 1'
  },
  {
    name: 'Group 2'
  },
  {
    name: 'Group 3'
  },
  {
    name: 'Group 4'
  },
  {
    name: 'Group 5'
  },
  {
    name: 'Group 6'
  },
];

const Home = () => {
  const handleGroupPress = () => {
    
  }

  const keyExtractor = (item, index) => index.toString()

  const renderItem = ({ item }) => (
    <ListItem 
      bottomDivider
      containerStyle={{ backgroundColor: '#465078' }}
      activeOpacity={0.6}
      underlayColor='#465078'
    >
      <ListItem.Content>
        <ListItem.Title style={{ color: '#ffffff' }}>{item.name}</ListItem.Title>
      </ListItem.Content>
      <ListItem.Chevron />
    </ListItem>
  );

  return (
    <View style={styles.container}>
      <Header
        backgroundColor='#374785'
        leftComponent={{ icon: 'menu', color: '#fff', style: styles.textStyle }}
        centerComponent={{ text: "LET'S SYNC", style: styles.textStyle }}
        rightComponent={{ icon: 'search', color: '#fff', style: styles.textStyle }}
      />
      <FlatList
        keyExtractor={keyExtractor}
        data={list}
        renderItem={renderItem}
      />
      <StatusBar style="auto" />
      <View style={styles.headerFooterStyle}>
        <Text style={styles.textStyle}>Create a group</Text>
      </View>
    </View>
  );
}

export default Home;