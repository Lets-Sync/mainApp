import { registerRootComponent } from 'expo';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, FlatList } from 'react-native';
import { Header, ListItem, Avatar } from 'react-native-elements'
import { styles } from '../styles/AppStyles.js';
import Splash from './Splash.js'

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
]

// TODO: refactor this to be its own component
const ListFooter = () => {
  //View to set in Footer
  return (
    <View style={styles.headerFooterStyle}>
      <Text style={styles.textStyle}>Create a group</Text>
    </View>
  );
};

const App = () => {
  
  const keyExtractor = (item, index) => index.toString()
  
  const renderItem = ({ item }) => (
    <ListItem bottomDivider>
      <ListItem.Content>
        <ListItem.Title>{item.name}</ListItem.Title>
      </ListItem.Content>
      <ListItem.Chevron />
    </ListItem>
  );

  return (
    <View style={styles.container}>
      <Header
        backgroundColor='#374785'
        leftComponent={{ icon: 'menu', color: '#fff' }}
        centerComponent={{ text: "LET'S SYNC", style: { color: '#fff' } }}
        rightComponent={{ icon: 'home', color: '#fff' }}
      />
      <FlatList
        keyExtractor={keyExtractor}
        data={list}
        renderItem={renderItem}
        ListFooterComponent={ListFooter}
      />
      <StatusBar style="auto" />
    </View>
  );
}

export default registerRootComponent(App);


