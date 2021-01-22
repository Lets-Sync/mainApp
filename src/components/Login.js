import React from 'react';
import { styles } from '../styles/LoginStyles.js';

const login = () => {
  return (
    <SafeAreaView style={styles._mainContainer}>
      <Text style={styles._logoText}>Let's Sync</Text>
      <TextInput style={styles._loginInput} placeholder='Username' placeholderTextColor='#B3B6B7'></TextInput>
      <TextInput style={styles._loginInput} placeholder='Password' placeholderTextColor='#B3B6B7'></TextInput>
      <TouchableOpacity style={styles._loginButton}>
        <Text style={styles._loginButtonText} >Login</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default login;