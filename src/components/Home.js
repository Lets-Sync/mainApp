import React, { useState } from 'react';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';
import { Header, ListItem, Avatar } from 'react-native-elements'
import { StatusBar } from 'expo-status-bar';
import { styles } from '../styles/HomeStyles.js';

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

const Home = (props) => {
  const handleGroupPress = () => {

  }

  const keyExtractor = (item, index) => index.toString()

  const renderItem = ({ item }) => (
    <ListItem
      bottomDivider
      containerStyle={{ backgroundColor: '#465078' }}
      activeOpacity={0.6}
      onPress={() => alert('Pressed!')}
    >
      <ListItem.Content>
        <ListItem.Title style={{ color: '#ffffff' }}>{item.name}</ListItem.Title>
      </ListItem.Content>
      <ListItem.Chevron />
    </ListItem>
  );

  return (
    <View style={styles._homeContainer}>
      <Header
        backgroundColor='#374785'
        leftComponent={{ icon: 'menu', color: '#fff', style: styles._homeTextStyle }}
        centerComponent={{ text: "LET'S SYNC", style: styles._homeTextStyle }}
        rightComponent={{ icon: 'search', color: '#fff', style: styles._homeTextStyle }}
      />
      <FlatList
        keyExtractor={keyExtractor}
        data={list}
        renderItem={renderItem}
      />
      <StatusBar style="auto" />
      <TouchableOpacity
        title='Create a group'
        accessibilityLabel='Create a new group'
        activeOpacity={0.6}
        onPress={() => alert('Pressed!')}
      >
        <View style={styles._homeFooter}>
          <Text style={styles._homeTextStyle}>Create a group</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default Home;