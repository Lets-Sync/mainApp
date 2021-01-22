import React from 'react';
import {
    Alert,
    Modal,
    StyleSheet,
    Text,
    TouchableHighlight,
    View
} from 'react-native';

const exampleData = [
    {name: "Ted", range: "12-5"},
    {name: "Jeff", range: "1-6"},
    {name: "Terry", range: "2-4"},
    {name: "Nadiya", range: "3-7"},
    {name: "Josh", range: "12-8"},
    {name: "Howard", range: "4-9"},
    {name: "Tony", range: "6-10"},
]

export default function ListModal(props) {
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
            <Text style={styles.modalText}>Here are the people available at {props.selectedTime}:00</Text>
            {
                exampleData.map((user) => {
                    let times = user.range.split('-');
                    if (props.selectedTime >= Number(times[0]) && props.selectedTime <= Number(times[1])) {
                        return (
                            <Text>
                                {user.name}
                            </Text>
                        )
                    }
                })
            }
            <TouchableHighlight
                style={{ ...styles.openButton, backgroundColor: "#2196F3", marginTop: 5 }}
                onPress={() => {
                props.setModalVisible(!props.visible);
                }}
            >
                <Text style={styles.textStyle}>OK</Text>
            </TouchableHighlight>
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
    }
});
  