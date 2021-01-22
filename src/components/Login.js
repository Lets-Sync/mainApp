import React from 'react';
import { Text, View, ImageBackground, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import { styles } from '../styles/LoginStyles.js';

const login = (props) => {
  return (
    <SafeAreaView style={styles._mainContainer}>
      <Text style={styles._logoText}>Let's Sync</Text>
      <TextInput style={styles._loginInput} placeholder='Username' placeholderTextColor='#B3B6B7'></TextInput>
      <TextInput style={styles._loginInput} placeholder='Password' placeholderTextColor='#B3B6B7'></TextInput>
      <TouchableOpacity style={styles._loginButton} onPress={() => {props.setPage('home')}}>
        <Text style={styles._loginButtonText} >Login</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default login;