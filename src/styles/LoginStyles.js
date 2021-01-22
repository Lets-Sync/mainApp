import { Text, View, StyleSheet, ImageBackground, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  _mainContainer: {
    display: 'flex',
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    alignContent: 'center',
    backgroundColor: '#24305E',
  },
  _logoText: {
    color: 'white',
    fontSize: 55,
    fontWeight: '900',
    paddingBottom: 10
  },
  _loginInput: {
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 60,
    width: 300,
    height: 60,
    backgroundColor: "#465078",
    paddingLeft: 30,
    fontSize: 30,
    color: 'white',
    marginBottom: 10
  },
  _loginButton: {
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 60,
    width: 300,
    height: 60,
    backgroundColor: "#F76C6C",
    paddingLeft: 30,
    fontSize: 30,
    color: 'white',
    marginBottom: 10,
    marginTop: 30
  },
  _loginButtonText: {
    color: 'white',
    fontSize: 30,
    fontWeight: '900',
    textAlign: 'center',
    textAlignVertical: 'center',
    paddingTop: 10,
    paddingRight: 30,

  }
})