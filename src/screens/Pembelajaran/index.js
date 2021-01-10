import React, { useEffect } from "react"
import { View, Text, StyleSheet, FlatList, RefreshControl, Dimensions, ScrollView } from "react-native";
import { connect } from 'react-redux';
import { GetPlaylist } from "@stores/action"
import CardPembelajaran from "@components/CardPembelajaran"



const windowWidth = Dimensions.get('window').width;
const wp = (percent) => {
    return windowWidth * percent / 100
}
const Pembelajaran = ({ data, loading, GetPlaylist }) => {

    useEffect(() => {
        GetPlaylist()
    }, [])

    if (loading) {
        return (
            <View>
                <Text>Loading .... </Text>
            </View>
        )
    }

    if (!data) {
        return (
            <ScrollView
                style={{ flex: 1 }}
                refreshControl={
                    <RefreshControl refreshing={loading} onRefresh={() => GetPlaylist()} />
                }
            >
                <Text>Pull To Refresh</Text>
            </ScrollView>
        )
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={({ item }) => <CardPembelajaran key={item.key} item={item} />}
                refreshControl={
                    <RefreshControl refreshing={loading} onRefresh={() => GetPlaylist()} />
                }
            />
        </View>


    );
}
const styles = StyleSheet.create({
    container: {
        width: wp(100),
        alignContent: "center",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 10,
        backgroundColor: "#fff"
    }

})


const mapStateToProps = state => {
    const { playlist } = state;
    const { data, loading } = playlist

    return {
        data,
        loading
    };
}
const mapDispatchToProps = {
    GetPlaylist
}

export default connect(mapStateToProps, mapDispatchToProps)(Pembelajaran);
