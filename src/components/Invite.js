import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Icon } from 'react-native-elements';

export default function Add(props) {
    return (
        <View>
            <Icon 
                name="add"
                color="white"
                onPress={() => props.setAddModalVisible(true)}
            />
        </View>
    )
};