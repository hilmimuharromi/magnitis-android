
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    StatusBar,
} from 'react-native';

import { SetUser } from "@stores/action"



const SettingScreen = (props) => {
    const { SetUser, dataUser, navigation } = props
    useEffect(() => {
        if (!dataUser) {
            navigation.navigate("LoginScreen")
        }
        // eslint-disable-next-line
    }, [dataUser])


    const submit = async () => {
        SetUser("")
    }


    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#B89AD3' barStyle="light-content" />
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.navigate("Petunjuk")} style={styles.buttonPrimary}>
                    <Text style={styles.text_header}>Petunjuk Penggunaan</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={submit} style={styles.buttonLogout}>
                    <Text style={styles.text_header}>Logout</Text>
                </TouchableOpacity>
            </View>

        </View >
    );
};

const mapStateToProps = state => {
    const { user } = state;
    const { data, loading } = user

    return {
        dataUser: data,
        loading
    };
}
const mapDispatchToProps = {
    SetUser,
    // SetLoading
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingScreen);
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flex: 1,
        justifyContent: "flex-end",
        paddingHorizontal: 20,
        paddingBottom: 50,
    },
    buttonPrimary: {
        backgroundColor: "#B89AD3",
        height: 50,
        alignItems: "center",
        alignContent: "center",
        justifyContent: "center",
        marginVertical: 30
    },
    buttonLogout: {
        backgroundColor: "red",
        height: 50,
        alignItems: "center",
        alignContent: "center",
        justifyContent: "center",
        marginVertical: 30
    },
    text_header: {
        color: "#fff"
    }
});