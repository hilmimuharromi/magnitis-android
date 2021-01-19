import React, { useEffect } from "react"
import { View, Text, StyleSheet, FlatList, RefreshControl, Dimensions, ScrollView } from "react-native";
import { connect } from 'react-redux';
import { GetPlaylist, GetQuizResult } from "@stores/action"
import CardPembelajaran from "@components/CardPembelajaran"



const windowWidth = Dimensions.get('window').width;
const wp = (percent) => {
    return windowWidth * percent / 100
}
const Pembelajaran = ({ data, loading, GetPlaylist, navigation, GetQuizResult, userId }) => {

    useEffect(() => {
        GetPlaylist()
    }, [])

    if (loading) {
        return (
            <View style={{ flex: 1, padding: 5, flexDirection: "row", justifyContent: "center" }}>
                <Text>Loading .... </Text>
            </View>
        )
    }

    if (!data) {
        return (
            <ScrollView
                style={{ flex: 1, padding: 5 }}
                refreshControl={
                    <RefreshControl refreshing={loading} onRefresh={() => GetPlaylist()}
                    />
                }
            >
                <View style={{ flex: 1, padding: 5, flexDirection: "row", justifyContent: "center" }}>
                    <Text>Pull To Refresh</Text>
                </View>
            </ScrollView>
        )
    }

    return (
        <FlatList
            style={styles.container}
            data={data}
            renderItem={({ item }) =>
                <CardPembelajaran
                    key={item.key}
                    item={item}
                    navigation={navigation}
                    GetQuizResult={GetQuizResult}
                    userId={userId}
                />}
            refreshControl={
                <RefreshControl refreshing={loading} onRefresh={() => GetPlaylist()} />
            }
            keyExtractor={(item, index) => index.toString()}
        />
    );
}
const styles = StyleSheet.create({
    container: {
        width: wp(100),
        padding: 5,
        backgroundColor: "#fff"
    }

})


const mapStateToProps = state => {
    const { playlist, user } = state;
    const { data, loading } = playlist

    return {
        data,
        loading,
        userId: user.data.userId
    };
}
const mapDispatchToProps = {
    GetPlaylist,
    GetQuizResult
}

export default connect(mapStateToProps, mapDispatchToProps)(Pembelajaran);
