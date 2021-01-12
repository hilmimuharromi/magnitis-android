import React from "react"
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from "react-native"
import { SetDataPage, SetDataQuiz } from "@stores/action"
import {useDispatch} from "react-redux"
const windowWidth = Dimensions.get('window').width;
const wp = (percent) => {
    return windowWidth * percent / 100
}
const primaryColor = "#B89AD3"
const secondaryColor = "#a2dfd9"
const CardPembelajaran = ({ item , navigation}) => {
    const dispatch = useDispatch()
    if (item.flag === "post") {
        return (
            <TouchableOpacity style={styles.container} 
            onPress={() => {
                dispatch(SetDataPage(item.post.content))
                navigation.navigate("Materi", {title: item.post.title})}}
                >
                <View style={styles.title}>
                    <Text style={styles.textTitle}>{item.post.title}</Text>
                </View>
                <View style={styles.tagPost}>
                    <Text style={styles.textTitle}>Materi</Text>
                </View>
            </TouchableOpacity>
        )
    } else {
        return (
            <TouchableOpacity style={styles.container}
            onPress={() => {
                dispatch(SetDataQuiz(item.quiz.contents))
                navigation.navigate("Quiz", {title: item.quiz.title})}}
            >
            <View style={styles.title}>
                <Text style={styles.textTitle}>{item.quiz.title}</Text>
            </View>
            <View style={styles.tagQuiz}>
                <Text style={styles.textTitle}>Test</Text>
            </View>
        </TouchableOpacity>
        )
    }
}

export default CardPembelajaran

const styles = StyleSheet.create({
    container: {
        width: wp(95),
        height: 70,
        borderTopRightRadius: 30,
        borderBottomEndRadius: 30,
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
        marginBottom: 5,
        backgroundColor: primaryColor,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
    },
    textTitle: {
        fontWeight: "bold",
        color: "#fff",
        fontSize: 13,
        textAlign: "center"
    },
    tagPost: {
        width: wp(15),
        backgroundColor: secondaryColor,
        height: "100%",
        alignContent: "center",
        alignItems: "center",
        justifyContent: "center",
        borderTopRightRadius: 30,
        borderBottomEndRadius: 30,
    },
    tagQuiz: {
        width: wp(15),
        backgroundColor: "red",
        height: "100%",
        alignContent: "center",
        alignItems: "center",
        justifyContent: "center",
        borderTopRightRadius: 30,
        borderBottomEndRadius: 30,
    },
    title: {
        width: wp(75),
        height: "100%",
        paddingLeft: 5,
        flexDirection: "row",
        alignContent: "center",
        alignItems: "center",
        justifyContent: "flex-start",
    }
})