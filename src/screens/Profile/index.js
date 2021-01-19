import React, { useEffect } from "react"
import { View, Text, RefreshControl, ScrollView } from "react-native";
import { connect } from 'react-redux';
import HtmlRender from "@components/HtmlRender"
import { GetPage } from "@stores/action"

const Profile = ({ GetPage, data, loading }) => {

    useEffect(() => {
        GetPage("profile")
    }, [])

    if (loading) {
        return (
            <View>
                <Text>Loading .... </Text>
            </View>
        )
    }

    return (
        <ScrollView style={{ flex: 1, padding: 5, backgroundColor: "#fff" }}
            refreshControl={
                <RefreshControl refreshing={loading} onRefresh={() => GetPage("profile")} />
            }
        >
            <HtmlRender data={data} />
        </ScrollView>
    );
}

const mapStateToProps = state => {
    const { pages } = state;
    const { data, loading } = pages

    return {
        data,
        loading
    };
}
const mapDispatchToProps = {
    GetPage
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);