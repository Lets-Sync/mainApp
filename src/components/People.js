import React, { useState } from 'react';
import { StyleSheet, Text, View, Animated, TouchableHighlight, TouchableOpacity, StatusBar } from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';
import { styles } from '../styles/AppStyles.js';
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
    const [listData, setListData] = useState(
        exampleData.map((user, index) => ({
            key: `${index}`,
            name: user.name,
            range: user.range
        }))
    )

    const closeRow = (rowMap, rowKey) => {
        if (rowMap[rowKey]) {
            rowMap[rowKey].closeRow();
        }
    }

    const deleteRow = (rowMap, rowKey) => {
        closeRow(rowMap, rowKey);
        const newData = [...listData];
        const prevIndex = listData.findIndex(item => item.key === rowKey);
        newData.splice(prevIndex, 1);
        setListData(newData);
    }

    const VisibleItem = props => {
        const { data } = props;
        return (
            <TouchableHighlight style={peopleStyles.rowFrontVisible}>
                <View>
                    <Text style={peopleStyles.title} numberOfLines={1}>{data.item.name}</Text>
                    <Text style={peopleStyles.details} numberOfLines={1}>{data.item.range}</Text>
                </View>
            </TouchableHighlight>
        )
    }

    const HiddenItemWithActions = props => {
        const { onClose, onDelete } = props;

        return (
            <View style={peopleStyles.rowBack}>
                <Text>Edit</Text>
                <TouchableOpacity style={[peopleStyles.backRightBtn, peopleStyles.backRightBtnLeft]} onPress={onClose}>
                    <Text>Close</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[peopleStyles.backRightBtn, peopleStyles.backRightBtnRight]} onPress={onDelete}>
                    <Text>Delete</Text>
                </TouchableOpacity>
            </View>
        )
    }

    const renderItem = (data, rowMap) => {
        return (
            <VisibleItem data={data}/>
        )
    }

    const renderHiddenItem = (data, rowMap) => {
        return (
            <HiddenItemWithActions
                data={data}
                rowMap={rowMap}
                onClose={() => closeRow(rowMap, data.item.key)}
                onDelete={() => deleteRow(rowMap, data.item.key)}
            />
        )
    }

    return (
        <View style={peopleStyles.container}>
            <SwipeListView 
                data={listData}
                renderItem={renderItem}
                renderHiddenItem={renderHiddenItem}
                leftOpenValue={75}
                rightOpenValue={-150}
            />
        </View>
    )

    // return (
    //     <View>
    //         <View style={styles.list}>
    //             <View style={styles.usernameHead}>
    //                 <Text style={{color: "white", fontWeight: "bold"}}>
    //                     Username
    //                 </Text>
    //             </View>
    //             <View style={styles.availabilityHead}>
    //                 <Text style={{color: "white", fontWeight: "bold"}}>
    //                     Availability
    //                 </Text>
    //             </View>
    //         </View>
    //         {
    //             exampleData.map((user, index) => (
    //                 <Person user={user} key={index}/>
    //             ))
    //         }
    //     </View>
    // )
}

const peopleStyles = StyleSheet.create({
    list: {
        flex: 1,
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
    },
    container: {
        flex: 1,
    },
    rowFront: {
        backgroundColor: "#FFF",
        borderRadius: 5,
        height: 60,
        margin: 5,
        marginBottom: 15,
        shadowColor: '#999',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
    },
    rowFrontVisible: {
        backgroundColor: "#fff",
        borderRadius: 5,
        height: 60,
        padding: 10,
        marginBottom: 15,
    },
    rowBack: {
        alignItems: "center",
        backgroundColor: "#DDD",
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingLeft: 15,
        margin: 5,
        marginBottom: 15,
        borderRadius: 5,
    },
    backRightBtn: {
        alignItems: "flex-end",
        bottom: 0,
        justifyContent: "center",
        position: "absolute",
        top: 0,
        width: 75,
        paddingRight: 17,
    },
    backRightBtnLeft: {
        backgroundColor: "#1f65ff",
        right: 75,
    },
    backRightBtnRight: {
        backgroundColor: "red",
        right: 0,
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
    },
    trash: {
        height: 25,
        width: 25,
        marginRight: 7,
    },
    title: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 5,
        color: "#666"
    },
    details: {
        fontSize: 12,
        color: "#999"
    }
})