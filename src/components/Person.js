import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Person(props) {
    return (
        <View style={styles.personHead}>
            <View style={styles.personUser}>
                <Text style={{color: "white"}}>
                    {props.user.name}
                </Text>
            </View>
            <View style={styles.personAvail}>
                <Text style={{color: "white"}}>
                    {props.user.range}
                </Text>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    personHead: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        margin: 5,
        backgroundColor: "#465078",
        borderRadius: 10,
        height: 30,

    },
    personUser: {
        flex: 1,
        alignItems: "center",
        color: "#000"
    },
    personAvail: {
        flex: 2,
        alignItems: "center",
        color: "#000"
    }
})
