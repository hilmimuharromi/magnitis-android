import React, { Fragment, useEffect } from "react"
import { View, Text, StyleSheet, FlatList, RefreshControl, Dimensions, ScrollView } from "react-native";
import { connect } from 'react-redux';
import { GetPlaylist } from "@stores/action"
import CardPembelajaran from "@components/CardPembelajaran"



const windowWidth = Dimensions.get('window').width;
const wp = (percent) => {
    return windowWidth * percent / 100
}
const Pembelajaran = ({ data, loading, GetPlaylist, navigation }) => {

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
                style={{ flex: 1, padding: 5 }}
                refreshControl={
                    <RefreshControl refreshing={loading} onRefresh={() => GetPlaylist()} />
                }
            >
                <Text>Pull To Refresh</Text>
            </ScrollView>
        )
    }

    return (
            <FlatList
            style={styles.container}
                data={data}
                renderItem={({ item }) => 
                    <CardPembelajaran key={item.key} item={item} navigation={navigation} />}
                refreshControl={
                    <RefreshControl refreshing={loading} onRefresh={() => GetPlaylist()} />
                }
                keyExtractor={ (item, index) => index.toString() }
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
