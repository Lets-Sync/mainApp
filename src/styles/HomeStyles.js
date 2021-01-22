import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  _homeContainer: {
    flex: 1,
    backgroundColor: '#24305E',
  },
  _homeText: {
    color: '#ffffff',
    fontSize: 34,
  },
  _homeFooter: {
    width: '100%',
    height: 45,
    backgroundColor: '#374785',
  },
  _homeTextStyle: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 18,
    padding: 7,
  },
  _homeCenteredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  _homeModalView: {
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
  _homeModalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});
