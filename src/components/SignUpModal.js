import React from 'react';
import { StyleSheet, Text, View, TextInput, Modal, TouchableHighlight } from 'react-native';

const signUpModal = (props) => {

  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmedPassword, setConfirmedPassword] = React.useState('');

  const checkSignUp = () => {
    if (password === confirmedPassword) {
      props.setModalVisible(!props.modalVisible);
    } else {
      setConfirmedPassword('');
      props.setModalVisible(!props.modalVisible);
    }
  }

  return (
    <Modal animationType='slide' transparent={true} visible={props.modalVisible}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalTitleText}>Create Account</Text>
          <TextInput style={styles.modalText} placeholder='Username' placeholderTextColor='#B3B6B7' onChangeText={(text) => {setUsername(text)}}></TextInput>
          <TextInput style={styles.modalText} placeholder='Password' placeholderTextColor='#B3B6B7' onChangeText={(text) => {setPassword(text)}}></TextInput>
          <TextInput style={styles.modalText} placeholder='Confirm Password' placeholderTextColor='#B3B6B7' onChangeText={(text) => {setConfirmedPassword(text)}}></TextInput>
          <View style={{flexDirection: 'row'}}>
            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: "#374785", marginRight: 10 }}
              onPress={checkSignUp}
            >
              <Text style={styles.textStyle}>Back</Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: "#A8D0E6" }}
              onPress={() => {
                props.setModalVisible(!props.modalVisible);
              }}
            >
              <Text style={styles.textStyle}>Sign Up!</Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 13,
    elevation: 2,
  },
  textStyle: {
    fontSize: 30,
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    borderWidth: 1,
    borderColor: '#B3B6B7',
    fontSize: 20,
    marginBottom: 10,
    textAlign: "center",
    padding: 15,
    borderRadius: 60,
    width: 250,
  },
  modalTitleText: {
    fontSize: 30,
    marginBottom: 5,
    textAlign: "center",
    padding: 15,
    width: 250,
    fontWeight: '700'
  }
});

export default signUpModal;