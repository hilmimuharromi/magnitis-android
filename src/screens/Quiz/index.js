import React from "react"
import { connect } from 'react-redux';
import {View, Text, StyleSheet,FlatList, TouchableOpacity} from "react-native"
import HtmlRender from "@components/HtmlRender"


const Question = ({item}) => {
    return(
        <>
        <View style={{borderColor: "black", borderRadius: 5}}>
            <HtmlRender data={item.question} />
        </View>
        <View>
            {item.options.map((item, index) => (
            <TouchableOpacity key={index} style={styles.buttonAnswer}>
                <Text>{item.value}</Text>
            </TouchableOpacity>
            ))}
            
        </View>
        </>
    )
}


const QuizScreen = ({data}) => {
    return(
        <FlatList
        style={styles.container}
            data={data}
            renderItem={({ item }) => 
                <Question item={item} />
            }
            keyExtractor={ (item, index) => index.toString()
            }
        />
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1, padding: 5, backgroundColor: "#fff" 
    },
    buttonAnswer: {
        height: 60,
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 5,
        borderRadius: 5,
        // borderBottomEndRadius: 30,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 0.70,
        elevation: 2,
    },
})


const mapStateToProps = state => {
    const { quiz } = state;
    const { data, loading } = quiz

    return {
        data,
        loading
    };
}
const mapDispatchToProps = {
   
}

export default connect(mapStateToProps, mapDispatchToProps)(QuizScreen);
