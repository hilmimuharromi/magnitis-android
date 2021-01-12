import React from "react"
import {View, Text, StyleSheet, RefreshControl, ScrollView } from "react-native"
import HtmlRender from "@components/HtmlRender"
import { connect } from 'react-redux';
import { GetPage } from "@stores/action"

const MateriScreen = ({route, data, loading}) => {
    const title = route.params.params

    if(loading) {
        return (
            <View>
                <Text>Loading ...</Text>
            </View>
        )
    }
    return (
        <ScrollView style={styles.container}
        refreshControl={
            <RefreshControl refreshing={loading} onRefresh={() => GetPage(title)} />
        }
    >
        <HtmlRender data={data} />
    </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, padding: 5, backgroundColor: "#fff" 
    }
})


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

export default connect(mapStateToProps, mapDispatchToProps)(MateriScreen);
// export default MateriScreen