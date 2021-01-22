import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Person from './Person.js';

const exampleData = [
    {name: "Ted", range: "12-5"},
    {name: "Jeff", range: "1-6"},
    {name: "Terry", range: "2-4"},
    {name: "Nadiya", range: "3-7"},
    {name: "Josh", range: "12-8"},
    {name: "Howard", range: "4-9"},
    {name: "Tony", range: "6-10"},
]

export default function People (props) {

    return (
        <View>
            <View style={styles.list}>
                <View style={styles.usernameHead}>
                    <Text>
                        Username
                    </Text>
                </View>
                <View style={styles.availabilityHead}>
                    <Text>
                        Availability
                    </Text>
                </View>
            </View>
            {
                exampleData.map((user, index) => (
                    <Person user={user} key={index}/>
                ))
            }
        </View>
    )
}

const styles = StyleSheet.create({
    list: {
        flex: 1,
        backgroundColor: "#fff",
        flexDirection: "row",
        marginBottom: 5
    },
    usernameHead: {
        color: "white",
        flex: 1,
        alignItems: "center"
    },
    availabilityHead: {
        color: "white",
        flex: 2,
        alignItems: "center"
    }
})