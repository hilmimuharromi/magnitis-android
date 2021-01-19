import React, { useState } from "react"
import { connect } from 'react-redux';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Modal, ActivityIndicator } from "react-native"
import { CountDown } from 'react-native-customizable-countdown'
import Question from "@components/Question"
import axios from "axios"
import { API_URL } from "@env"
import BeforeQuiz from "@components/BeforeQuiz"
import { GetQuizResult } from "@stores/action"

const QuizScreen = ({ data, dataUser, quizResult, navigation, loadingResult, GetQuizResult }) => {
    const [answer, setAnswer] = useState([])
    const [loadingSimpan, setLoadingSimpan] = useState(false)
    const [start, setStart] = useState(false)
    const [mode, setMode] = useState("lihat")



    const handleScore = (answer) => {
        let score = 0
        answer.map((item) => {
            return !item.isEssay && item.trueAnswer === item.userAnswer ? score += Number(item.point) : ""
        })
        simpanResult(score)
    }

    const simpanResult = async (score) => {
        let payload = {
            user: dataUser.userId,
            quiz: data._id,
            score,
            answer
        }

        try {
            setLoadingSimpan(true)
            const result = await axios({
                url: `${API_URL}/result`,
                method: "post",
                data: payload
            })
            if (result.data) {

                GetQuizResult(data._id, dataUser.userId,)
                setStart(false)
            }
        } catch (e) {
            console.log(e)
        } finally {
            setLoadingSimpan(false)

        }
    }

    if (loadingResult) {
        return (
            <View>
                <Text>Loading .....</Text>
            </View>
        )
    }

    return (
        <>
            {start ?
                <Modal visible={start}>
                    <View style={styles.container}>
                        <View style={styles.layoutTop} >
                            <FlatList
                                data={data.contents}
                                renderItem={({ item }) =>
                                    <Question item={item} answer={answer} setAnswer={setAnswer} />
                                }
                                keyExtractor={(item, index) => index.toString()
                                }
                            />
                        </View>
                        {mode === "lihat" ?
                            <View style={styles.layoutBottom}>
                                <TouchableOpacity
                                    style={styles.buttonLihat}
                                    disabled={loadingSimpan}
                                    onPress={() => {
                                        setStart(false)
                                    }}>
                                    <Text style={styles.textSubmit}>Lihat Score</Text>
                                </TouchableOpacity>
                            </View> :
                            <View style={styles.layoutBottom}>
                                <View style={styles.layoutTime}>
                                    <CountDown
                                        // ref={(ref) => this.myRef = ref}
                                        initialSeconds={data.time * 60}
                                        onTimeOut={() => { handleScore(answer) }}
                                        digitFontSize={14}
                                        labelFontSize={14}
                                        width={"60%"}
                                        height={"100%"}
                                        showSeparator={true}
                                        separatorStyle={{ color: 'red', fontSize: 14 }}
                                    />
                                </View>
                                <TouchableOpacity
                                    style={styles.buttonSubmit}
                                    disabled={loadingSimpan}
                                    onPress={() => {
                                        handleScore(answer)
                                    }}>
                                    {
                                        loadingSimpan ? <ActivityIndicator size="small" color="#B89AD3" />
                                            :
                                            <Text style={styles.textSubmit}>SUBMIT</Text>
                                    }
                                </TouchableOpacity>
                            </View>
                        }
                    </View>
                </Modal> : <View style={{ flex: 1 }}>
                    <BeforeQuiz navigation={navigation} dataResult={quizResult} setStart={setStart} data={data} setMode={setMode} />
                </View>
            }
        </>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 5,
        backgroundColor: "#B89AD3",
        alignItems: "center"
    },
    layoutTop: {
        flex: 5
    },
    layoutBottom: {
        flexDirection: "row",
        justifyContent: "center",
        backgroundColor: "#fff",
        height: 80,
        width: "100%",
        alignContent: "center",
        alignItems: "center",
        borderColor: '#fcfcfc',
        borderWidth: 1,
        borderRadius: 10,
        marginVertical: 5
    },
    buttonLihat: {
        backgroundColor: "#B89AD3",
        height: "100%",
        width: "50%",
        alignItems: "center",
        alignContent: "center",
        justifyContent: "center",
        paddingVertical: 5,
        borderRadius: 10
    },
    textTime: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 14,
    },
    textSubmit: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18
    },
    layoutTime: {
        alignItems: "center",
        alignContent: "center",
        justifyContent: "center",
        width: "50%"
    },
    buttonSubmit: {
        backgroundColor: "#B89AD3",
        height: "100%",
        width: "50%",
        alignItems: "center",
        alignContent: "center",
        justifyContent: "center",
        paddingVertical: 5,
        borderTopRightRadius: 10,
        borderBottomEndRadius: 10
    }
})


const mapStateToProps = state => {
    const { quiz, user, quizResult } = state;
    const { data, loading } = quiz

    return {
        data,
        loading,
        dataUser: user.data,
        quizResult: quizResult.data,
        loadingResult: quizResult.loading
    };
}
const mapDispatchToProps = {
    GetQuizResult

}

export default connect(mapStateToProps, mapDispatchToProps)(QuizScreen);
