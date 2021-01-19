import React, { useState, useEffect } from "react"
import { ScrollView, View, Text, TouchableOpacity, StyleSheet, FlatList, Dimensions } from "react-native"
import moment from "moment"

const windowWidth = Dimensions.get('window').width;
const wp = (percent) => {
    return windowWidth * percent / 100
}

const ScoreItem = ({ item }) => {
    return (
        <View style={styles.layoutScore}>
            <View style={styles.leftScore}>
                <Text style={styles.textStart}>Score : {item.score} </Text>
            </View>
            <View style={styles.RightScore}>
                <Text style={styles.textTime}>{moment(item.createdAt).format("DD-MM-YYYY")}</Text>
                <Text style={styles.textTime}>{moment(item.createdAt).format("HH:mm:ss")}</Text>
            </View>
        </View>
    )
}

const BeforeQuiz = ({ navigation, dataResult, setStart, data, setMode }) => {
    return (
        <View style={styles.container}>
            <View style={styles.layoutDetail}>
                <View style={styles.cardDetail}>
                    <Text style={styles.textStart}>{data.title}</Text>
                    <Text style={styles.textStart}>Waktu : {data.time} menit</Text>
                    <Text style={styles.textStart}>Bisa Mengulang : {data.tryAgain ? "Ya" : "Tidak"}</Text>
                </View>
            </View>
            <View style={styles.layoutListScore}>
                <View style={styles.layoutRiwayatScore}>
                    <Text style={styles.textStart}>Riwayat Score</Text>
                </View>
                <FlatList
                    data={dataResult}
                    renderItem={({ item }) =>
                        <ScoreItem item={item} />
                    }
                    keyExtractor={(item, index) => index.toString()
                    }
                />
            </View>
            <View style={styles.layoutBottom}>
                <View style={styles.layoutButton}>
                    <TouchableOpacity
                        style={styles.buttonBack}
                        onPress={() => {
                            navigation.goBack()
                        }
                        }>
                        <Text style={styles.textBack}>Kembali</Text>
                    </TouchableOpacity>
                    {data.tryAgain === false && dataResult.length > 0 ?
                        <TouchableOpacity
                            style={styles.buttonStart}
                            onPress={() => {
                                setStart(true)
                                setMode("lihat")
                            }
                            }>
                            <Text style={styles.textStart}>Lihat Soal</Text>
                        </TouchableOpacity>
                        :
                        <TouchableOpacity
                            style={styles.buttonStart}
                            onPress={() => {
                                setStart(true)
                                setMode("mulai")
                            }
                            }>
                            <Text style={styles.textStart}>Mulai</Text>
                        </TouchableOpacity>
                    }
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
    },
    layoutDetail: {
        flex: 2,
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
    },
    cardDetail: {
        width: wp(80),
        height: 150,
        backgroundColor: "#B89AD3",
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center"
    },
    layoutBottom: {
        flex: 1
    },
    layoutButton: {
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#fff",
        height: 80,
        width: "80%",
        alignContent: "center",
        alignItems: "center",
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 10,
        marginVertical: 5,
    },
    buttonStart: {
        backgroundColor: "#B89AD3",
        height: "100%",
        width: "50%",
        alignItems: "center",
        alignContent: "center",
        justifyContent: "center",
        paddingVertical: 5,
        borderTopRightRadius: 10,
        borderBottomEndRadius: 10
    },
    textStart: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18
    },
    buttonBack: {
        backgroundColor: "#fcfcfc",
        height: "100%",
        width: "50%",
        alignItems: "center",
        alignContent: "center",
        justifyContent: "center",
        paddingVertical: 5,
        borderTopStartRadius: 10,
        borderBottomStartRadius: 10
    },
    textBack: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 18
    },
    textTime: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 12
    },
    layoutScore: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignContent: "center",
        alignItems: "center",
        width: wp(70),
        height: 50,
        borderRadius: 30,
        borderColor: '#000',
        borderWidth: 1,
        marginVertical: 10
    },
    leftScore: {
        width: "50%",
        backgroundColor: "#B89AD3",
        height: "100%",
        borderTopStartRadius: 30,
        borderBottomStartRadius: 30,
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",

    },
    RightScore: {
        height: "100%",
        width: "50%",
        borderTopEndRadius: 30,
        borderBottomEndRadius: 30,
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
    },
    layoutListScore: {
        flex: 2,
        marginVertical: 10,
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center"
    },
    layoutRiwayatScore: {
        backgroundColor: "#B89AD3",
        width: wp(50),
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        marginVertical: 5
    }
})

export default BeforeQuiz