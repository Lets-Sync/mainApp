import React, { useState, useEffect } from 'react';
import { Text, TextInput, View, FlatList, TouchableOpacity, Modal } from 'react-native';
import { Header, ListItem, Avatar } from 'react-native-elements';
import { SwipeListView } from 'react-native-swipe-list-view';
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

const Home = ({ setPage }) => {
  const [groups, setGroups] = useState(list);
  const [modalVisible, setModalVisible] = useState(false);
  const [newGroupName, setNewGroupName] = useState(''); 

  useEffect(() => {}, [groups]);

  const handleGroupPress = () => {
    setPage('schedule');
  }

  const createGroup = () => {
    if (newGroupName !== '') {
      const newGroups = [...groups]
      newGroups.push({
        name: newGroupName,
      });
      setGroups(newGroups);
      setNewGroupName('');
    }
  }

  const leaveGroup = (rowMap, index) => {
    const newGroups = [...groups];
    console.log(newGroups);
    console.log(index);
    newGroups.splice(index, 1);
    setGroups(newGroups);
  }

  const keyExtractor = (item, index) => index.toString();

  const HiddenItemWithActions = props => {
    const { onLeave } = props;

    return (
      <View style={styles._homeRowBack}>
        <TouchableOpacity style={styles._homeBackRightBtn} onPress={onLeave}>
          <Text>Leave</Text>
        </TouchableOpacity>
      </View>
    )
  }

  const renderHiddenItem = (data, rowMap) => {
    return (
      <HiddenItemWithActions
        data={data}
        rowMap={rowMap}
        onLeave={() => leaveGroup(rowMap, data.index)}
      />
    )
  }

  const renderItem = ({ item }) => (
    <ListItem
      bottomDivider
      containerStyle={{ backgroundColor: '#465078' }}
      activeOpacity={0.6}
      onPress={handleGroupPress}
    >
      <ListItem.Content>
        <ListItem.Title style={{ color: '#ffffff' }}>{item.name}</ListItem.Title>
      </ListItem.Content>
      <ListItem.Chevron />
    </ListItem>
  );

  return (
    <View style={styles._homeContainer}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
      >
        <View style={styles._homeCenteredView}>
          <View style={styles._homeModalView}>
            <Text style={styles._homeModalText}>Enter group name</Text>
            <TextInput
              style={{ height: 40, width: 120, borderColor: 'gray', borderWidth: 1, marginBottom: 20 }}
              onChangeText={name => setNewGroupName(name)}
              value={newGroupName}
            />
            <TouchableOpacity 
              style={{ ...styles._homeOpenButton, backgroundColor: "#374785" }}
              onPress={() => {
                setModalVisible(!modalVisible);
                createGroup();
              }}
            >
              <Text style={styles._homeTextStyle}>Create group</Text>
            </TouchableOpacity >
          </View>
        </View>
      </Modal>
      <Header
        backgroundColor='#374785'
        leftComponent={{ icon: 'menu', color: '#fff', style: styles._homeTextStyle }}
        centerComponent={{ text: "LET'S SYNC", style: styles._homeTextStyle }}
        rightComponent={{ icon: 'search', color: '#fff', style: styles._homeTextStyle }}
      />
      <SwipeListView
        data={groups}
        renderItem={renderItem}
        renderHiddenItem={renderHiddenItem}
        rightOpenValue={-75}
        keyExtractor={keyExtractor}
        closeOnRowPress
      />
      <StatusBar style="auto" />
      <TouchableOpacity
        title='Create a group'
        accessibilityLabel='Create a new group'
        activeOpacity={0.6}
        onPress={() => setModalVisible(true)}
      >
        <View style={styles._homeFooter}>
          <Text style={styles._homeTextStyle}>Create a group</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default Home;