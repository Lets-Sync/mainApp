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
  _homeRowBack: {
    alignItems: "center",
    backgroundColor: "#24305E",
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
  _homeBackRightBtn: {
    alignItems: "flex-end",
    bottom: 0,
    justifyContent: "center",
    position: "absolute",
    top: 0,
    width: 75,
    paddingRight: 17,
    backgroundColor: "red",
    right: 0,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
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
  _homeOpenButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  _homeModalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});
