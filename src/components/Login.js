import React, { useState, useEffect } from 'react';
import { Text, SafeAreaView, TextInput, TouchableOpacity, Alert } from 'react-native';
import { styles } from '../styles/LoginStyles.js';
import SignUpModal from './SignUpModal.js';

const login = (props) => {

  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [modalVisible, setModalVisible] = React.useState(true);

  useEffect(() => {}, [username, password, modalVisible]
  );

  const auth = (username, password) => {
    if (username === 'Josh' && password === 'Demo') {
      props.setPage('home')
    } else {
      Alert.alert(
        "Unrecognized Login",
        "Please try again or sign up if this is your first time",
        [
          { text: "OK"}
        ],
        { cancelable: false }
      );
    }
  }

  return (
    <SafeAreaView style={styles._mainContainer}>
      <Text style={styles._logoText}>Let's Sync</Text>
      <TextInput style={styles._loginInput} placeholder='Username' placeholderTextColor='#B3B6B7' onChangeText={(text) => {setUsername(text)}}></TextInput>
      <TextInput style={styles._loginInput} placeholder='Password' placeholderTextColor='#B3B6B7' onChangeText={(text) => {setPassword(text)}}></TextInput>
      <TouchableOpacity style={styles._loginButton} onPress={() => {auth(username, password)}}>
        <Text style={styles._loginButtonText} >Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles._signUpButton}onPress={() => {setModalVisible(true)}} >
        <Text style={styles._loginButtonText} >Sign Up</Text>
      </TouchableOpacity>
      <SignUpModal modalVisible={modalVisible} setModalVisible={setModalVisible} />
    </SafeAreaView>
  );
}

export default login;