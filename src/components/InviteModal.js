import React from 'react';
import {
    Alert,
    Modal,
    StyleSheet,
    Text,
    TouchableHighlight,
    View,
    TextInput
} from 'react-native';


export default function AddModal(props) {
  return (
    <Modal
        animationType='slide'
        transparent={true}
        visible={props.visible}
        onRequestClose={() => {
            Alert.alert('Modal has been closed')
        }}
    >
        <View style={styles.centeredView}>
            <View style={styles.modalView}>
            <Text style={styles.modalText}>Enter unique user ID to invite to the group</Text>
            <TextInput 
                style={styles.input}
                placeholder="                                                  "
            />
            <View style={{flexDirection: "row"}}>
              <TouchableHighlight
                  style={{ ...styles.openButton, backgroundColor: "#2196F3", marginTop: 5, marginRight: 10 }}
                  onPress={() => {
                  props.setAddModalVisible(!props.visible);
                  }}
              >
                  <Text style={styles.textStyle}>Invite</Text>
              </TouchableHighlight>
              <TouchableHighlight
                  style={{ ...styles.openButton, backgroundColor: "#2196F3", marginTop: 5, marginLeft: 10 }}
                  onPress={() => {
                  props.setAddModalVisible(!props.visible);
                  }}
              >
                  <Text style={styles.textStyle}>Cancel</Text>
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
      marginTop: 22
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
      padding: 10,
      elevation: 2
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    },
    input: {
        margin: 15,
        height: 40,
        borderColor: 'black',
        borderWidth: 1
    }
});
  