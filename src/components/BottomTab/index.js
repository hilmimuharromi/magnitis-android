import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


const primaryColor = "#B89AD3"
const secondaryColor = "#a2dfd9"
export default function BottomTab({ state, navigation }) {
    const size = 25

    const IconHandler = ({ label, isFocused }) => {
        if (label === "Home") return (<MaterialIcons name="home" color={isFocused ? secondaryColor : "#fff"} size={size} />)
        else if (label === "Setting") return (<MaterialIcons name="settings" color={isFocused ? secondaryColor : "#fff"} size={size} />)
        else if (label === "Profile") return (<FontAwesome name="user" color={isFocused ? secondaryColor : "#fff"} size={size} />)
    }

    const ItemTab = ({ isFocused, label }) => {
        return (
            <TouchableOpacity onPress={() => navigation.navigate(label)}>
                {isFocused ?
                    <View style={styles.itemTab}>
                        <IconHandler label={label} isFocused={isFocused} />
                        <Text style={isFocused ? styles.itemTextActive : styles.itemText}>
                            {label}
                        </Text>
                    </View>
                    :
                    <View style={styles.itemTab}>
                        <IconHandler label={label} isFocused={isFocused} />
                    </View>
                }
            </TouchableOpacity>
        )
    }


    return (
        <View style={styles.container}>
            <View style={styles.layout}>
                {state.routes.map((item, index) => (
                    < ItemTab key={index} isFocused={index === state.index} label={item.name} />
                ))}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 5,
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center"
    },
    layout: {
        backgroundColor: primaryColor,
        width: "95%",
        height: 50,
        borderRadius: 7,
        justifyContent: "space-around",
        alignContent: "center",
        alignItems: "center",
        flexDirection: "row",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    itemTab: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        width: 60,
        padding: 0
    },
    itemText: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#fff"
    },
    itemTextActive: {
        fontSize: 18,
        fontWeight: "bold",
        color: secondaryColor
    }
})