import React, { useEffect } from "react"
import { View, Text, RefreshControl, ScrollView } from "react-native";
import HtmlRender from "@components/HtmlRender"
import { connect } from 'react-redux';
import { GetPage } from "@stores/action"

const KIKD = ({ data, loading, GetPage }) => {

    useEffect(() => {
        GetPage("ki-kd")
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
                <RefreshControl refreshing={loading} onRefresh={() => GetPage("ki-kd")} />
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

export default connect(mapStateToProps, mapDispatchToProps)(KIKD);
// export default KIKD