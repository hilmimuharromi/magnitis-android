import React, { useState, useEffect } from "react"
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView } from "react-native"
import HtmlRender from "@components/HtmlRender"


const Question = ({ item, answer, setAnswer, }) => {
    const [answerKey, setAnswerKey] = useState("")
    const keyTrue = item.options.findIndex(item => item.isTrue)

    const handlePilih = (key) => {
        let data = {
            isEssay: false,
            key: item.key,
            userAnswer: key,
            trueAnswer: item.options[keyTrue].key,
            point: item.point
        }
        let filterData = answer.filter((item) => item.key !== data.key)
        setAnswer([...filterData, data])
    }

    const handleEssay = (essay) => {
        let data = {
            key: item.key,
            isEssay: true,
            userAnswer: essay,
            trueAnswer: "",
            point: item.point
        }
        let filterData = answer.filter((item) => item.key !== data.key)
        setAnswer([...filterData, data])
    }



    return (
        <>
            <View style={styles.question}>
                <View style={styles.title}>
                    <Text style={styles.text_title}>
                        {item.key}
                    </Text>
                </View>
                <ScrollView style={styles.html}>
                    <HtmlRender data={item.question} />
                </ScrollView>
                {item.options.length > 0 ?
                    <View style={styles.layout_option}>
                        {item.options.map((item, index) => (
                            <TouchableOpacity
                                key={index}
                                style={answerKey === item.key ? styles.buttonIsAnswer : styles.buttonAnswer}
                                onPress={() => {
                                    setAnswerKey(item.key)
                                    handlePilih(item.key)
                                }
                                }
                            >
                                <Text>{item.value}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                    :
                    <View style={styles.layout_option}>
                        <TextInput
                            onChangeText={(text) => handleEssay(text)}
                            // onEndEditing={(e) => handleEssay(e.nativeEvent.text)}
                            multiline={true}
                            style={styles.essay}
                        />
                    </View>
                }
            </View >
        </>
    )
}


const styles = StyleSheet.create({
    title: {
        flex: 1,
        width: "40%",
        flexDirection: "row",
        justifyContent: "center",
        backgroundColor: "#B89AD3"
    },
    text_title: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 22,
    },
    buttonAnswer: {
        height: 60,
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 5,
        borderRadius: 10,
        borderColor: "#000",
        shadowColor: "#000",
        backgroundColor: "#fff",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 0.70,
        elevation: 1,
    },
    buttonIsAnswer: {
        height: 60,
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 5,
        borderRadius: 10,
        backgroundColor: "#B89AD3",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 0.70,
        elevation: 1,
    },
    question: {
        flex: 1,
        paddingTop: 0,
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fcfcfc",
        paddingBottom: 20,
        marginVertical: 5,
        borderRadius: 30,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 0.70,
        elevation: 1,
    },
    html: {
        paddingVertical: 5,
        width: "90%"
    },
    layout_option: {
        width: "90%",
    },
    essay: {
        height: 100, borderColor: 'gray', borderWidth: 1
    },
})

export default Question