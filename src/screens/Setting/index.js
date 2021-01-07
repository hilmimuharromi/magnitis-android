
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
            <View>
                <Text>Setting Page</Text>
            </View>
            <View style={styles.header}>
                <TouchableOpacity onPress={submit} style={styles.buttonLogout}>
                    <Text style={styles.text_header}>Logout</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
};

const mapStateToProps = state => {
    const { user } = state;
    const { data, loading } = user
    console.log("data state user", user)

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
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50,
    },

    buttonLogout: {
        backgroundColor: "#B89AD3",
        height: 40,
        alignItems: "center",
        paddingVertical: 5
    },
    text_header: {
        color: "#fff"
    }
});